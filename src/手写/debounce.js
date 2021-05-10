/**
 * @method debounce
 * @description 函数防抖
 * @param fn 需要防抖的函数
 * @param delay 延迟时间
 * */
function debounce(fn, delay) {
	let timeout = null;
	return function () {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn.apply(this, arguments);
		}, delay);
	};
}