/**
 * 写一个 RecentCounter 类来计算特定时间范围内最近的请求
 * 初始化计数器 请求数为0
 * 在时间 t 添加一个新请求 其中 t 表示以毫秒为单位的某个时间 并返回过去 3000 毫秒内发生的所有请求数 包括新请求
 * 保证每次对 ping 的调用都使用比之前更大的值
 */

const RecentCounter = function() {
	this.q = [];
};

RecentCounter.prototype.ping = function(t) {
	this.q.push(t);
	while (this.q[0] < t - 3000) {
		this.q.shift();
	}
	return this.q.length;
};
