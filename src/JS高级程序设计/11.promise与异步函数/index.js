let p = new Promise((resolve) => {
	resolve();
});
let p2 = Promise.resolve(1);

// try {
// 	Promise.reject(new Error("bar"));
// } catch (e) {
// 	console.log(e);
// }

let p3 = Promise.reject(1);
p3.then(null, (reason) => {
	console.log(reason);
});

// new Promise((resolve, reject) => {
// 	console.log("begin");
// 	reject(Error("bar"));
// })
// 	.catch((e) => {
// 		console.log(e);
// 	})
// 	.then(() => {
// 		console.log("continue");
// 	});

function delayedResolve(str) {
	return new Promise((resolve, reject) => {
		console.log(str);
		setTimeout(resolve, 1000);
	});
}

delayedResolve("p1")
	.then(() => delayedResolve("p2"))
	.then(() => delayedResolve("p3"))
	.then(() => delayedResolve("p4"));

let p4 = new Promise((resolve, reject) => {
	console.log("initial");
	reject();
});
p4.catch(() => {
	console.log("reject handler");
})
	.then(() => {
		console.log("resolve handler");
	})
	.finally(() => {
		console.log("finally");
	});

let p5 = Promise.all([Promise.resolve(1), Promise.resolve(2)]);
p5.then((res) => {
	console.log(res);
});

function addTwo(x) {
	return x + 2;
}
function addThree(x) {
	return x + 3;
}
function addFive(x) {
	return x + 5;
}

function addTen(x) {
	return [addTwo, addThree, addFive].reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
}

addTen(1).then(console.log);

class TrackablePromise extends Promise {
	constructor(executor) {
		const notifyHandlers = [];
		super((resolve, reject) => {
			return executor(resolve, reject, (status) => {
				notifyHandlers.map((handler) => handler(status));
			});
		});
		this.notifyHandlers = notifyHandlers;
	}

	notify(notifyHandler) {
		this.notifyHandlers.push(notifyHandler);
		return this;
	}
}
let tP = new TrackablePromise((resolve, reject, notify) => {
	function countDown(x) {
		if (x > 0) {
			notify(`${20 * x}% remaining`);
			setTimeout(() => countDown(x - 1), 1000);
		} else {
			resolve();
		}
	}
	countDown(5);
});

tP.notify((x) => setTimeout(console.log, 0, "progress:", x));
p.then(() => setTimeout(console.log, 0, "completed"));
