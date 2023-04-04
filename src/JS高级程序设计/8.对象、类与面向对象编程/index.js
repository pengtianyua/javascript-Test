let person = {};

Object.defineProperty(person, "name", {
	configurable: false,
	writable: false
});
// 被定义为不可配置后 就不能再变回可配置了

let book = {};

// Object.defineProperty(book, "year", {
// 	get() {
// 		return this.year_;
// 	},
// 	set(v) {
// 		if (v > 2017) {
// 			this.year_ = v;
// 			this.edition += v - 2017;
// 		}
// 	}
// });
Object.defineProperties(book, {
	year_: {
		value: 2017
	},
	edition: {
		value: 1
	},
	year: {
		get() {
			return this.year_;
		},
		set(v) {
			if (v > 2017) {
				this.year_ = v;
				this.edition += v - 2017;
			}
		}
	}
});

console.log(Object.getOwnPropertyDescriptors(book));

let target = Object.assign({}, { a: 1 });
console.log(target);

// eslint-disable-next-line use-isnan
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

function recursivelyCheckEqual(x, ...rest) {
	return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest));
}

console.log(recursivelyCheckEqual(1, 1, 1, 1, 1, 1));

let me = {
	name_: "swt",
	get name() {
		return this.name_;
	},
	set name(val) {
		this.name_ = val;
	}
};

console.log(me.name);

/**
 * 工厂模式
 * 解决创建多个类似对象问题 没有解决对象标识问题 即新创建的对象是什么类型
 * @param name
 * @param age
 * @param job
 * @returns {Object}
 */
function createPerson(name, age, job) {
	let o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function () {
		console.log(this.name);
	};
	return o;
}

let p1 = createPerson("set", 22, "FE");
let p2 = createPerson("map", 23, "RD");

/**
 * 使用 new 操作符
 * 在内存中创建一个新对象
 * 这个新对象内部的 [[Prototype]]特性被赋值为构造函数的prototype属性
 * 构造函数内部的this被赋值为这个新对象 即this指向新对象
 * 如果构造函数返回非空对象 则返回该对象 否则返回刚创建的新对象
 * @param name
 * @param age
 * @param job
 * @constructor
 */
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
}
Person.prototype.sayName = function () {
	console.log(this.name);
};
Person.prototype.swt = "111";

let p3 = new Person("set", 22, "FE");
let p4 = new Person("map", 23, "RD");

console.log(Person.prototype);

let biped = { numLegs: 2 };
let j = Object.create(biped);
j.numLegs = null;
delete j.numLegs;
console.log(j.numLegs);
// eslint-disable-next-line no-prototype-builtins
console.log(p3.hasOwnProperty("numLegs"));

console.log("name" in p3);

function hasPrototypeProperty(obj, key) {
	// eslint-disable-next-line no-prototype-builtins
	return !obj.hasOwnProperty(key) && key in obj;
}

console.log(hasPrototypeProperty(p3, "swt"));

class myArr extends Array {}

function SuperType() {
	this.property = true;
}
SuperType.prototype.getSuperValue = function () {
	return this.property;
};
function SubType() {
	this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
	return this.subproperty;
};
let instance = new SubType();
console.log(instance.getSuperValue());
console.log(instance.toString());

function Super(name) {
	this.name = name;
	this.colors = ["red"];
}

function Sub(age) {
	// 继承属性
	Super.call(this);
	this.age = age;
}
// 继承方法
// Sub.prototype = new Super();
inheritPrototype(Sub, Super);
Sub.prototype.sayAge = function () {
	console.log(this.age);
};

function inheritPrototype(sub, superType) {
	const prototype = Object.create(superType.prototype);
	prototype.constructor = sub;
	sub.prototype = prototype;
}

function object(origin) {
	function F() {}
	F.prototype = origin;
	return new F();
}

class SuperArray extends Array {
	shuffle() {
		for (let i = this.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this[i], this[j]] = [this[j], this[i]];
		}
	}
}
let a = new SuperArray(1, 2, 3, 4, 5);
a.shuffle();
console.log(a);
