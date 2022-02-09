/**
 * 区间合并：
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 *
 * 示例 1：
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 * 示例 2：
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 *
 * @param intervals
 * @returns {*[]|*}
 */
const merge = function(intervals) {
	if (intervals.length === 1) return intervals;
	intervals.sort((a, b) => a[0] - b[0]);
	const res = [];
	let i = 0, j = 1;
	while (j < intervals.length) {
		const iArr = intervals[i];
		const jArr = intervals[j];
		if (iArr[1] >= jArr[0]) {
			intervals[i] = [Math.min(iArr[0], jArr[0]), Math.max(iArr[1], jArr[1])];
			j++;
			if (j === intervals.length) res.push(intervals[i]);
		} else {
			res.push(iArr);
			i = j++;
			if (j === intervals.length) res.push(jArr);
		}
	}
	return res;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));


