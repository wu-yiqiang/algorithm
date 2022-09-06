/**
 * 二分查找法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums.length) return 0
  let left = 0
  let right = nums.length - 1
  let ans = nums.length
  // 递归
  while (left <= right) {
    let middle = Math.ceil((left + right) / 2)
    if (nums[middle] === target) return middle
    if (nums[middle] > target) {
      ans = middle
      right = middle - 1
    }
    if (nums[middle] < target) left = middle  + 1
  }
  return ans
 }


console.log(searchInsert([1, 3, 5, 6], 2))