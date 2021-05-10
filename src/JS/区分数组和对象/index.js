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
