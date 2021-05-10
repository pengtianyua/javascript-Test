/**
 * @method throttle
 * @description 函数节流
 * @param fn 需要节流的函数
 * @param delay 延迟时间
 * */
function throttle(fn, delay) {
	let canRun = true;
	return function () {
		if (!canRun) return;
		canRun = false;
		setTimeout(() => {
			fn.apply(this, arguments);
			canRun = true;
		}, delay);
	};
}