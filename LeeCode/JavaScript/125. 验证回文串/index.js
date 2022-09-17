/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const arrays = []
    for(let i =0; i < s.length;i++) {
        let alReg = /^[A-Za-z]+$/ // 是否字母
        let numReg = /^[0-9]+.?[0-9]*$/ //判断字符串是否为数字 ，判断正整数用/^[1-9]+[0-9]*]*$/
        if (alReg.test(s[i]) || numReg.test(s[i])) {
            if (alReg.test(s[i])) {
                arrays.push(s[i].toLowerCase())
            }
            if (numReg.test(s[i])) {
                arrays.push(s[i])
            }
        }
    }
    for (let j = 0, k = arrays.length -1; j < arrays.length, k>= j; j++, k--) {
        if (arrays[j] !== arrays[k]) return false
    }

return true
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))