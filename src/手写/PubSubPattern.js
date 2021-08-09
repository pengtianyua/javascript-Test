/**
 * @description 发布订阅模式
 * */
class PubSub {
	constructor() {
		this.topics = {};
		this.subUid = -1;
	}

	//发布事件
	publish(topic, args) {
		if (!this.topics[topic]) return false;
		let subscribers = this.topics[topic];
		let len = subscribers ? subscribers.length : 0;
		while (len--) {
			subscribers[len].func(topic, args);
		}
		return this;
	}

	//订阅事件
	subscribe(topic, func) {
		if (!this.topics[topic]) this.topics[topic] = [];
		let token = (++this.subUid).toString();
		this.topics[topic].push({
			token: token,
			func: func
		});
		return token;
	}
}
