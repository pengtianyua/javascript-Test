/**
 *
 * @param fn
 * @param args
 * @returns {any}
 *
 * 判断当前函数传入的参数是否大于或等于 fn 需要参数的数量，如果是 直接执行 fn
 * 如果传入参数数量不够 返回一个闭包 暂存传入的参数 并重新返回 currying 函数
 */
function currying(fn, ...args) {
	if (args.length >= fn.length) {
		return fn(...args);
	} else {
		return (...args2) => currying(fn, ...args, ...args2);
	}
}
