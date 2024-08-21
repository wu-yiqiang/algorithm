// 给你一个整数数组 nums 。如果任一值在数组中出现至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

// 示例1：
// 输入：nums = [1, 2, 3, 1]

// 输出：true

// 示例2：
// 输入：nums = [1, 2, 3, 4]

// 输出：false


// 1 <= nums.length <= 10 ^ 5

//     - 10 ^ 9 <= nums[i] <= 10 ^ 9


function Deduplication(list) {
    const newLists = list.sort((a, b) => a - b)
    console.log('asdas', newLists)
    if (newLists.length == 0 || newLists.length == 1) return false
    for (let i = 0, j = 1; i < newLists.length; i++, j = i + 1) {
        if (newLists[i] == newLists[j]) return true
    }
    return false
}