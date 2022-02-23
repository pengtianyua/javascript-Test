function Person(name) {
	this.name = name
}

const p1 = new Person('ff')

// p1原型链  p1 > Person.prototype > Object.prototype > null
console.log(p1.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

// Person原型链  Person > Function.prototype > Object.prototype > null
console.log(Person.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);


// 实例对象隐式原型指向构造函数的显示原型 p1.__proto__ === Person.prototype
