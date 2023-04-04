class Parent {
	constructor(name) {
		this.name = name;
	}
}

class Child extends Parent {
	constructor(props) {
		super(props);
	}
}

const child = new Child("swt");
console.log(child);
