const obj = {
	valueOf() {
		console.log('先执行valueOf');
	},
	toString() {
		console.log('再执行toSting');
	},
	[Symbol.toPrimitive]() {
		console.log('优先级最高');
		return 1
	}
}

console.log(1 + obj);
