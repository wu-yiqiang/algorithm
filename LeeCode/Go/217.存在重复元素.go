package main

import (
	"fmt"
	"sort"
)

//  LeetCode第217题
// 难度：简单

// 给你一个整数数组 nums 。如果任一值在数组中出现至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

// 示例1：
// 输入：nums = [1, 2, 3, 1]

// 输出：true

// 示例2：
// 输入：nums = [1, 2, 3, 4]

// 输出：false
// 1 <= nums.length <= 10 ^ 5
//     - 10 ^ 9 <= nums[i] <= 10 ^ 9

func Deduplication(nums []int) bool {
	if len(nums) == 1 || len(nums) == 0 {
		return false
	}
	sort.Ints(nums)
	fmt.Println("asda", nums)
	for k, _ := range nums {
		if (k == (len(nums) - 1)) {
			return false
		}
		if (nums[k] == nums[k+1]) {
			return true
		}
	}
	return false
}
