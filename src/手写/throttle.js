/**
 *
 * @param fn
 * @param delay
 * @returns {(function(...[*]=): void)|*}
 *
 * 第一次事件不会触发 最后一次一定触发
 */
export function throttle(fn, delay) {
	let timer = null
	return function (...args) {
		if (!timer) {
			timer = setTimeout(() => {
				timer = null
				fn.apply(this, args);
			}, delay);
		}
	};
}

/**
 *
 * @param fn
 * @param time
 * @returns {(function(...[*]=): void)|*}
 *
 * 第一次事件肯定触发 最后一次不会触发
 */
export function throttle(fn, time) {
	let pre = 0;
	return function(...args) {
		if(Date.now() - pre > time) {
			pre = Date.now()
			fn.apply(this, args)
		}
	}
}
