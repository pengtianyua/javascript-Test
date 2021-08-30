// <input id="uploadFile" type="file" accept="image/*" multiple />

const uploadFileEle = document.querySelector("#uploadFile");

export async function uploadFile() {
	if (!uploadFileEle.files.length) return;

	const files = Array.from(uploadFileEle.files);

	upload({
		url: "",
		files
	});
}

function upload({ url, files, fieldName = "file" }) {
	let formData = new FormData();

	files.forEach(file => {
		formData.append(fieldName, file);
	});

	request.post(url, formData, {
		// 监听上传进度
		onUploadProgress: function(progressEvent) {
			const percentCompleted = Math.round(
				(progressEvent.loaded * 100) / progressEvent.total
			);
			console.log(percentCompleted);
		}
	});
}
