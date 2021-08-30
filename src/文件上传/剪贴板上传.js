const IMAGE_MIME_REGEX = /^image\/(jpe?g|gif|png)$/i;
const uploadAreaEle = document.querySelector("#uploadArea");

uploadAreaEle.addEventListener("paste", async e => {
	e.preventDefault();
	const files = [];
	if (navigator.clipboard) {
		let clipboardItems = await navigator.clipboard.read();
		for (const clipboardItem of clipboardItems) {
			for (const type of clipboardItem.types) {
				if (IMAGE_MIME_REGEX.test(type)) {
					const blob = await clipboardItem.getType(type);
					insertImage(blob, uploadAreaEle);
					files.push(blob);
				}
			}
		}
	} else {
		const items = e.clipboardDate.items;
		for (let i = 0; i < items.length; i++) {
			if (IMAGE_MIME_REGEX.test(items[i].type)) {
				let file = items[i].getAsFile();
				insertImage(file, uploadAreaEle);
				files.push(file);
			}
		}
	}
	if (files.length > 0) {
		confirm("剪贴板检测到图片文件，是否执行上传操作？") && upload({ url: "", files });
	}
});

function insertImage(file, container) {
	const reader = new FileReader();
	reader.onload = function(e) {
		let img = document.createElement("img");
		img.src = e.target.result;
		container.append(img);
	};
	reader.readAsDataURL(file);
}

function upload({ url, files, fieldName = "file" }) {
	let formData = new FormData();
	files.forEach(file => {
		let fileName = +new Date() + "." + IMAGE_MIME_REGEX.exec(file.type)[1];
		formData.append(fieldName, file, fileName);
	});
	requset.post(url, formData)
}
