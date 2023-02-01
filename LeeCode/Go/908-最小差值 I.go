/* 908. 最小差值 I


题目描述

难易度：简单

给你一个整数数组 nums，和一个整数 k 。

在一个操作中，您可以选择 0 <= i < nums.length 的任何索引 i 。将 nums[i] 改为 nums[i] + x ，其中 x 是一个范围为 [-k, k] 的整数。对于每个索引 i ，最多 只能 应用 一次 此操作。

nums 的 分数 是 nums 中最大和最小元素的差值。 

在对 nums 中的每个索引最多应用一次上述操作后，返回 nums 的最低 分数 。

思路和算法

假设整数数组 nums 的最小值为 minNum，最大值为 maxNum。

如果 maxNum − minNum ≤ 2k，那么我们总可以将整数数组 nums 的所有元素都改为同一个整数，因此更改后的整数数组 nums 的最低分数为 0。

证明：因为 maxNum − minNum ≤ 2k，所以存在整数 x ∈ [minNum,maxNum]，使得 x - x − minNum ≤ k 且 maxNum − x ≤ k。那么整数数组 nums 的所有元素与整数 x 的绝对差值都不超过 k，即所有元素都可以改为 x。

如果 maxNum − minNum > 2k，那么更改后的整数数组 nums 的最低分数为 maxNum − minNum − 2k。

证明：对于 minNum 和 maxNum 两个元素，我们将 minNum 改为 minNum + k，maxNum 改为 maxNum − k，此时两个元素的绝对差值最小。因此更改后的整数数组 nums 的最低分数大于等于 maxNum − minNum − 2k。

对于整数数组 nums 中的元素 x，如果 x < minNum + k，那么 x 可以更改为 min Num + k，如果 x > maxNum − k，那么 x 可以更改为 maxNum − k，因此整数数组 nums 的所有元素都可以改为区间 [minNum + k,maxNum − k] 的整数，所以更改后的整数数组 nums 的最低分数小于等于 maxNum − minNum − 2k。

综上所述，更改后的整数数组 nums 的最低分数为 maxNum − minNum − 2k。

*/


func smallestRangeI(nums []int, k int) int {
    minNum, maxNum := nums[0], nums[0]
    for _, num := range nums[1:] {
        if num < minNum {
            minNum = num
        } else if num > maxNum {
            maxNum = num
        }
    }
    ans := maxNum - minNum - 2*k
    if ans > 0 {
        return ans
    }
    return 0
}

/* 
    复杂度分析

时间复杂度：O(n)，其中 n 是整数数组 nums 的长度。需要 O(n) 的时间遍历数组 nums 得到最小值和最大值，然后需要 O(1) 的时间计算最低分数。

空间复杂度：O(1)。
*/