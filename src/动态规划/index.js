/**
 * 确定dp数组以及下标的含义
 * 确定递推公式
 * dp数组如何初始化
 * 确定遍历顺序
 * 举例推导dp数组
 * @param n
 * @returns {number}
 */
const fib = (n) => {
	let dp = [0, 1];
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	console.log(dp);
	return dp[n];
};
console.log(fib(10));

// 时间复杂度 O(n) 空间复杂度 O(1)
const fib3 = (n) => {
	let pre1 = 0;
	let pre2 = 1;
	let temp;
	if (n === 0) return 0;
	if (n === 1) return 1;
	for (let i = 2; i <= n; i++) {
		temp = pre1 + pre2;
		pre1 = pre2;
		pre2 = temp;
	}
	return pre2;
};
console.log(fib3(10));

// 递归解法
// 时间复杂度 O(2^n) 空间复杂度 O(n)
const fib2 = (n) => {
	if (n < 2) return n;
	return fib2(n - 1) + fib2(n - 2);
};

console.log(fib2(10));
