/**
 * @method 选择排序
 * @description 把当前元素分别跟后面所有的元素对比 把最小的逐个往前排列
 * @param arr
 * @return arr
 * */
function selectSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let current = arr[i];
				arr[i] = arr[j];
				arr[j] = current;
			}
		}
	}
	console.log(arr);
}
const arr = [12,3,44,343,55,1,23]
selectSort(arr)
