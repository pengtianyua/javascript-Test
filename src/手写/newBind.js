Function.prototype.newBind = function (context = window, ...args1) {
	if (this === Function.prototype) {
		throw new TypeError("Error");
	}
	const _this = this;
	return function F(...args2) {
		if (this instanceof F) {
			return new _this(...args1, ...args2);
		} else {
			return _this.apply(context, args1.concat(args2));
		}
	};
};
