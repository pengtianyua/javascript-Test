/**
 *
 * @param fn
 * @param delay
 * @param flag
 * @returns {(function(...[*]=): void)|*}
 *
 * 有时需要让函数立即执行一次 再等后面事件触发后等待n秒执行 给 debounce 函数一个 flag 用于标识是否立即执行
 */
export function debounce(fn, delay, flag) {
	let timeout = null;
	return function (...args) {
		clearTimeout(timeout);
		if(flag && !timeout) { // 当定时器变量为空时 说明是第一次执行 就立即执行一次
			fn.apply(this, args)
		}
		timeout = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}
