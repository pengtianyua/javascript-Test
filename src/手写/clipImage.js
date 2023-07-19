/**
 * 裁剪图片 选择头像场景
 * @param path 图片路径
 * @param width 图片高度
 * @param height 图片宽度
 */
function clipImage(path, width, height) {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	const img = document.createElement("img");
	img.src = path;
	img.setAttribute("crossOrigin", "Anonymous");
	img.onload = function () {
		ctx.drawImage(this, 0, 0, width, height);
		console.log(canvas.toDataURL());
	};
}
