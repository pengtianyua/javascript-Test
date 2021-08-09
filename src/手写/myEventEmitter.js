class MyEventEmitter {
	constructor() {
		this.event = {};
	}

	//监听事件
	on(type, listener) {
		if (this.event[type]) {
			this.event[type].push(listener);
		} else {
			this.event[type] = [listener];
		}
	}

	//触发事件
	emit(type, ...rest) {
		if (this.event[type]) {
			this.event[type].map((fn) => fn.apply(this, rest));
		}
	}

	//移除监听器
	removeListener(type) {
		if (this.event[type]) {
			delete this.event[type];
		}
	}

	//移除所有监听器
	removeAllListener() {
		this.event = {};
	}
}
