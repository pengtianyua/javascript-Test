/**
 * @method 冒泡排序
 * @description 遍历元素，跟其下一个元素对比 把最大的逐个往后排列
 * @param arr
 * @return arr
 */
function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let current = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = current;
			}
		}
	}
	console.log(arr);
}

const arr = [12,3,44,343,55,1,23]
bubbleSort(arr)

