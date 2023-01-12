// 方法一：线性查找
var nextGreatestLetter = function(letters, target) {
    const length = letters.length;
    let nextGreater = letters[0];
    for (let i = 0; i < length; i++) {
        if (letters[i] > target) {
            nextGreater = letters[i];
            break;
        }
    }
    return nextGreater;
};
// 方法二：二分查找
var nextGreatestLetter = function(letters, target) {
    const length = letters.length;
    if (target >= letters[length - 1]) {
        return letters[0];
    }
    let low = 0, high = length - 1;
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (letters[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return letters[low];
};