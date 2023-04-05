const target = {
	foo: "bar"
};

const handler = {
	get(target, property) {
		let decoration = "";
		if (property === "foo") {
			decoration = "!!!";
		}
		return Reflect.get(...arguments) + decoration;
	}
};

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log(proxy.foo);

revoke();

// console.log(proxy.foo);

const o = {};

if (Reflect.defineProperty(o, "foo", { value: "bar" })) {
	console.log("success");
} else {
	console.log("failure");
}

const target2 = {
	foo: "bar"
};
const firstProxy = new Proxy(target2, {
	get() {
		console.log("first proxy");
		return Reflect.get(...arguments);
	}
});
const secondProxy = new Proxy(firstProxy, {
	get() {
		console.log("second proxy");
		return Reflect.get(...arguments);
	},
	set(target, p, newValue, receiver) {},
	has(target, p) {},
	defineProperty(target, property, attributes) {},
	getOwnPropertyDescriptor(target, p) {},
	deleteProperty(target, p) {},
	ownKeys(target) {},
	getPrototypeOf(target) {},
	setPrototypeOf(target, v) {},
	isExtensible(target) {},
	preventExtensions(target) {},
	apply(target, thisArg, argArray) {},
	construct(target, argArray, newTarget) {}
});
console.log(secondProxy.foo);

function median(...nums) {
	return nums.sort()[Math.floor(nums.length / 2)];
}
const medianProxy = new Proxy(median, {
	apply(target, thisArg, argArray) {
		for (const arg of argArray) {
			if (typeof arg !== "number") {
				throw "Non-number argument provided";
			}
		}
		return Reflect.apply(...arguments);
	}
});
// console.log(medianProxy(1, 2, "3"));

class User {
	constructor(id) {
		this.id_ = id;
	}
}

const userProxy = new Proxy(User, {
	construct(target, argArray, newTarget) {
		if (argArray[0] === undefined) {
			throw "User cannot be instantiated without id";
		} else {
			return Reflect.construct(...arguments);
		}
	}
});
// new userProxy();

const userList = [];
class User2 {
	constructor(name) {
		this.name_ = name;
	}
}
const user2Proxy = new Proxy(User2, {
	construct(target, argArray, newTarget) {
		const newUser2 = Reflect.construct(target, argArray, newTarget);
		userList.push(newUser2);
		return newUser2;
	}
});
// new user2Proxy("swt");
// new user2Proxy("swt2");
// new user2Proxy("swt3");
// console.log(userList);
function emit(newValue) {
	console.log("emit", newValue);
}
const userListProxy = new Proxy(userList, {
	set(target, p, newValue, receiver) {
		const res = Reflect.set(target, p, newValue, receiver);
		if (res) {
			emit(Reflect.get(target, p, receiver));
		}
		return res;
	}
});
userListProxy.push("swt");
