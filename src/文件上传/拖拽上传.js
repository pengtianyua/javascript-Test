/**
 * dragenter 当拖拽元素或选中的文本到一个可释放目标时触发
 * dragover 当元素或选中的文本被拖到一个可释放目标上时触发（每100毫秒触发一次）
 * dragleave 当拖拽元素或选中的文本离开一个可释放目标时触发
 * drop 当元素或选中的文本在可释放目标上被释放时触发
 * */

// <div id="dropArea">
// 	<p>拖拽上传文件</p>
// 	<div id="imagePreview"></div>
// </div>

const dropAreaEle = document.querySelector("#dropArea");
const imgPreviewEle = document.querySelector("#imagePreview");
const IMAGE_MIME_REGEXP = /^image\/(jpe?g|gif|png)$/i;

//  阻止默认拖拽行为
["dragenter", "dragover", "dragleave", "drop"].forEach(name => {
	dropAreaEle.addEventListener(name, preventDefault, false);
	document.body.addEventListener(name, preventDefault, false);
});

function preventDefault(e) {
	e.preventDefault();
	e.stopPropagation();
}

//  切换目标区域高亮显示
//  dragenter dragover 高亮
//  dragleave drop 移除高亮

//  处理图片预览
function handleDrop(e) {
	const dt = e.dataTransfer;
	const files = [...dt.files];
	files.forEach(file => {
		previewImage(file, imgPreviewEle);
		upload({
			url: "",
			file
		});
	});
}

function previewImage(file, container) {
	if (IMAGE_MIME_REGEXP.test(file.type)) {
		const reader = new FileReader();
		reader.onload = function(e) {
			let img = document.createElement("img");
			img.src = e.target.result;
			container.append(img);
		};
		reader.readAsDataURL(file);
	}
}

function upload({ url, file, fieldName = "file" }) {
	let formData = new FormData();
	formData.set(fieldName, file);
	request.post(url, formData, {
		onUploadProgress(progressEvent) {
			const percentCompleted = Math.round(
				(progressEvent.loaded * 100) / progressEvent.total
			);
			console.log(percentCompleted);
		}
	});
}
