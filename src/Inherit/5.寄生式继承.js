let parent = {
	name: "swt",
	arr: [],
	getName() {
		return this.name;
	}
};

function clone(origin) {
	let clone = Object.create(origin);
	clone.getArr = function () {
		return this.arr;
	};
	return clone;
}

const child = clone(parent);
child.name = "swt-child";

console.log(child.getName());
console.log(child.getArr());
