export function upload({ url, files, fieldName = "file" }) {
	let formData = new FormData();

	files.forEach((file, i) => {
		formData.append(fieldName, files[i], files[i].webkitRelativePath.replace(/\//g, "@"));
	});

	request.post(url, formData)
}
