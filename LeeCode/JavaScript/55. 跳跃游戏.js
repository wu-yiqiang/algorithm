/* 
给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个下标。


示例 1：
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

示例 2：
输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 

提示：
1 <= nums.length <= 3 * 104
0 <= nums[i] <= 105

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
   if (!nums.length) return false
   if (nums.length === 1) return true
   let max_i = nums[0]
   if (!max_i) return false
   for (let i = 1; i < nums.length; i++) {
     const element = nums[i]
     if (max_i < i) break
     if (max_i >= nums.length - 1) return true
     if (max_i < element + i) max_i = element + i
     
   }
   return false
}
console.log(canJump([3, 2, 1, 0, 4]))