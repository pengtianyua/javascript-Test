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

/**
 * @description 所需拷贝对象含有内置类型并且不包含函数
 * */
function structuralClone(obj) {
	return new Promise(resolve => {
		const {port1, port2} = new MessageChannel()
		port2.onmessage = ev => resolve(ev.data)
		port1.postMessage(obj)
	})
}

let obj = {
	name: "swt",
	a: {
		b: 100
	},
	c: undefined,
	d: null,
	f: /^\d+$/
};
let newObj = deepClone(obj);


(async () => {
	const clone = await structuralClone(obj)
	console.log(clone);
})()
