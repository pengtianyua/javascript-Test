function inheritPrototype(child, parent) {
	let prototype = Object.create(parent.prototype);
	prototype.constructor = child;
	child.prototype = prototype;
}

function Parent(name) {
	this.name = name;
}
Parent.prototype.getName = function () {
	return this.name;
};

function Child(name) {
	Parent.call(this, name);
	this.arr = [];
}
inheritPrototype(Child, Parent);
Child.prototype.getArr = function () {
	return this.arr;
};

const child = new Child("swt");
console.log(child.getName());
