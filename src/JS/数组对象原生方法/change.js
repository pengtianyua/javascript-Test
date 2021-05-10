/**
 * @method Array.prototype.pop()
 * @description 从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度
 * */
let pop = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(pop.pop()); // tomato

/**
 * @method Array.prototype.push()
 * @description 将一个或多个元素添加到数组的末尾，并返回该数组的新长度
 * */
let push = ["pigs", "goats", "sheep"];
console.log(push.push("cows")); // 4

/**
 * @method Array.prototype.reverse()
 * @description 将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组
 * */
let reverse = ["one", "two", "three"];
console.log(reverse.reverse()); // ["three", "tow", "one"]

/**
 * @method Array.prototype.shift()
 * @description 从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度
 * */
let shift = [1, 2, 3];
console.log(shift.shift()); // 1

/**
 * @method Array.prototype.unshift()
 * @description 将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)
 * */
let unshift = [1, 2, 3];
console.log(unshift.unshift(4, 5)); // 5

/**
 * @method Array.prototype.sort()
 * @description 用原地算法对数组的元素进行排序，并返回数组
 * */
let sort = [1, 30, 4, 21, 100000];
console.log(sort.sort((a, b) => a - b)); // [1, 4, 21, 30, 100000]

/**
 * @method Array.prototype.splice()
 * @description 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
 * */
let splice = ["Jan", "March", "April", "June"];
console.log(splice.splice(1, 2, "Feb")); // ["March", "April"]
