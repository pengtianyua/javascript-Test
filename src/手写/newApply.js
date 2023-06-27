Function.prototype.newApply = function (context = window, ...args) {
	if (this === Function.prototype) return undefined;
	const fn = Symbol();
	context[fn] = this;
	let result;
	if (Array.isArray(args)) {
		result = context[fn](args);
	} else {
		result = context[fn]();
	}
	delete context[fn];
	return result;
};

const obj = {
	a: 1,
	getA() {
		return this.a;
	}
};

const retrieveA = obj.getA;

console.log(retrieveA());
console.log(retrieveA.newApply(obj));
