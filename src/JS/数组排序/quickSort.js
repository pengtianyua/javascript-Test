function quickSort(array) {
	if (array.length <= 1) return array;

	let left = [];
	let right = [];
	let target = array[0];

	for (let i = 1; i < array.length; i++) {
		if (array[i] < target) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}
	return quickSort(left).concat([target], quickSort(right));
}

const arr = [10, 8, 20, 5, 6, 30, 11, 9];
console.log(quickSort(arr));
