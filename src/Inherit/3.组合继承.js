function Parent(name) {
	this.name = name;
}
Parent.prototype.getName = function () {
	console.log(this.name);
};

function Child(name) {
	Parent.call(this, name); // 借用构造函数继承原型属性
}
Child.prototype = new Parent(); // 借用原型链继承原型方法
Child.prototype.constructor = Child;

const child = new Child("swt");
console.log(child.name);
console.log(child.getName);

// 调用两次父类构造函数 生成两份实例 子类实例shadow子类原型上的属性
