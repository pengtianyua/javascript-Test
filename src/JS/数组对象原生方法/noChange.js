/**
 * @method Array.prototype.concat()
 * @description 合并两个或多个数组，不改变现有数组，返回一个新数组
 */
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = arr.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8]

/**
 * @method Array.prototype.copyWithin()
 * @description 浅复制数组的一部分到同一数组中的另一位置，并返回，不改变原数组长度
 */
let arr4 = arr.copyWithin(0, 1, 3);
console.log(arr4); // [2, 3, 3, 4]

/**
 * @method Array.prototype.fill()
 * @description 用一个固定值填充数组中从起始索引到终止索引内的全部元素，不包括终止索引
 */
let arr5 = arr.fill(0, 1);
console.log(arr5); // [2, 0, 0, 0]

/**
 * @method Array.prototype.find()
 * @description 返回数组中满足提供的测试函数的第一个元素的值，否则返回undefined
 */
let find = [5, 12, 8, 130, 44];
let found = find.find((element) => element > 10);
console.log(found); // 12

/**
 * @method Array.prototype.findIndex()
 * @description 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1
 */
let findIndex = [5, 12, 8, 130, 44];
let foundIndex = findIndex.findIndex((element) => element > 13);
console.log(foundIndex); // 3

/**
 * @method Array.prototype.lastIndexOf()
 * @description 返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始
 * */
let lastIndexOf = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(lastIndexOf.lastIndexOf("Tiger")); // 1

/**
 * @method Array.prototype.slice()
 * @description 返回一个新的数组对象，这一对象是一个由 begin和end决定的原数组的浅拷贝（包括begin，不包括end），原始数组不会被改变
 * */
let slice = ["ant", "bison", "camel", "duck", "elephant"];
console.log(slice.slice(0, 4)); // ["ant", "bison", "camel", "duck"]

/**
 * @method Array.prototype.includes()
 * @description 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false
 * */
let includes = [1, 2, 3];
console.log(includes.includes(1)); // true

/**
 * @method Array.prototype.indexOf()
 * @description 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
 * */
let indexOf = ["ant", "bison", "camel", "duck", "bison"];
console.log(indexOf.indexOf("ant")); // 0

/**
 * @method Array.prototype.join()
 * @description 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符
 * */
let join = ["a", "b"];
console.log(join.join("-")); // a-b

/**
 * @method Array.prototype.keys()
 * @description 返回一个包含数组中每个索引键的Array Iterator对象
 * */
let keys = ["a", "b", "c"];
for (const key of keys.keys()) {
	console.log(key);
}
// 0
// 1
// 2

/**
 * @method Array.prototype.entries()
 * @description 返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
 * */
let entries = ["a", "b", "c"];
let iterator = entries.entries();
console.log(iterator.next().value); // [0, "a"]
console.log(iterator.next().value); // [1, "b"]
console.log(iterator.next().value); // [2, "c"]

/**
 * @method Array.prototype.values()
 * @description 返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
 * */
let values = ["a", "b", "c"];
for (const value of values.values()) {
	console.log(value);
}
// a
// b
// c

/**
 * @method Array.prototype.forEach()
 * @description 对数组的每个元素执行一次给定的函数
 * */
let forEach = [1, 2, 3];
forEach.forEach((element) => {
	console.log(element + 1);
});
// 2
// 3
// 4

/**
 * @method Array.prototype.filter()
 * @description 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
 * */
let filter = [1, 2, 3];
console.log(filter.filter((element) => element > 1)); // [2, 3]

/**
 * @method Array.prototype.flat()
 * @description 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
 * */
let flat = [1, [2, [3, [4, [5]]]]];
console.log(flat.flat(4)); // [1, 2, 3, 4, 5]

/**
 * @method Array.prototype.flatMap()
 * @description 使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些
 * */
let flatMap = ["it's Sunny in", "", "Canada"];
console.log(flatMap.map((element) => element.split(" "))); // [ [ "it's", 'Sunny', 'in' ], [ '' ], [ 'Canada' ]]
console.log(flatMap.flatMap((element) => element.split(" "))); //[ "it's", 'Sunny', 'in', '', 'Canada']

/**
 * @method Array.prototype.map()
 * @description 创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值
 * */
let map = [1, 2, 3, 4];
console.log(map.map((element) => element + 1)); // [2, 3, 4, 5]

/**
 * @method Array.prototype.every()
 * @description 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值,用一个空数组进行测试，在任何情况下它返回的都是true
 * */
let every = [1, 2, 4, 3];
console.log(every.every((element) => element > 0));

/**
 * @method Array.prototype.some()
 * @description 测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值,用一个空数组进行测试，在任何情况下它返回的都是false
 * */
let some = [1, 2, 3, 0];
console.log(some.some((element) => element > 0));

/**
 * @method Array.prototype.reduce()
 * @description 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值
 * */
let reduce = [1, 2, 3, 4, 5];
console.log(
	reduce.reduce((accumulator, currentValue, index) => {
		console.log("累计器:", accumulator);
		console.log("当前值:", currentValue);
		console.log("当前索引:", index);
		return accumulator + currentValue + index;
	}, 100)
);

/**
 * @method Array.prototype.reduceRight()
 * @description 接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值
 * */
let reduceRight = [
	[0, 1],
	[2, 3],
	[4, 5]
];
console.log(
	reduceRight.reduceRight(
		(acc, cur, index) => {
			console.log("累计器:", acc);
			console.log("当前值:", cur);
			console.log("当前索引:", index);
			return acc.concat(cur);
		},
		[6, 7]
	)
);
