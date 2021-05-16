function quickSort(arr) {
	//递归退出条件
	if (arr.length <= 1) return arr;
	const target = arr[0]
	//创建两个数组保存大于或小于target的数字
	let arrLt = [];
	let arrGt = [];

	//遍历数组 与target对比
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < target) {
			arrLt.push(arr[i]);
		} else {
			arrGt.push(arr[i]);
		}
	}
	return quickSort(arrLt).concat([target], quickSort(arrGt));
}

const arr = [10, 8, 20, 5, 6, 30, 11, 9];
console.log(quickSort(arr));
self.postMessage(quickSort(arr))
