console.log(Array.from("device"));

const m = new Map().set(1, 2).set(3, 4);
const s = new Set().add(1).add(2).add(3).add(4);

console.log(Array.from(m)); // [[1, 2], [3, 4]]
console.log(Array.from(s)); // [1, 2, 3, 4]

const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);
console.log(a1 === a2); // false

const iter = {
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
		yield 3;
		yield 4;
	}
};

console.log(Array.from(iter));

function getArgsArray() {
	return Array.from(arguments);
}

console.log(getArgsArray(1, 2, 3, 4));

const arrayLikeObject = {
	0: 1,
	1: 2,
	2: 3,
	3: 4,
	length: 4
};

console.log(Array.from(arrayLikeObject));

console.log(Array.of(1, 2, 3, 4));
function getArgs() {
	return Array.prototype.slice.call(arguments);
}

console.log(getArgs(1, 2, 3, 4));

const a = ["foo", "bar", "baz", "qux"];
console.log(Array.from(a.keys())); // 数组索引迭代器
console.log(Array.from(a.values())); // 数组元素迭代器
console.log(Array.from(a.entries())); // 数组索引/值对的迭代器
for (const [index, value] of a.entries()) {
	console.log(index, value);
}

const zeroes = [0, 0, 0, 0, 0];
console.log(zeroes.fill(5)); // [5,5,5,5,5]
console.log(zeroes.fill(6, 3)); // [5,5,5,6,6]
console.log(zeroes.fill(7, 1, 3)); // [5,7,7,6,6]
console.log(zeroes.fill(8, -4, -1)); // [5,8,8,8,6]
/**
 * 静默忽略超出数组边界 零长度 方向相反的索引范围
 * 负值 + length
 */

let ints,
	reset = () => (ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
reset();

ints.copyWithin(5);
console.log(ints); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
reset();

ints.copyWithin(0, 5);
console.log(ints); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]
reset();

ints.copyWithin(4, 0, 3);
console.log(ints); // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
reset();

ints.copyWithin(2, 0, 6);
console.log(ints); // [0, 1, 0, 1, 2, 3, 4, 5, 8, 9]
reset();
// 不改变数组长度

let colors = ["red", "blue", "green", undefined];
console.log(colors.join("||"));

ints.sort((a, b) => {
	return b - a;
});
console.log(ints);

// 严格相等 indexOf lastIndexOf includes
// 断言函数 find findIndex 找到匹配项都不再继续搜索

/**
 * 迭代方法 都不改变调用的原数组
 * every 每一项都返回true 则这个方法返回true
 * some 有一项返回true 则这个方法返回true
 * filter 函数返回true的项会组成数组后返回
 * forEach 对每一项运行传入的函数 没有返回值
 * map 返回每次函数调用的结果构成的数组
 */

/**
 * 归并方法 迭代数组所有项 在此基础上构建一个最终返回值
 * reduce
 * reduceRight
 */

let float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32);

const buf = new ArrayBuffer(16); // 在内存中分配16字节
console.log(buf);

const buf2 = buf.slice(4, 12);
console.log(buf2);

/**
 * 允许读写ArrayBuffer的视图DataView
 * 专为文件I/O 网络I/O设计
 * byteOffset=0 表示视图从缓冲起点开始
 * byteLength=8 限制视图为前8个字节
 */
const fullDataView = new DataView(buf, 0, 8);
console.log(fullDataView.byteOffset);
console.log(fullDataView.byteLength);

const buf3 = new ArrayBuffer(2);
const view = new DataView(buf3);

console.log(view.getInt8(0)); // 0
console.log(view.getInt8(1)); // 0
console.log(view.getInt16(0)); // 0

view.setUint8(0, 256);
