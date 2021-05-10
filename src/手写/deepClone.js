function deepClone(obj) {
	if (obj === null) return null;
	if (typeof obj !== "object") return obj;
	if (obj instanceof RegExp) return new RegExp(obj);
	if (obj instanceof Date) return new Date(obj);
	let newObj = new obj.constructor;
	for (let key in obj) {
		// eslint-disable-next-line no-prototype-builtins
		if (obj.hasOwnProperty(key)) {
			newObj[key] = deepClone(obj[key]);
		}
	}
	return newObj;
}

let obj = {
	name: "swt",
	a: {
		b: 100
	},
	c: undefined,
	d: null,
	e: Symbol(),
	f: /^\d+$/,
	g: function () {}
};
let newObj = deepClone(obj);
console.log(newObj);
console.log(newObj === obj);
console.log(newObj.g === obj.g);
