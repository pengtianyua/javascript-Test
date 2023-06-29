function once(f) {
	let result;
	let revoked = false;
	return function (...args) {
		if (revoked) return result;
		const r = f(...args);
		revoked = true;
		result = r;
		return r;
	};
}

const f = () => {
	console.log("call");
	return 1;
};
const once_f = once(f);

once_f();
once_f();
