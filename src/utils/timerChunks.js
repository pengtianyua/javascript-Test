/**
 * 分时函数
 * @param sourceArr
 * @param callback
 * @param count
 * @param wait
 * @return {(function(): void)|*}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (sourceArr = [], callback, count = 1, wait = 200) => {
	let ret, timer = null;
	const renderData = () => {
		for (let i = 0; i < sourceArr.length; i++) {
			ret = sourceArr.shift()
			callback(ret)
		}
	}
	return () => {
		if(!timer) {
			timer = setInterval(() => {
				if(sourceArr.length === 0) {
					clearInterval(timer)
					ret = null;
					return
				}
				renderData()
			}, wait)
		}
	}
}
