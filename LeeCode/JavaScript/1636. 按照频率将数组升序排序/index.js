/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const obj = new Map()
    for (const arrayElement of nums) {
        obj.set(arrayElement, (obj.get(arrayElement) || 0) + 1)
    }
    nums.sort((a, b) => {
        if (obj.get(a) != obj.get(b)) {
            return obj.get(a) - obj.get(b)
        }
        return b - a
    })
    // 排序
    return  nums
};

console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]))