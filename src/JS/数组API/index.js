/*********************************** ES6新增的构造函数方法 ***********************************/

/**
 * Array.of
 */
Array.of(8.0); // [8]
Array(8.0); // [<8 empty items>]

Array.of(8.0, 5); // [8, 5]
Array(8.0, 5); // [8, 5]

Array.of("8"); // ["8"]
Array("8"); // ["8"]

// Array.of 的 polyfill
if (!Array.of) {
	Array.of = function() {
		return Array.prototype.slice.call(arguments);
	};
}

/**
 * Array.from
 */

// Object
Array.from({ 0: "a", 1: "b", 2: "c", length: 3 }); // ['a', 'b', 'c']
// String
Array.from("abc"); // ['a', 'b', 'c']
// Set
Array.from(new Set(["abc", "def"])); // ['abc', 'def']
// Map
Array.from(new Map([[1, "abc"], [2, "def"]])); // [[1, 'abc'], [2, 'def']]
// arguments
function fn() {
	return Array.from(arguments);
}

fn(1, 2, 3); // [1, 2, 3]

Array.from({ length: 10 }, (v, i) => i); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/*********************************** Array.isArray ***********************************/

Array.isArray([]); // true
Array.isArray({ length: 1 }); // false

// Array.isArray 的 polyfill
if (!Array.isArray) {
	Array.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === "[object Array]";
	};
}

/*********************************** 方法 ***********************************/

Object.getOwnPropertyNames(Array.prototype); // ["length", "constructor", "toString", "toLocaleString", "join", "pop", "push", "reverse", "shift", "unshift", "slice", "splice", "sort", "filter", "forEach", "some", "every", "map", "indexOf", "lastIndexOf", "reduce", "reduceRight", "copyWithin", "find", "findIndex", "fill", "includes", "entries", "keys", "concat"]

/**
 * 改变自身值的方法（9个）
 */

// pop() 方法删除一个数组中的最后一个元素 并返回这个元素
const array = ["cat", "dog", "cow", "chicken", "mouse"];
let item = array.pop();
console.log(array); // ["cat", "dog", "cow", "chicken"]
console.log(item); // mouse

// push() 方法添加一个或多个元素到数组末尾 并且返回数组新的长度
const array2 = ["football", "basketball", "volleyball", "Table tennis", "badminton"];
let i = array2.push("golfball");
console.log(array2); // ["football", "basketball", "volleyball", "Table tennis", "badminton", "golfball"]
console.log(i); // 6

// reverse() 方法颠倒数组中元素的位置 返回对数组的引用
const array3 = [1, 2, 3, 4, 5];
const array4 = array3.reverse();
console.log(array3); // [5,4,3,2,1]
console.log(array4 === array3); // true

// shift() 方法删除数组的第一个元素 并返回这个元素
const array5 = [1, 2, 3, 4, 5];
let item2 = array5.shift();
console.log(array5); // [2,3,4,5]
console.log(item2); // 1

// sort() 方法对数组元素进行排序 并返回这个数组

// splice() 方法用新元素替换旧元素的方式修改数组 返回值由原数组中被删除元素组成的数组 如果没有删除 则返回一个空数组

// unshift() 方法用于在数组开始处插入一些元素 并返回数组新的长度
const array6 = ["red", "green", "blue"];
let length = array6.unshift("yellow");
console.log(array6); // ["yellow", "red", "green", "blue"]
console.log(length); // 4

// copyWithin() 方法用于数组内元素之间的替换 即替换元素和被替换元素均是数组内的元素

// fill() 方法用于将数组指定区间内的元素替换为某个值
const array7 = [1, 2, 3, 4, 5];
const array8 = array7.fill(10, 0, 3);
console.log(array8 === array7, array7); // true [10, 10, 10, 4, 5]


/**
 * 不会改变自身值的方法（9个）
 */

// concat() 方法将传入的数组或者元素与原数组合并 组成一个新的数组并返回
const array9 = [1, 2, 3];
const array10 = array9.concat(4, [5, 6], [7, 8, 9]);
console.log(array10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array9); // [1, 2, 3]
// 若concat方法中不传入参数，那么将基于原数组浅复制生成一个一模一样的新数组（指向新的地址空间）
const array11 = [{ a: 1 }];
const array12 = array11.concat();
console.log(array12); // [{a: 1}]
console.log(array12 === array11); // false
console.log(array11[0] === array12[0]); // true，新旧数组第一个元素依旧共用一个同一个对象的引用

// join() 方法将数组中的所有元素连接成一个字符串
const array13 = ["We", "are", "Chinese"];
console.log(array13.join()); // "We,are,Chinese"
console.log(array13.join("+")); // "We+are+Chinese"
console.log(array13.join("")); // "WeareChinese"

// slice() 方法将数组中一部分元素浅复制存入新的数组对象 并返回这个数组对象
const array14 = [{ color: "yellow" }, 2, 3];
const array15 = array14.slice(0, 1);
console.log(array15); // [{color:"yellow"}]
array14[0]["color"] = "blue";
console.log(array15); // [{color:"blue"}]

// toString() 方法返回数组的字符串形式，该字符串由数组中的每个元素的 toString() 返回值经调用 join() 方法连接（由逗号隔开）组成
const array16 = ["Jan", "Feb", "Mar", "Apr"];
const str = array16.toString();
console.log(str); // Jan,Feb,Mar,Apr

// toLocalString() 类似toString()的变型，该字符串由数组中的每个元素的 toLocaleString() 返回值经调用 join() 方法连接（由逗号隔开）组成
// 数组中的元素将调用各自的 toLocalString 方法
// Object：Object.prototype.toLocaleString()
// Number：Number.prototype.toLocaleString()
// Date：Date.prototype.toLocaleString()
const array17 = [{ name: "zz" }, 123, "abc", new Date()];
const str2 = array17.toLocaleString();
console.log(str2); // [object Object], 123, abc, 2022/2/15 下午5:40:23

// indexOf() 方法用于查找元素在数组中第一次出现时的索引 如果没有返回-1
const array18 = ["abc", "def", "ghi", "123"];
console.log(array18.indexOf("def")); // 1
console.log(array18.indexOf("def", -1)); // -1 此时表示从最后一个元素往后查找,因此查找失败返回-1
console.log(array18.indexOf("def", -4)); // 1 由于4大于数组长度,此时将查找整个数组,因此返回1
console.log(array18.indexOf(123)); // -1, 由于是严格匹配,因此并不会匹配到字符串'123'

// lastIndexOf() 方法用于查找元素在数组中最后一次出现时的索引，如果没有，则返回-1。并且它是indexOf的逆向查找，即从数组最后一个往前查找

// includes() 方法基于ECMAScript 2016（ES7）规范，它用来判断当前数组是否包含某个指定的值，如果是，则返回 true，否则返回 false
const array19 = [-0, 1, 2];
console.log(array19.includes(+0)); // true
console.log(array19.includes(1)); // true
console.log(array19.includes(2, -4)); // true
const array20 = [NaN];
console.log(array20.includes(NaN)); // true
console.log(array20.indexOf(NaN) > -1); // false

// toSource() 方法是非标准的，该方法返回数组的源代码
// const array21 = ["a", "b", "c"];
// console.log(array21.toSource()); // ["a", "b", "c"]

/**
 * 遍历方法(12个)
 */

// forEach() 方法指定数组的每项元素都执行一次传入的函数，返回值为undefined
// forEach 将为数组中每一项执行一次 fn 函数，那些已删除，新增或者从未赋值的项将被跳过（但不包括值为 undefined 的项）
const array22 = [1, 3, 5];
const obj = { name: "cc" };
array22.forEach(function(value, index, array) {
	array22[index] = value * value;
	console.log(this.name); // cc被打印了三次
}, obj);
console.log(array22); // [1, 9, 25], 可见原数组改变了
// forEach无法直接退出循环，只能使用return 来达到for循环中continue的效果

// every() 方法使用传入的函数测试所有元素，只要其中有一个函数返回值为 false，那么该方法的结果为 false；如果全部返回 true，那么该方法的结果才为 true

// some() 方法刚好同 every() 方法相反，some 测试数组元素时，只要有一个函数返回值为 true，则该方法返回 true，若全部返回 false，则该方法返回 false

// filter() 方法使用传入的函数测试所有元素，并返回所有通过测试的元素组成的新数组。它就好比一个过滤器，筛掉不符合条件的元素
const array23 = [18, 9, 10, 35, 80];
const array24 = array23.filter(function(value, index, array) {
	return value > 20;
});
console.log(array24); // [35, 80]

// map() 方法遍历数组，使用传入函数处理每个元素，并返回函数的返回值组成的新数组。
const array25 = [1, 2, 3];
const array26 = array25.map((value, index, array) => {
	return value * index;
});
console.log(array26); // [0, 2, 6]

// reduce() 方法接收一个方法作为累加器 数组中的每个值（从左至右）开始合并 最终为一个值
const array27 = [1, 2, 3, 4];
const s = array27.reduce(function(previousValue, value, index, array) {
	return previousValue * value;
});
console.log(s); // 24
// ES6写法
array27.reduce((p, v) => p * v);

// reduceRight() 方法接收一个方法作为累加器 数组中的每个值（从右至左开始合并） 最终为一个值

// entries() 方法基于ECMAScript 2015（ES6）规范，返回一个数组迭代器对象，该对象包含数组中每个索引的键值对
const array28 = ["a", "b", "c"];
const iterator = array28.entries();
console.log(iterator.next()); // { value: [ 0, 'a' ], done: false }
console.log(iterator.next()); // { value: [ 1, 'b' ], done: false }
console.log(iterator.next()); // { value: [ 2, 'c' ], done: false }
console.log(iterator.next()); // { value: undefined, done: true } 迭代器处于数组末尾时, 再迭代就会返回undefined

// find() 方法基于ECMAScript 2015（ES6）规范，返回数组中第一个满足条件的元素（如果有的话）， 如果没有，则返回undefined
// findIndex() 方法也基于ECMAScript 2015（ES6）规范，它返回数组中第一个满足条件的元素的索引（如果有的话）否则返回-1
const array29 = [1, 3, 5, 7, 8, 9, 10];

function f(value, index, array) {
	return value % 2 === 0; // 返回偶数
}

function f2(value, index, array) {
	return value > 20;
}

console.log(array29.find(f)); // 8
console.log(array29.find(f2)); // undefined
console.log(array29.findIndex(f)); // 4
console.log(array29.findIndex(f2)); // -1

// keys() 方法基于ECMAScript 2015（ES6）规范，返回一个数组索引的迭代器
const array30 = ["abc", "xyz"];
const iterator2 = array30.keys();
console.log(iterator2.next()); // { value: 0, done: false }
console.log(iterator2.next()); // { value: 1, done: false }
console.log(iterator2.next()); // { value: undefined, done: true }

// values() 方法基于ECMAScript 2015（ES6）规范，返回一个数组迭代器对象，该对象包含数组中每个索引的值
const array31 = ["abc", "xyz"];
const iterator3 = array31.values();
console.log(iterator3.next()); // { value: 'abc', done: false }
console.log(iterator3.next()); // { value: 'xyz', done: false }
console.log(iterator3.next()); // { value: undefined, done: true }

// Symbol.iterator 该方法基于ECMAScript 2015（ES6）规范，同 values 方法功能相同
const array32 = ["abc", "xyz"];
const iterator4 = array32[Symbol.iterator]()
console.log(iterator4.next()); // { value: 'abc', done: false }
console.log(iterator4.next()); // { value: 'xyz', done: false }
console.log(iterator4.next()); // { value: undefined, done: true }
