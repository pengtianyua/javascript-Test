function sum(a) {
	return function (b) {
		return a + b;
	};
}

const a = sum(1)(2);
console.log(a);

const b = sum(1);
const c = b(2);
console.log(c);
