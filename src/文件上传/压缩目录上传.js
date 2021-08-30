//  https://www.npmjs.com/package/jszip

const uploadFileEle = document.querySelector("#uploadFile");

/**
 * @description 将目录下的文件列表压缩成一个ZIP
 * */
function generateZipFile(
	zipName, files,
	options = { type: "blob", compression: "DEFLATE" }
) {
	return new Promise((resolve, reject) => {
		const zip = new JSZip();

		for (let i = 0; i < files.length; i++) {
			zip.file(files[i].webkitRelativePath, files[i]);
		}

		zip.generateAsync(options).then(blob => {
			zipName = zipName || Date.now() + ".zip";
			const zipFile = new File([blob], zipName, {
				type: "application/zip"
			});
			resolve(zipFile);
		});
	});
}

async function uploadFile() {
	let fileList = uploadFileEle.files;
	if (!fileList.length) return;
	let webkitRelativePath = fileList[0].webkitRelativePath;
	let zipFileName = webkitRelativePath.split("/")[0] + "zip";
	let zipFile = await generateZipFile(zipFileName, fileList);
	upload({
		url: "",
		file: zipFile,
		fileName: zipFileName
	});
}

function upload({ url, file, fileName, fieldName = "file" }) {
	if(!url || !file) return
	let formData = new FormData()
	formData.append(fieldName, file, fileName)
	request.post(url, formData)
}
