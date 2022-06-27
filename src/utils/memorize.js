/**
 * 缓存函数
 * @param callback
 * @return {(function(): (null))|*}
 */
export const memorize = callback => {
	let cache = false;
	let result = null;
	return () => {
		if(cache) {
			return result
		} else {
			result = callback()
			cache = true;
			callback = null;
			return result
		}
	}
}

export const lazyFunction = (factory) => {
	const fac = memorize(factory)
	return (...args) => {
		return fac()(...args)
	}
}
