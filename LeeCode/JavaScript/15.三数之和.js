/* 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。

示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = [0,1,1]
输出：[]
示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
 

提示：
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

const { bubbleSort, deduplication } = require('./utils/index')
var threeSum = function (nums) {
  if (nums.length < 3) return []
  bubbleSort(nums)
  const num = deduplication(nums)
  if (num.length < 3) return []
  for (let i = 0; index < nums.length; i++) {
    const element = nums[i]
    for (let l = i + 1,  r = (nums.length - 1); index < r; l++, r--) {
      const element = array[index]
    }
  }
}

console.log(threeSum([-1, 0, 1, 2, -1, -4,0,4,-4,2,1]))