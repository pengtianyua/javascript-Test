class Dep {
	constructor() {
		this.subscribers = [];
	}

	depend() {
		if (Dep.target && !this.subscribers.includes(Dep.target)) {
			this.subscribers.push(Dep.target);
		}
	}

	notify() {
		this.subscribers.forEach((subscriber) => subscriber.update());
	}
}

class Watcher {
	constructor(vm, key, callback) {
		this.vm = vm;
		this.key = key;
		this.callback = callback;
		this.value = this.get();
	}

	get() {
		Dep.target = this;
		const value = this.vm[this.key];
		Dep.target = null;
		return value;
	}

	addDep(dep) {}

	update() {
		this.run();
	}

	run() {}
}

class Vue {
	constructor(options) {
		this.data = options.data;
		this.observer(this.data);
	}

	observer(target) {
		if (
			typeof target === "object" &&
			target !== null &&
			!Array.isArray(target)
		) {
			this.observer(target);
		}

		for (const targetKey in target) {
			this.defineReactive(target, targetKey, target[targetKey]);
		}
	}

	defineReactive(target, key, value) {
		Object.defineProperty(target, key, {
			configurable: true,
			enumerable: true,
			get() {
				return value;
			},
			set(v) {
				if (v !== value) {
					value = v;
				}
			}
		});
	}
}

function VNode(tag, props, children) {
	this.tag = tag;
	this.props = props;
	this.children = children;
}
const vnode = new VNode("div", { id: "app" }, [
	new VNode("h1", {}, "hello"),
	new VNode("p", {}, "Vue.js")
]);
function render(vnode) {
	const el = document.createElement(vnode.tag);

	for (const key in vnode.props) {
		el.setAttribute(key, vnode.props[key]);
	}

	for (const child of vnode.children) {
		if (typeof child === "string") {
			el.appendChild(document.createTextNode(child)); // 文本节点
		} else {
			el.appendChild(render(child)); // 递归渲染子节点
		}
	}

	return el;
}

console.log(render(vnode));
const app = document.getElementById("app");
app.appendChild(render(vnode));

// const compiler = require("vue-template-compiler");
// const template = `<div><h1>标题</h1><p>信息</p></div>`;
// const compiled = compiler.compile(template);
// console.log(compiled);

const obj = {};
const proxyObj = new Proxy(obj, {
	getPrototypeOf(target) {
		console.log(target);
	},
	setPrototypeOf(target, v) {
		console.log(target, v);
	},
	isExtensible(target) {
		console.log(target);
	},
	preventExtensions(target) {
		console.log(target);
	},
	getOwnPropertyDescriptor(target, p) {
		console.log(target, p);
	},
	defineProperty(target, property, attributes) {
		console.log(target, property, attributes);
		return Reflect.defineProperty(target, property, attributes);
	},
	has(target, p) {
		console.log(target, p);
	},
	get(target, p, receiver) {
		console.log(target, p, receiver);
	},
	set(target, p, newValue, receiver) {
		console.log(target, p, newValue, receiver);
	},
	deleteProperty(target, p) {
		console.log(target, p);
	},
	ownKeys(target) {
		console.log(target);
		return Reflect.ownKeys(target);
	},
	apply(target, thisArg, argArray) {
		console.log(target, thisArg, argArray);
	},
	construct(target, argArray, newTarget) {
		console.log(target, argArray, newTarget);
		return new target(...argArray);
	}
});

// Object.getPrototypeOf(proxyObj);
// Object.setPrototypeOf(proxyObj, null);
// Object.isExtensible(proxyObj);
// Object.preventExtensions(proxyObj);
// Object.getOwnPropertyDescriptor(proxyObj, "a");
// Object.defineProperty(proxyObj, "a", {
// 	configurable: true,
// 	enumerable: true,
// 	writable: true,
// 	value: "a"
// });
// console.log("a" in proxyObj);
// console.log(proxyObj.a);
// proxyObj.a = "a";
// delete proxyObj.a;
// for (const key of Object.keys(proxyObj)) {
// 	console.log(key);
// }
// console.log(proxyObj(1, 2));
// new proxyObj('');
