const targetMap = new WeakMap();
let activeEffect = null;

function track(target, key) {
	if (!activeEffect) return;
	let depsMap = targetMap.get(target);
	if (!depsMap) {
		targetMap.set(target, (depsMap = new Map()));
	}

	let dep = depsMap.get(key);
	if (!dep) {
		depsMap.set(key, (dep = new Set()));
	}
	dep.add(activeEffect);
}

function trigger(target, key) {
	let depsMap = targetMap.get(target);
	if (depsMap) {
		const dep = depsMap.get(key);
		if (dep) {
			dep.forEach((effect) => effect());
		}
	}
}

function reactive(target) {
	return new Proxy(target, {
		get(target, key, receiver) {
			track(receiver, key);
			return Reflect.get(target, key, receiver);
		},
		set(target, key, value, receiver) {
			console.log(key);
			Reflect.set(target, key, value, receiver);
			trigger(target, key);
		}
	});
}

function effect(fn) {
	activeEffect = fn;
	activeEffect();
	activeEffect = null;
}

const state = reactive({
	count: 0
});

effect(() => {
	console.log(state.count);
});

function ref(initValue) {
	return reactive({
		value: initValue
	});
}

function computed(fn) {
	const result = ref();
	effect(() => (result.value = fn()));
	return result;
}
