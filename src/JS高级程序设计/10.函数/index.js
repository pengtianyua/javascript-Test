const setName = (x) => (x.name = "swt");

// console.log(setName({}));

// console.log(new Function().name);

function howManyArgs() {
	console.log(arguments.length);
}

// howManyArgs(1, 2);
// howManyArgs();
// howManyArgs(1);

function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}
let trueFactorial = factorial;
factorial = function () {
	return 0;
};
// console.log(trueFactorial(5));
// console.log(factorial(5));

// function fib(n) {
// 	if (n < 2) {
// 		return n;
// 	}
// 	return fib(n - 1) + fib(n - 2);
// }

// 尾调用优化
function fib(n) {
	return fibImpl(0, 1, n);
}
function fibImpl(a, b, n) {
	if (n === 0) {
		return a;
	}
	return fibImpl(b, a + b, n - 1);
}
fib(1000);

console.log(1);
(function () {
	// 块级作用域
	console.log(2);
})();
