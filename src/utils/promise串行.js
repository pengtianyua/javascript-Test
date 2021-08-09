const createPromise = (time, id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("promise", id);
			resolve();
		}, time);
	});
};

function runPromiseByQueue(myPromises) {
	myPromises.reduce((prevPromise, nextPromise) => prevPromise.then(() => nextPromise()), Promise.resolve());
}

async function runPromiseByQueue2(myPromises) {
	for (let value of myPromises) {
		await value()
	}
}

runPromiseByQueue([
	createPromise(3000, 1),
	createPromise(2000, 2),
	createPromise(1000, 3)
]);

// eslint-disable-next-line no-unused-vars
let promise = runPromiseByQueue2([
	createPromise(3000, 1),
	createPromise(2000, 2),
	createPromise(1000, 3)
]);
