// 给你一个字符串 s，找到 s 中最长的回文子串。

 
// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：

// 输入：s = "a"
// 输出："a"
// 示例 4：

// 输入：s = "ac"
// 输出："a"
 

// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成

func longestPalindrome(s string) string {
	if len(s) <= 1 {
		return s
	}
    if len(s) == 2 {
        if (s[0] == s[1]) {
			return s
		}
        return s[0]
    }
     huiwenStr := s[0]
     length := 1
     lens := len(s)
     huiwen := isHuiWen(s)
    if huiwen == true { 
		return s
	}
    for (let i = 1; i < lens; i++) {
        for (let j = 0; j + i < lens; j++) {
            l := j + i
            if l >= lens {
				return huiwenStr
			}
            str := s.slice(j, l+1)
            huiwen := isHuiWen(str)
            if huiwen == true && str.length > length {
				huiwenStr = str
			}
        }
    }
    return huiwenStr
}

func isHuiWen(strs: string) bool {
    if len(strs) == 1 {
		return false
	}
    for (let i = 0, j = strs.length - 1; i <= j; i++, j--) {
        if strs[i] !== strs[j] {
            return false
        }
    }
    return true
}