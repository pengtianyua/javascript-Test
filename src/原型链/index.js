function Person() {}

const person = new Person();

//构造函数的prototype属性指向原型对象
console.dir(Person);
//实例对象通过__proto__指针指向原型对象
console.log("获取原型对象", Object.getPrototypeOf(person));
console.log("实例对象通过__proto__指针指向原型对象	", person.__proto__ === Person.prototype);
//构造函数通过__proto__指针指向构造函数的原型对象
console.log("构造函数通过__proto__指针指向构造函数的原型对象", Person.__proto__ === Person.constructor.prototype);
//原型对象的constructor属性指向构造函数
console.log("原型对象的constructor属性指向构造函数", Person.prototype.constructor === Person);
//原型对象通过__proto__指向对象的原型对象
console.log("原型对象通过__proto__指向对象的原型对象", Person.prototype.__proto__ === Object.prototype);
//对象的原型对象的constructor属性指向对象的构造函数
console.log("对象的原型对象的constructor属性指向对象的构造函数", Object.prototype.constructor === Object);
//对象的原型对象的原型对象为null
console.log("对象的原型对象的原型对象为null", Object.prototype.__proto__ === null);
