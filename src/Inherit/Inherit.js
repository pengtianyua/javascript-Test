/**
 * 原型链继承
 * @description 使用父类的实例重写子类的原型
 */
function SuperType() {
	this.property = true;
}

SuperType.prototype.getSuperValue = function () {
	return this.property;
};

function SubType() {
	this.subproperty = false;
}

//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
	return this.subproperty;
};
let instance = new SubType();
console.log(instance.getSuperValue());