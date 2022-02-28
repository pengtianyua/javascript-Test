/**
 * 根据每日气温列表 重新生成一个列表 对应位置的输出为 要想观测到更高的气温 至少需要等待的天数 如果气温在这之后都不会升高 请在该位置用0代替
 */

/**
 * 每个元素找到它右边第一个比它大的元素的位置 求它们的距离
 */

/**
 * 单调栈解法
 * 当前元素关注的是他右边的元素
 * 选择从右遍历 先为最右的元素找目标元素 需要考察的右边元素由少到多
 *
 * 用空间换取时间
 * 遍历一遍数组是少不了的 关键每个元素寻找目标元素做了很多重复的遍历
 * 用一个数据结构去存储右边的项 将无需比较的元素从该数据结构剔除 且不会再进来了 避免重复考察
 *
 * 什么剔除 什么留下
 * T[i]的目标是找到第一个大项 比它小的项该被剔除 因为比T[i]还小的元素 肯定不会是T[i-1]想找的大项
 * 大项留下 T[i]也进入到这个数据结构中 供T[i-1]寻找
 *
 * 保持单调 为了更快比较
 * 如果数据结构中的项无序 则新来的项无法快速地比较大小 找到大项
 * 如果从小到大排好 则很容易剔除小项 遇到大项
 *
 * 为什么是栈
 * 小项出了 当前项要进 依然维持排列的单调性
 * 所以当前项要从小项出的地方进
 * 只在一端进出 所以是栈
 *
 * 具体操作
 * 如果当前元素比栈顶大 则让小项逐个出栈 直到当前元素比栈顶小 停止出栈
 * 此时栈顶元素就是当前项右边第一个比自己大的元素索引 计算距离
 * 当前项入栈
 *
 * 复杂度分析
 * 一次遍历 O(n) 每个元素都出入栈各一次 线性时间的复杂度 综合 O(n)
 * 空间复杂度 O(n)
 */
const dailyTemperatures = T => {
	const res = new Array(T.length).fill(0);
	const stack = [];
	for (let i = T.length - 1; i >= 0; i--) {
		while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
			stack.pop();
		}
		if (stack.length) {
			res[i] = stack[stack.length - 1] - i;
		}
		stack.push(i);
	}
	console.log(stack);
	return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

/**
 * 总结部分
 * 单调递增栈 从栈底到栈顶递增 栈顶大
 * 单调递减栈 从栈底到栈顶递减 栈顶小
 *
 * 什么时候用单调栈
 * 通常是一维数组 要寻找任一元素右边(左边)第一个比自己大(小)的元素
 * 且要求 O(n)的时间复杂度
 */

/**
 * 模板套路
 * 单调递增栈会剔除波峰 留下波谷 单调递减栈会剔除波谷 留下波峰
 * 当前项向左找第一个比自己大的位置——从左向右维护一个单调递减栈
 * 当前项向左找第一个比自己小的位置——从左向右维护一个单调递增栈
 * 当前项向右找第一个比自己大的位置——从右向左维护一个单调递减栈
 * 当前项向右找第一个比自己小的位置——从右向左维护一个单调递增栈
 */
