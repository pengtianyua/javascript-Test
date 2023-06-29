function compact(array) {
	return array.filter(Boolean);
}

const arr = [0, false, "", undefined, null, NaN];

console.log(compact(arr));
