const uploadFileEle = document.querySelector("#uploadFile");

export function uploadFile() {

	if (!uploadFileEle.files.length) return;

	//  获取单个文件
	const file = uploadFileEle.files[0];

	//  校验文件类型 大小

	//  上传文件
	upload({
		url: '',
		file
	});
}

function upload(url, file, fieldName = "file") {
	let formData = new FormData();
	formData.set(fieldName, file);
	request.post(url, formData, {
		//  监听上传进度
		onprogress(progressEvent) {
			const percentCompleted = Math.round(
				(progressEvent.loaded * 100) / progressEvent.total
			)
			console.log(percentCompleted);
		}
	});
}
