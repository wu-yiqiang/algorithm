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

const { bubbleSort, uniqueSet } = require('./utils/index')
var threeSum = function (nums) {
  const sumArr = []
  if (nums.length < 3) return sumArr
  const num = bubbleSort(nums)
  for (let i = 0; i < num.length - 2; i++) {
    if (i > 0 && num[i] === num[i - 1]) {
      continue
    }
    for (let l = i + 1,  r = (num.length - 1); l < r;) {
      const sum = num[i] + num[l] + num[r]
      if (sum === 0) {
        sumArr.push([num[i], num[l], num[r]])
        while (l < r && nums[l+1] == nums[l]) l++
        while (l < r && nums[r - 1] == nums[r]) r--
        l++
        r--
      }
      if (sum < 0) {
        l++
      }
      if (sum > 0) {
        r--
      }
    }
  }
  return sumArr
}

console.log(threeSum([0,0,0,0]))