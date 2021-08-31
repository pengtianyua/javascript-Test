const targetMap = new WeakMap();
let activeEffect = null;

function track(target, key) {
	if (!activeEffect) return;
	let depsMap = targetMap.get(target);
	if (!depsMap) {
		targetMap.set(target, depsMap = new Map());
	}

	let dep = depsMap.get(key);
	if (!dep) {
		depsMap.set(key, dep = new Set());
	}
	dep.add(activeEffect);
}

function trigger(target, key) {
	let depsMap = targetMap.get(target);
	if (depsMap) {
		const dep = depsMap.get(key);
		if (dep) {
			dep.forEach(effect => effect());
		}
	}
}

export function reactive(target) {
	const handler = {
		get(target, key, receiver) {
			track(receiver, key);
			return Reflect.get(target, key, receiver);
		},
		set(target, key, value, receiver) {
			Reflect.set(target, key, value, receiver);
			trigger(target, key);
		}
	};

	return new Proxy(target, handler);
}

export function effect(fn) {
	activeEffect = fn;
	activeEffect();
	activeEffect = null;
}

function ref(initValue) {
	return reactive({
		value: initValue
	});
}

export function computed(fn) {
	const result = ref();
	effect(() => result.value = fn());
	return result;
}
