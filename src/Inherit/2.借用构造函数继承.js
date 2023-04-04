function Parent(name) {
	this.name = name;
}
Parent.prototype.getName = function () {
	console.log(this.name);
};

function Child(name) {
	Parent.call(this, name); // 核心 调用父类构造函数
}

const child = new Child("swt");
console.log(child);
console.log(child.getName); // undefined
