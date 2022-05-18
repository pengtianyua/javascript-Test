/*
 * @Author: v_pengtianyu v_pengtianyu@baidu.com
 * @Date: 2022-05-10 17:13:37
 * @LastEditors: v_pengtianyu v_pengtianyu@baidu.com
 * @LastEditTime: 2022-05-18 15:09:01
 * @FilePath: \javascript-Test\src\Leetcode\array\search.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * 二分查找
 * @description 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1
 * @param nums
 * @param target
 */
const search = function(nums, target) {
	// right 是数组最后一个数的下标， nums[right] 在查找范围内，是左闭右闭区间
	let left = 0, right = nums.length - 1;
	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2)
		if(nums[mid] > target) {
			right = mid - 1
		} else if(nums[mid] < target) {
			left = mid + 1
		} else {
			return mid
		}
	}
	return -1
};
