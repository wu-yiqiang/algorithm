// 给你一个字符串 s，找到 s 中最长的
// 回文

// 子串
// 。



// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"


// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s
    if (s.length == 2) {
        if (s[0] == s[1]) return s
        return s[0]
    }
    let huiwenStr = s[0]
    let length = 1
    let len = s.length
    const huiwen = isHuiWen(s)
    if (huiwen) return s
    for (let i = 1; i < len; i++) {
        for (let j = 0; j + i < len; j++) {
            const l = j + i
            if (l >= len) return huiwenStr
            const str = s.slice(j, l+1)
            const huiwen = isHuiWen(str)
            if (huiwen && str.length > length) huiwenStr = str
        }
    }
    return huiwenStr
};


function isHuiWen(strs) {
    if (strs.length == 1) return false
    for (let i = 0, j = strs.length - 1; i <= j; i++, j--) {
        if (strs[i] !== strs[j]) {
            return false
        }
    }
    return true
}