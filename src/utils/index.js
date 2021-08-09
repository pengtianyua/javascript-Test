/**
 * 将除最后 num 数以外的所有字符替换为指定的掩码字符
 *
 * @param {string | number} cc
 * @param {number} num
 * @param {string} mask
 * @returns {string}
 * */
function mask(cc, num = 4, mask = '*') {
	return `${cc}`.slice(-num).padStart(`${cc}`.length, mask)
}

mask(123456789) // *****6789

/**
 * 获取昨天的日期
 *
 * @returns {string}
 * */
function yesterday() {
	let d = new Date();
	d.setDate(d.getDate() - 1);
	return d.toISOString().split('T')[0]
}

yesterday() // 2021-5-29 (当前日期是2021-5-30)

/**
 * 如果字符串是y或yes返回true,如果字符串是n或no返回false 不区分大小写
 * 省略第二个参数，def将默认结果设置为no
 *
 * @param {string} val
 * @param {boolean} def
 * @returns {boolean}
 * */
function yesNo(val, def = false) {
	return /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def
}

yesNo('Y') // true
yesNo('Foo', true) // true

/**
 * 将 File 对象转为 ArrayBuffer
 *
 * @param file
 * */
function fileToBuffer(file) {
	return new Promise((resolve, reject) => {
		const fr = new FileReader()
		fr.onload = e => {
			resolve(e.target.result)
		}
		fr.readAsArrayBuffer(file)
		fr.onerror = () => {
			reject(new Error('转换文件格式错误'))
		}
	})
}

/**
 * 获取 URL 参数并转换为对象
 *
 * @param {string} queryStr
 * */
function getQueryParams(queryStr) {
	const res = {}
	const queryString = window?.location?.search || queryStr
	const reg = /[?&][^?&]+=[^?&]+/g
	const found = queryString.match(reg)
	if(found) {
		found.forEach((item) => {
			let temp = item.substring(1).split("=");
			let key = temp[0];
			res[key] = temp[1];
		});
	}
	return res
}

/**
 * 两数之和
 *
 * @param {number[]} nums
 * @param {number} target
 * */
function twoSum(nums, target) {
	let prevNums = {}
	for (let i = 0; i < nums.length; i++) {
		const curNum = nums[i]
		const targetNum = target - curNum
		const targetNumIndex = prevNums[targetNum]
		if(targetNumIndex === undefined) {
			prevNums[curNum] = i
		} else {
			return [targetNumIndex, i]
		}
	}
}
