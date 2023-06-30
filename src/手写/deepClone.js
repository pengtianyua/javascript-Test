/**
 * @description: 深拷贝
 * @author: 彭天宇
 * @date: 2021-09-26 09:30
 */

/* 常用数据类型 */

//  可继续遍历
const mapTag = "[object Map]";
const setTag = "[object Set]";
const arrayTag = "[object Array]";
const objectTag = "[object Object]";
const argsTag = "[object Arguments]";

//  不可继续遍历
const boolTag = "[object Boolean]";
const dateTag = "[object Date]";
const errorTag = "[object Error]";
const numberTag = "[object Number]";
const regexpTag = "[object RegExp]";
const stringTag = "[object String]";
const symbolTag = "[object Symbol]";
const funcTag = "[object Function]";

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

/**
 * 深拷贝
 *
 * 考虑数组 function null
 * 循环引用 使用 WeakMap 存储当前对象和克隆对象的关系
 * 性能优化 while
 */
function deepClone(target, map = new WeakMap()) {
	//  克隆原始类型 原始类型直接返回
	if (!isObject(target)) {
		return target;
	}

	//  根据不同类型进行操作
	const type = getType(target);
	let cloneTarget;
	if (deepTag.includes(type)) {
		cloneTarget = getInit(target, type);
	} else {
		return cloneOtherType(target, type);
	}

	//  处理	循环引用
	if (map.get(target)) {
		return map.get(target);
	}
	map.set(target, cloneTarget);

	//  克隆 Set
	if (type === setTag) {
		target.forEach((val) => {
			cloneTarget.add(deepClone(val, map));
		});
		return cloneTarget;
	}

	//  克隆 Map
	if (type === mapTag) {
		target.forEach((val) => {
			cloneTarget.set(deepClone(val, map));
		});
		return cloneTarget;
	}

	// for (const key in target) {
	// 	cloneTarget[key] = deepClone(target[key], map);
	// }

	//  克隆对象和数组
	const keys = type === arrayTag ? undefined : Object.keys(target);
	forEach(keys || target, (value, key) => {
		if (keys) {
			key = value;
		}
		cloneTarget[key] = deepClone(target[key], map);
	});

	return cloneTarget;
}

/**
 * 克隆不可遍历类型
 * */
function cloneOtherType(target, type) {
	const Ctor = target.constructor;
	switch (type) {
		case boolTag:
		case numberTag:
		case stringTag:
		case errorTag:
		case dateTag:
			return new Ctor(target);
		case regexpTag:
			return cloneReg(target);
		case symbolTag:
			return cloneSymbol(target);
		case funcTag:
			//  两个对象使用一个在内存中处于同一个地址的函数没有问题
			return target;
		default:
			return null;
	}
}

/**
 * 克隆函数
 * */
function cloneFunction(func) {
	const bodyReg = /(?<={)(.|\n)+(?=})/m;
	const paramReg = /(?<=\().+(?=\)\s+{)/;
	const funcString = func.toString();
	if (func.prototype) {
		const param = paramReg.exec(funcString);
		const body = bodyReg.exec(funcString);
		if (body) {
			if (param) {
				const paramArr = param[0].split(",");
				return new Function(...paramArr, body[0]);
			} else {
				return new Function(body[0]);
			}
		} else {
			return null;
		}
	} else {
		return eval(funcString);
	}
}

/**
 * 克隆正则
 * */
function cloneReg(target) {
	const reFlags = /\w*$/;
	const result = new target.constructor(target.source, reFlags.exec(target));
	result.lastIndex = target.lastIndex;
	return result;
}

/**
 * 克隆 Symbol
 * */
function cloneSymbol(target) {
	return Object(Symbol.prototype.valueOf.call(target));
}

/**
 * 判断是否为引用类型
 * */
function isObject(target) {
	const type = typeof target;
	return target !== null && (type === "object" || type === "function");
}

/**
 * 初始化被克隆的对象
 * */
function getInit(target) {
	const Ctor = target.constructor;
	return new Ctor();
}

/**
 * 获取实际类型
 * */
function getType(target) {
	return Object.prototype.toString.call(target);
}

/**
 * @description 通用 while 循环
 *
 * @param array
 * @param iterate
 * @returns {*}
 */
function forEach(array, iterate) {
	let index = -1;
	const length = array.length;
	while (++index < length) {
		iterate(array[index], index);
	}
	return array;
}

const target = {
	field1: 1,
	field2: undefined,
	field3: {
		child: "child"
	},
	field4: [2, 4, 8],
	empty: null,
	map: new Map(),
	set: new Set(),
	bool: new Boolean(true),
	num: new Number(2),
	str: new String(2),
	symbol: Object(Symbol(1)),
	date: new Date(),
	reg: /\d+/,
	error: new Error(),
	func1: () => {
		console.log("箭头函数");
	},
	func2: function (a, b) {
		return a + b;
	}
};
target.target = target;

let a = deepClone(target);
console.log(a);

/**
 * @description 所需拷贝对象含有内置类型并且不包含函数
 *
 * MessageChannel 消息通道 port1 port2
 * */
function structuralClone(obj) {
	return new Promise((resolve) => {
		const { port1, port2 } = new MessageChannel();
		port2.onmessage = (ev) => resolve(ev.data);
		port1.postMessage(obj);
	});
}

// window.structuredClone(obj);

// (async () => {
// 	const clone = await structuralClone(target);
// 	console.log(clone);
// })();

const obj = { a: 1, b: { c: 2 } };

function deepC(obj, weakMap = new WeakMap()) {
	if (obj === null) return obj;
	if (obj instanceof Date) return new Date(obj);
	if (obj instanceof RegExp) return new RegExp(obj);
	if (typeof obj !== "object") return obj;
	if (weakMap.has(obj)) return weakMap.get(obj);
	let result = {};
	weakMap.set(obj, result);
	for (const objKey in obj) {
		if (Object.hasOwn(obj, objKey)) {
			result[objKey] = deepC(obj[objKey], weakMap);
		}
	}
	return result;
}

const obj2 = deepC(obj);
obj2.b.c = 3;
console.log(obj2);
console.log(obj);
