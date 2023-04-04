let num = 1;
let obj = {};

console.log(num[Symbol.iterator]);
console.log(obj[Symbol.iterator]);

let str = "abc";
console.log(str[Symbol.iterator]());

class Counter {
	constructor(limit) {
		this.limit = limit;
	}

	[Symbol.iterator]() {
		let count = 1,
			limit = this.limit;
		return {
			next() {
				if (count <= limit) {
					return {
						done: false,
						value: count++
					};
				} else {
					return {
						done: true,
						value: undefined
					};
				}
			},
			return() {
				console.log("exit early");
				return { done: true };
			}
		};
	}
}

let counter = new Counter(3);
for (const counterElement of counter) {
	console.log(counterElement);
	break;
}
for (const counterElement of counter) {
	console.log(counterElement);
}

let foo = {
	*generatorFn() {}
};

function* generatorFnA() {}
const g = generatorFnA();
console.log(g.next);
