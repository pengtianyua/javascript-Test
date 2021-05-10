function objectFactory(Con, ...args) {
	let obj = {};
	obj.__proto__ = Con.prototype;
	let result = Con.apply(obj, args);
	return result instanceof Object ? result || obj : obj;
}

objectFactory();
