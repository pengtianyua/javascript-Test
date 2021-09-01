/**
 * @description 计算文件的 MD5值
 * */
function calcFileMD5(file) {
	return new Promise((resolve, reject) => {
		let chunkSize = 2097152, // 2M
			chunks = Math.ceil(file.size / chunkSize),
			currentChunk = 0,
			spark = new SparkMD5.ArrayBuffer(),
			fileReader = new FileReader();

		fileReader.onload = e => {
			spark.append(e.target.result);
			currentChunk++;
			if (currentChunk < chunks) {
				loadNext();
			} else {
				resolve(spark.end());
			}
		};

		fileReader.onerror = () => {
			reject(fileReader.error);
			fileReader.abort();
		};

		function loadNext() {
			let start = currentChunk * chunkSize,
				end = start + chunkSize >= file.size ? file.size : start + chunkSize;

			fileReader.readAsArrayBuffer(file.silce(start, end));
		}

		loadNext();
	});
}

/**
 * @description 实现异步并发控制
 *
 * @param {number} poolLimit 限制的并发数
 * @param {any[]} array 任务数组
 * @param {function} iteratorFn 表示迭代函数，用于实现对每个任务项进行处理，该函数会返回一个 Promise 对象或异步函数
 * */
async function asyncPool(poolLimit, array, iteratorFn) {
	const ret = []; // 存储所有的异步任务
	const executing = []; // 存储正在执行的异步任务
	for (const item of array) {
		// 调用 iteratorFn 函数创建异步任务
		const p = Promise.resolve().then(() => iteratorFn(item, array));
		ret.push(p); // 保存新的异步任务

		// 当 poolLimit 值小于或等于总任务个数时 进行并发控制
		if (poolLimit <= array.length) {
			// 当任务完成后 从正在执行的任务数组中移除已完成的任务
			const e = p.then(() => executing.splice(executing.indexOf(e), 1));
			executing.push(e); // 保存正在执行的异步任务
			if (executing.length >= poolLimit) {
				await Promise.race(executing); // 等待较快的任务执行完成
			}
		}
	}
	return Promise.all(ret);
}

/**
 * @description 检测文件是否已经上传 如果存在则秒传 否则返回已上传的分块ID列表
 *
 * @param {string} url 接口路径
 * @param {string} name 文件名
 * @param md5 文件的 MD5 值
 * */
function checkFileExist(url, name, md5) {
	return request.get(url, {
		params: {
			name,
			md5
		}
	}).then(res => res.data);
}

/**
 * @description 执行上传任务
 *
 * @param {string} url 接口地址
 * @param file 文件流
 * @param fileMd5 文件 MD5 值
 * @param fileSize 文件大小
 * @param chunkSize
 * @param chunkIds
 * @param poolLimit
 * */
function upload({ url, file, fileMd5, fileSize, chunkSize, chunkIds, poolLimit = 1 }) {
	const chunks = typeof chunkSize === "number" ? Math.ceil(fileSize / chunkSize) : 1;
	return asyncPool(poolLimit, [...new Array(chunks).keys()], i => {
		if (chunkIds.indexOf(i + "") !== -1) {
			return Promise.resolve();
		}
		let start = i * chunkSize;
		let end = i + 1 === chunks ? fileSize : (i + 1) * chunkSize;
		const chunk = file.slice(start, end); // 对文件进行切割
		return uploadChunk({
			url,
			chunk,
			chunkIndex: i,
			fileMd5,
			fileName: file.name
		});
	});
}


/**
 * @description 实际上传
 *
 * @param url
 * @param chunk
 * @param chunkIndex
 * @param fileMd5
 * @param fileName
 * */
function uploadChunk({ url, chunk, chunkIndex, fileMd5, fileName }) {
	let formData = new FormData();
	formData.set("file", chunk, fileMd5 + "-" + chunkIndex);
	formData.set("name", fileName);
	formData.set("timestamp", Date.now());
	return request.post(url, formData);
}

/**
 * @description 通知服务端执行分块合并
 *
 * @param url
 * @param name
 * @param md5
 * */
function concatFiles(url, name, md5) {
	return request.get(url, {
		params: {
			name,
			md5
		}
	});
}

/**
 * @description 上传文件
 * */
async function uploadFile() {
	if (!uploadFileEle.files.length) return;
	const file = uploadFileEle.files[0]; // 获取待上传的文件
	const fileMd5 = await calcFileMD5(file); // 计算文件的MD5
	const fileStatus = await checkFileExist( // 判断文件是否存在
		"", // 接口地址
		file.name,
		fileMd5
	);
	if (fileStatus.data && fileStatus.data.isExists) {
		alert("文件已上传[秒传]");
		return;
	} else {
		await upload({
			url: "", // 接口地址
			file, // 文件对象
			fileMd5, // 文件 MD5 值
			fileSize: file.size, // 文件大小
			chunkSize: 1 * 1024 * 1024, // 分块大小
			chunkIds: fileStatus.data.chunkIds, // 已上传的分块列表
			poolLimit: 3 // 限制的并发数
		});
	}
	await concatFiles("", file.name, fileMd5);
}
