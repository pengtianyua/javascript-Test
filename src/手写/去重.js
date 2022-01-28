const arr = [4, 1, 2, 3, 3, 4];

/**
 *
 * @param array
 * @returns {*}
 *
 * 开辟一个外部存储空间用于标识元素是否出现过
 */
const unique1 = array => {
	let container = {};
	// eslint-disable-next-line no-prototype-builtins
	return array.filter(item => container.hasOwnProperty(item) ? false : container[item] = true);
};

/**
 *
 * @param arr
 *
 * indexOf + filter
 */
const unique2 = arr => arr.filter((item, index) => arr.indexOf(item) === index);
3;
/**
 *
 * @param arr
 *
 * Set
 */
const unique3 = arr => Array.from(new Set(arr));

const unique4 = arr => [...new Set(arr)];

/**
 *
 * @param array
 * @returns {*[]}
 *
 * 通过比较相邻数字是否重复 将排序后的数组进行去重
 */
const unique5 = array => {
	array.sort((a, b) => a - b);
	let pre = 0;
	const result = [];
	for (let i = 0; i < array.length; i++) {
		if (!i || array[i] !== array[pre]) {
			result.push(array[i]);
		}
		pre = i;
	}
	return result;
};

/**
 *
 * @param arr
 *
 * 只要数字出现重复次 就将其移除掉
 */
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

const unique6 = arr => {
	let seen = new Map();
	return arr.filter(item => !seen.has(item) && seen.set(item, 1));
};

console.log(unique6(arr));
