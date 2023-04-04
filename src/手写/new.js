/**
 * new操作符
 * 1 创建一个新的对象
 * 2 被执行__proto__链接
 * 3 生成的新对象会绑定到函数调用的this
 * 4 通过new创建的每个对象最终被[[Prototype]]链接到这个函数的prototype对象
 * 5 如果函数没有返回对象类型 那么new表达式中的函数调用会自动返回这个新对象
 */

function newOperator(ctor) {
	if (typeof ctor !== "function") {
		throw "newOperator function the first param must be a function";
	}
	newOperator.target = ctor;
	const newObj = Object.create(ctor.prototype);
	const args = [...arguments];
	const ctorReturnRes = ctor.apply(newObj, args);
	console.log(ctorReturnRes);
	if ((typeof ctorReturnRes === "object" && ctorReturnRes !== null) || typeof ctorReturnRes === "function") {
		return ctorReturnRes;
	}
	return newObj;
}

function Student(name) {
	this.name = name;
}
const student = newOperator(Student, "swt");
console.log(student);
