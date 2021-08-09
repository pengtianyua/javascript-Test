const regexp = /\{\{(.+)\}\}/;

class Dep {
	constructor() {
		this.subs = [];
	}

	addSub(watcher) {
		this.subs.push(watcher);
	}

	notify() {
		this.subs.forEach((item) => {
			item.update();
		});
	}
}

class Watcher {
	constructor(node, name, vm) {
		this.node = node;
		this.name = name;
		this.vm = vm;
		Dep.target = this;
		this.update();
		Dep.target = null;
	}

	update() {
		this.node.nodeValue = this.vm[this.name]; // get
	}
}

class Vue {
	constructor(options) {
		this.$options = options;
		this.$data = options.data;
		this.$el = options.el;

		new Observer(this.$data);

		Object.keys(this.$data).forEach((key) => {
			this._proxy(key);
		});

		new Compiler(this.$el, this);
	}

	_proxy(key) {
		Object.defineProperty(this, key, {
			configurable: true,
			enumerable: true,
			set(newVal) {
				this.$data[key] = newVal;
			},
			get() {
				return this.$data[key];
			}
		});
	}
}

class Observer {
	constructor(data) {
		this.data = data;
		Object.keys(data).forEach((key) => {
			this.defineReactive(this.data, key, data[key]);
		});
	}

	defineReactive(data, key, val) {
		const dep = new Dep();
		Object.defineProperty(data, key, {
			enumerable: true,
			configurable: true,
			get() {
				if (Dep.target) {
					dep.addSub(Dep.target);
				}
				return val;
			},
			set(newValue) {
				if (newValue === val) return;
				val = newValue;
				dep.notify();
			}
		});
	}
}

class Compiler {
	constructor(el, vm) {
		this.el = document.querySelector(el);
		this.vm = vm;
		this.frag = this._createFragment();
		this.el.appendChild(this.frag);
	}

	_createFragment() {
		const frag = document.createDocumentFragment();
		let child;
		while ((child = this.el.firstChild)) {
			this._compiler(child);
			frag.appendChild(child);
		}
		return frag;
	}

	_compiler(node) {
		if (node.nodeType === 1) {
			//标签节点
			const attrs = node.attributes;
			// eslint-disable-next-line no-prototype-builtins
			if (attrs.hasOwnProperty("v-model")) {
				const name = attrs["v-model"].nodeValue;
				node.addEventListener("input", (e) => {
					this.vm[name] = e.target.value;
				});
			}
		}
		if (node.nodeType === 3) {
			//文本节点
			if (regexp.test(node.nodeValue)) {
				const name = RegExp.$1.trim();
				new Watcher(node, name, this.vm);
			}
		}
	}
}
