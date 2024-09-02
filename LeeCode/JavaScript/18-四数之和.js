/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 方法一: 超时
var fourSum = function (nums, target) {
    const length = nums.length
    if (length < 4) return []
    let sortedNums = nums.sort()
    let arr = []
    getCombinations(sortedNums, target, arr)
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1
        while (j < arr.length) {
            if (isEqual(arr[i], arr[j])) {
                arr.splice(j, 1)
            } else {
                j++
            }
        }
    }
    console.log('sada', arr)
    return arr
};

const getCombinations = (arrays, target, arr) => {
    for (let i = 0; i < arrays.length; i++) {
        const valueI = arrays[i];
        for (let j = i + 1; j < arrays.length; j++) {
            const valueJ = arrays[j];
            for (let k = j + 1, l = arrays.length - 1; k < j; k++, j--) {
                const valueK = arrays[k]
                const valueL = arrays[l]
                const value = valueI + valueJ + valueK + valueL
                console.log('asdas', value)
                if (target == value) arr.push([valueI, valueJ, valueK, valueL])
            }
        }
    }
}

const isEqual = (arr1, arr2) => {
    let count = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) count++
    }
    if (count === 4) return true
    return false;
}

fourSum([1, 0, -1, 0, -2, 2], 0)


