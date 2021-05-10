/**
 * @method flatten
 * @description 扁平化数组
 * @param {any[]} arr
 * @return {any[]} array
 * */
Function.prototype.flatten = function (arr = []) {
	return arr.reduce((result, item) => {
		return result.concat(Array.isArray(item) ? Function.prototype.flatten(item) : item);
	}, []);
};

Function.prototype.flatten2 = function(arr = []) {
	return arr.toString().split(",").map(item => Number(item))
}

let arr = [1, [2, [3, [4]]]];
console.log(Function.prototype.flatten(arr));
console.log(Function.prototype.flatten2(arr));
