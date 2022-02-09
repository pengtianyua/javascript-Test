class MyPromise {
	constructor() {
	}

	/**
	 *
	 * @param promiseArr
	 * @returns {Promise<unknown>}
	 */
	static all(promiseArr) {
		let result = [];
		let count = 0;
		return new Promise((resolve, reject) => {
			for (let i = 0; i < promiseArr.length; i++) {
				Promise.resolve(promiseArr[i]).then(
					res => {
						result[i] = res;
						count++;
						if (count === promiseArr.length) {
							resolve(result);
						}
					},
					err => {
						reject(err);
					}
				);
			}
		});
	}

	/**
	 *
	 * @param promiseArr
	 * @returns {Promise<unknown>}
	 */
	static race(promiseArr) {
		return new Promise((resolve, reject) => {
			for (let i = 0; i < promiseArr.length; i++) {
				Promise.resolve(promiseArr[i]).then(
					res => {
						resolve(res);
					},
					err => {
						reject(err);
					}
				);
			}
		});
	}
}
