function pAll(_promises) {
	return new Promise((resolve, reject) => {
		const promises = Array.from(_promises);
		const r = [];
		const len = promises.length;
		let count = 0;
		for (let i = 0; i < len; i++) {
			Promise.resolve(promises[i])
				.then((o) => {
					r[i] = o;

					if (++count === len) {
						resolve(r);
					}
				})
				.catch((e) => reject(e));
		}
	});
}
