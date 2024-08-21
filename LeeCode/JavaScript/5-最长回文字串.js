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


function isHuiWen(strs) {
    if (strs.length = 1) return false
    for (let i = 0, j = strs.length - 1; i <= j; i++, j--) {
        if (strs[i] !== strs[j]) return false
    }
    return true
}

function spliceStrs(strs) {
    if (strs.length <= 1) return ""
    if (strs.length == 2) {
        if (strs[0] == strs[1]) return strs
        return ""
    }
    let huiwenStr = ""
    let length = 0
    let len = strs.length
    const huiwen = isHuiWen(strs)
    if (huiwen) return strs
    for (let i = 1; i < len; i++) {
        for (let j = 0; j <= len; j++) {
            const l = j + i
            if (l >= len) return huiwenStr
            const str = strs.slice(j, l+1)
            console.log('sadas', j, l, str)
            const huiwen = isHuiWen(str)
            if (huiwen && str.length > length) huiwenStr = str
        }
    }
    return huiwenStr
}

console.log(spliceStrs("cbbd"))