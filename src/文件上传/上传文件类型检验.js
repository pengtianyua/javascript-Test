/**
 * @description 读取文件指定范围的二进制数据
 * */
export function readBuffer(file, start = 0, end = 2) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = function() {
			resolve(reader.result);
		};
		reader.onerror = reject;
		reader.readAsArrayBuffer(file.slice(start, end));
	});
}

/**
 * @description
 * */
export function check(headers) {
	return (buffers, options = { offset: 0 }) => {
		headers.every((header, index) => header === buffers[options.offset + index]);
	};
}
