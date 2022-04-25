class MyURLSearchParams {
	/**
	 *
	 * @param {string} init
	 */
	constructor(init) {
		let source = init.replace(/^\?/, '');
		const list = source.split('&').map(item => item.split('='));
		this.paramMap = new Map()
		for (const [key, value] of list) {
			this.append(key, value)
		}
	}

	/**
	 *
	 * @param {string} key
	 * @param {any} value
	 */
	append(key, value) {
		if(this.paramMap.has(key)) {
			const current = this.paramMap.get(key);
			current.push(String(value))
		} else {
			this.set(key, value)
		}
	}

	/**
	 *
	 * @param {string} key
	 */
	delete(key) {
		this.paramMap.delete(key)
	}

	/**
	 *
	 * @return {Generator<(*|any)[], void, *>}
	 */
	*entries() {
		for (const [key, values] of this.paramMap) {
			for (const value of values) {
				yield [key, value]
			}
		}
	}

	/**
	 *
	 * @param callback
	 */
	forEach(callback) {
		for (const [key, values] of this.paramMap) {
			for (const value of values) {
				callback(value, key)
			}
		}
	}

	/**
	 *
	 * @param {string} key
	 * @return {*|null}
	 */
	get(key) {
		return this.paramMap.get(key)?.[0] ?? null
	}

	/**
	 *
	 * @param {string} key
	 * @return {string[]}
	 */
	getAll(key) {
		return this.paramMap.get(key) ?? []
	}

	/**
	 *
	 * @param {string} key
	 * @return {boolean}
	 */
	has(key) {
		return this.paramMap.has(key)
	}

	/**
	 *
	 * @return {IterableIterator<unknown>}
	 */
	keys() {
		return this.paramMap.keys()
	}

	/**
	 *
	 * @param {string} key
	 * @param {any} value
	 */
	set(key, value) {
		this.paramMap.set(key, [String(value)])
	}

	/**
	 *
	 */
	sort() {
		const temp = [...this.paramMap].sort((a, b) => a[0] < b[0] ? -1 : 1)
		this.paramMap = new Map(temp)
	}

	/**
	 *
	 * @return {string}
	 */
	toString() {
		return [...this.paramMap].flatMap(([key, values]) => values.map(value => `${key}=${value}`)).join('&')
	}

	/**
	 *
	 * @return {Generator<any, void, *>}
	 */
	*values() {
		for (const [key, values] of this.paramMap) {
			for (const value of values) {
				yield value
			}
		}
	}
}

const params = new MyURLSearchParams("?a=1&a=2&b=2")

console.log(params);

console.log(params.get('a'));
console.log(params.getAll('a'));

params.append('a', 2)
console.log(params);

params.delete('a')
console.log(params);

console.log(params.toString());
