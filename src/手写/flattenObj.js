/**
 *
 * @param target
 * @returns {boolean}
 */
const isObject = target => {
	return typeof target === "object" && target !== null;
};

/**
 *
 * @param obj
 * @returns {{}|boolean}
 */
const flatten = obj => {
	if (!isObject(obj)) return false;

	const res = {};

	const dfs = (cur, prefix) => {
		if (isObject(cur)) {
			if (Array.isArray(cur)) {
				cur.forEach((item, index) => dfs(item, `${prefix}[${index}]`));
			} else {
				for (let key in cur) {
					dfs(cur[key], `${prefix}${prefix ? "." : ""}${key}`);
				}
			}
		} else {
			res[prefix] = cur;
		}
	};

	dfs(obj, "");

	return res;
};

const obj = { a: { b: 1, c: 2, d: { e: 5 } }, b: [1, 3, { a: 2, b: 3 }], c: 3 };

console.log(flatten(obj));

function objectFlat(obj = "") {
	const res = {};

	function flat(item, preKey = "") {
		Object.entries(item).forEach(([key, value]) => {
			let newKey = key;
			if (Array.isArray(item)) {
				// console.log('是数组')
				newKey = preKey ? `${preKey}[${key}]` : key;
			} else {
				newKey = preKey ? `${preKey}.${key}` : key;
			}
			if (value && typeof value === "object") {
				flat(value, newKey);
			} else {
				res[newKey] = value;
			}
		});
	}

	flat(obj);
	return res;
}
