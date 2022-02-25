/**
 * 使用两个栈实现先入先出队列 队列应当支持一般队列支持的所有操作 push pop peek empty
 */

class MyQueue {
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}

	push(x) {
		this.stack1.push(x);
	}

	pop() {
		if (!this.stack2.length) {
			while (this.stack1.length) {
				this.stack2.push(this.stack1.pop());
			}
		}
		return this.stack2.pop();
	}

	peek() {
		if (!this.stack2.length) {
			while (this.stack1.length) {
				this.stack2.push(this.stack1.pop());
			}
		}
		return this.stack2[this.stack2.length - 1];
	}

	empty() {
		return !this.stack1.length && !this.stack2.length;
	}
}

const myQueue = new MyQueue();
myQueue.push(1);
console.log(myQueue);
console.log(myQueue.pop());
console.log(myQueue.peek());
console.log(myQueue.empty());
