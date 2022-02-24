let obj = {},
	arr = [];
/**
 * Object.prototype.toString.call()
 */
console.log(Object.prototype.toString.call(obj)); // [object Object]
console.log(Object.prototype.toString.call(arr)); // [object Array]

/**
 * Array.isArray()
 */
console.log(Array.isArray(obj)); // false
console.log(Array.isArray(arr)); // true

/**
 * instanceof
 */
console.log(obj instanceof Array); // false
console.log(arr instanceof Array); // true

// eslint-disable-next-line no-unused-vars
const type = data => {
	let toString = Object.prototype.toString;
	return toString.call(data).replace(/\[object\s(.+)]/, "$1").toLowerCase();
};

/**
 * 空对象判断
 */
console.log(Object.getOwnPropertyNames(obj).length === 0)

let a = JSON.stringify(obj)
console.log(a === '{}');
