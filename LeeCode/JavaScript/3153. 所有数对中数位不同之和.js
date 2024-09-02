/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function (nums) {
    let account = 0
    const len = nums.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            account += count(nums[i], nums[j])
        }
    }
    return account
};

const count = (value1, value2) => {
    if (value1 == value2) return 0
    const value2Str = String(value2)
    const value1Str = String(value1)
    const lens = value1Str.length
    let count = 0
    for (let i = 0; i < lens; i++) {
        if (value1Str[i] != value2Str[i]) {
            count++
        }
    }
    return count
}