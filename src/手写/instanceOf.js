function myInstanceOf(target, origin) {
	const prototype = target.__proto__;
	if (prototype) {
		if (origin.prototype === prototype) {
			return true;
		} else {
			return myInstanceOf(prototype, origin);
		}
	} else {
		return false;
	}
}

const a = [];
console.log(myInstanceOf(a, Function));
