/**
 * 求字符串公共前缀
 * ['abcaaa', 'abcddd', 'abcadad'] ==> 'abc'
 */

/**
 *
 * @param strs
 * @returns {string|*}
 */
const longestCommonPrefix = function(strs) {
	if (!strs.length) return "";
	if (strs.length === 1) return strs[0];
	const start = strs[0];
	let prefix = "", pre = "";
	for (let i = 0; i < start.length; i++) {
		prefix += start[i];
		if (strs.some(str => str.indexOf(prefix) !== 0)) return pre;
		pre = prefix;
	}
	return pre;
};

console.log(longestCommonPrefix(["abc", "abed", "abide"]));
