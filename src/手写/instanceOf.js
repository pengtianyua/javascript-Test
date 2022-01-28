function myInstanceOf(target, origin) {
	const proto = target.__proto__;
	if (proto) {
		if (origin.prototype === proto) {
			return true;
		} else {
			return myInstanceOf(proto, origin);
		}
	} else {
		return false;
	}
}
