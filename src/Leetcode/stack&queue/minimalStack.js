/**
 * 设计一个支持 push pop top操作 并能在常数时间内检索到最小元素的栈
 */

/**
 * "辅助栈"实现
 */

/**
 * 在这里初始化你的数据结构
 * @constructor
 */
const MinStack = function() {
	this.s = [];
	this.mins = [Infinity];
};

/**
 *
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
	this.s.push(val);
	this.mins.push(Math.min(this.mins[this.mins.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.s.pop();
	this.mins.pop();
};

/**
 *
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.s[this.s.length - 1]
}

/**
 *
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.mins[this.mins.length - 1]
}

const obj = new MinStack()
obj.push(1)
obj.pop()
obj.push(2)
obj.push(3)
console.log(obj);
console.log(obj.top());
console.log(obj.getMin());
