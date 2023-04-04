const parent = {
	name: "swt",
	arr: [],
	getName() {
		return this.name;
	}
};

const child = Object.create(parent, {
	age: {
		value: 20
	}
});
child.name = "swt-child";
child.arr.push(1);
const child2 = Object.create(parent, {
	age: {
		value: 21
	}
});
child2.name = "swt-child2";
child2.arr.push(2);

console.log(child.arr);
console.log(child2.arr);

console.log(child.age);
console.log(child2.age);
