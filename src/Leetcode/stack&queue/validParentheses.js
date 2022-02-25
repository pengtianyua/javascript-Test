/**
 * 给定一个只包括 '('，')'，'{"，"}'，'['，']' 的字符串 s ，判断字符串是否有效。

 有效字符串需满足：
   左括号必须用相同类型的右括号闭合。
   左括号必须以正确的顺序闭合。
 */

/**
 * 栈实现
 * 遍历括号字符串 遇到左括号 将左括号压入栈中 遇到右括号 弹出栈顶元素（栈若为空 直接返回false） 判断是否是相同类型的括号 若不匹配 直接返回false
 * @param s
 * @returns {boolean}
 */
function validParentheses(s) {
	if (!s) {
		return true;
	}

	const leftToRight = {
		"(": ")",
		"{": "}",
		"[": "]"
	};

	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const ch = s[i];
		if (leftToRight[ch]) {
			stack.push(ch);
		} else {
			// 右括号开始匹配
			if (!stack.length || leftToRight[stack.pop()] !== ch) {
				return false;
			}
		}
	}

	// 最后检查栈内还有没有元素，有说明还有未匹配则不符合
	return !stack.length
}

console.log(validParentheses(''));
console.log(validParentheses('(){}[]'));
console.log(validParentheses('({}){{}[]]}[]'));
