const pipe =
	(...functions) =>
	(input) =>
		functions.reduce((acc, func) => func(acc), input);

const add = (x) => x + 2;
const multiply = (x) => x * 3;
const subtract = (x) => x - 4;

const myPipe = pipe(add, multiply, subtract);
console.log(myPipe(5));

const compose =
	(...functions) =>
	(input) =>
		functions.reduceRight((acc, func) => func(acc), input);

const myCompose = compose(add, multiply, subtract);
console.log(myCompose(5));
