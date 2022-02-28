/**
 * 根据逆波兰表达式 求表达式的值
 * 有效的运算符包括 + - * / 每个运算对象可以是整数 也可以是另一个逆波兰表达式
 */

/**
 * 逆波兰表达式是一种后缀表达式 所谓后缀就是指运算符写在后面
 * 去掉括号后表达式无歧义
 * 适合用栈操作运算 遇到数字则入栈 遇到运算符则取出栈顶两个数字进行计算 并将结果压入栈中
 */

/**
 * 时间复杂度 O(n) n是数组tokens的长度 需要遍历数组tokens一次 计算逆波兰表达式的值
 * 空间复杂度 O(n) n是数组tokens的长度 使用栈存储计算过程中的数 栈内元素个数不会超过逆波兰表达式的长度
 */

const evalRPN = function(tokens) {
	const stack = [];
	const n = tokens.length;
	for (let i = 0; i < n; i++) {
		const token = tokens[i];
		if (isNumber(token)) {
			stack.push(parseInt(token));
		} else {
			const num2 = stack.pop();
			const num1 = stack.pop();
			switch (token) {
				case "+":
					stack.push(num1 + num2);
					break;
				case "-":
					stack.push(num1 - num2);
					break;
				case "*":
					stack.push(num1 * num2);
					break;
				case "/":
					stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
			}
		}
	}
	return stack.pop();
};

const isNumber = token => {
	return !("+" === token || "-" === token || "*" === token || "/" === token);
};

console.log(evalRPN(["2","1","+","3","*"]));
