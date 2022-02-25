/**
 * 使用两个队列实现一个后入先出的栈 并支持普通队列的全部四种操作 push top pop empty
 */

class MyStack {
	constructor() {
		this.queue1 = [];
		this.queue2 = [];
	}

	push(x) {
		this.queue1.push(x);
	}

	pop() {
		while (this.queue1.length > 1) {
			this.queue2.push(this.queue1.shift());
		}
		let a = this.queue1.shift();
		while (this.queue2.length) {
			this.queue1.push(this.queue2.shift());
		}
		return a;
	}

	top() {
		return this.queue1.slice(-1)[0];
	}

	empty() {
		return !this.queue1.length;
	}

}

const myStack = new MyStack()
myStack.push(1)
