/**
 * 定义一个队列并实现一个函数 max_value 得到队列里的最大值 要求函数max_value push_back pop_front 的均摊时间复杂度都是O(1)
 */

/**
 * 利用一个辅助队列按单调顺序存储当前队列的最大值
 */

const MaxQueue = function() {
	this.queue = [];
	this.maxValue = -Infinity;
	this.maxIdx = -1;
};

/**
 *
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
	if (!this.queue.length) return -1;
	return this.maxValue;
};

/**
 *
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
	this.queue.push(value);
	if (value >= this.maxValue) {
		this.maxIdx = this.queue.length - 1;
		this.maxValue = value;
	}
};

/**
 *
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
	if (!this.queue.length) return -1;
	let a = this.queue.shift();
	this.maxIdx--;
	if (this.maxIdx < 0) {
		let tmp = -Infinity;
		let id = -1;
		for (let i = 0; i < this.queue.length; i++) {
			if (this.queue[i] > tmp) {
				tmp = this.queue[i];
				id = i;
			}
		}
		this.maxIdx = id;
		this.maxValue = tmp;
	}
	return a;
};
