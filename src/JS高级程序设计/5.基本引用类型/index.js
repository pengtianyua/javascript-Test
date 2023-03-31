let now = new Date();

let someDate = new Date(Date.parse("May 23, 2019"));
let someDate2 = new Date("May 23, 2019");
console.log(someDate);
console.log(someDate2);

let pattern1 = /[bc]at/i;
let pattern2 = new RegExp("[bc]at", "gi");
console.log(pattern1);
console.log(pattern2.global);

let text = "mom and dad and baby";
let pattern = /mom( and dad( and baby)?)?/gi;
let matches = pattern.exec(text);
console.log(matches.index);
console.log(matches.input);
console.log(matches);

let stringValue = "hello world";
console.log(stringValue.slice(3)); // lo world
console.log(stringValue.substring(3)); // lo world
console.log(stringValue.substr(3)); // lo world
console.log(stringValue.slice(3, 7)); // lo w
console.log(stringValue.substring(3, 7)); // lo w
console.log(stringValue.substr(3, 7)); // lo worl

console.log(stringValue.slice(-3)); // rld
console.log(stringValue.substring(-3)); // hello world
console.log(stringValue.substr(-3)); // rld
console.log(stringValue.slice(3, -4)); // rld
console.log(stringValue.substring(3, -4)); // hel
console.log(stringValue.substr(3, -4)); // ''

console.log(stringValue.indexOf("o")); // 4
console.log(stringValue.lastIndexOf("o")); // 7

console.log(stringValue.indexOf("o", 6)); // 7
console.log(stringValue.lastIndexOf("o", 6)); // 4

let message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("bar")); // false

console.log(message.endsWith("baz")); // true
console.log(message.endsWith("bar")); // false
console.log(message.endsWith("bar", 6)); // true

console.log(message.includes("bar")); // true
console.log(message.includes("bar", 4)); // false

let sValue = "    hello world   ";
let trimmedStringValue = sValue.trim();
console.log(sValue); //     hello world
console.log(trimmedStringValue); // hello world

console.log(sValue.trim().repeat(16));

let msg = "abc";
let stringIterator = msg[Symbol.iterator]();

console.log(stringIterator.next()); // {value:a, done:false}
console.log(stringIterator.next()); // {value:b, done:false}
console.log(stringIterator.next()); // {value:c, done:false}
console.log(stringIterator.next()); // {value:undefined, done:true}

for (const msgElement of msg) {
	console.log(msgElement);
}

console.log([...msg]); // ['a','b','c']

console.log(stringValue.toUpperCase()); // HELLO WORLD
console.log(stringValue.toLowerCase()); // hello world

let text2 = "cat, bat, sat, fat";
console.log(text2.match(/.at/));

console.log(text2.search(/at/)); // 1

console.log(text2.replace("at", "ond"));
console.log(text2.replace(/at/g, "ond"));

let colorText = "red,blue,green,yellow";
console.log(colorText.split(",")); // ['red', 'blue', 'green', 'yellow']
console.log(colorText.split(",", 2)); // ['red', 'blue']

let string = "yellow";
console.log(string.localeCompare("brick")); // 1
console.log(string.localeCompare("yellow")); // 0
console.log(string.localeCompare("zoo")); // -1

eval("console.log(msg)");

let global = function () {
	return this;
};

console.log(global());

Math.min(...[1, 2, 3]);
Math.max(...[1, 2, 3]);

Math.ceil(4.1);
Math.floor(4.9);
Math.round(4.5);
Math.fround(0.4);

Math.floor(Math.random() * 10 + 1); // 1-10随机
// number = Math.floor(Math.random() * total_number + first_possible_value)
function selectFrom(lowerValue, upperValue) {
	let choices = upperValue - lowerValue + 1;
	return Math.floor(Math.random() * choices + lowerValue);
}

console.log(selectFrom(1, 100));

let pty = "device";
pty.substring(3);
/**
 * 原始值包装类型 new (String Number Boolean)
 * 每种包装类型都映射到同名的原始类型
 * 以读模式访问原始值时 后台会实例化一个原始值包装类型对象 借助这个对象操作相应的数据
 * 语句执行完毕后 包装对象就会被销毁
 */
