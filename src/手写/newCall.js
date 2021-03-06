Function.prototype.newCall = function (context = window, ...args) {
	if (this === Function.prototype) return undefined;
	const fn = Symbol();
	context[fn] = this;
	const result = context[fn](...args);
	delete context[fn];
	return result;
};
