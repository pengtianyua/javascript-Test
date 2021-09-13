/**
 * @description URL to Blob
 * */
export function dataUrlToBlob(base64, mimeType) {
	let bytes = window.atob(base64.split(",")[1]);
	let ab = new ArrayBuffer(bytes.length);
	let ia = new Uint8Array(ab);
	for (let i = 0; i < bytes.length; i++) {
		ia[i] = bytes.charCodeAt(i);
	}
	return new Blob([ab], { type: mimeType });
}

/**
 * @description 保存文件
 * */
export function saveFile(blob, filename) {
	const a = document.createElement("a");
	a.download = filename;
	a.href = URL.createObjectURL(blob);
	a.click();
	URL.revokeObjectURL(a.href);
}
