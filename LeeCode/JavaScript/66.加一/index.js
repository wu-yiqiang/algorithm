/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let sum = 1
    for (let i = digits.length - 1; i >= 0; i--) {
        sum += digits[i]
        if (sum  >= 10) {
            digits[i] = sum  - 10

            sum = 1
        } else {
            digits[i] = sum
            sum = 0
            console.log(digits[i])
        }
    }
    if (sum) {
        digits.unshift(1)
    }
    return digits
};

console.log(plusOne([8,9,9,9]))