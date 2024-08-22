package main
import (
	"fmt"
)

func main() {
	fmt.Println(longestPalindrome("babad"))
}


func longestPalindrome(s string) string {
	if len(s) == 1 {
		return s
	}
	var str string
	if len(s) == 2 && s[0:1] == s[1:2] {
		return s
	}
	str = string(s[0:1])
	for i := 0; i < len(s); i++ {
		for j := len(s) - 1; j >= i; j++ {
			if(isPalin(s[i:j]) && j - i > len(str) ) {
				str = s[i:j]
			}
		}
 	}
	return str
}

func isPalin(str string) bool{
	for r := 0, k := len(str) - 1; r < len(str), k >= r; r++, k-- {
		if (byte(str[r]) != byte(str[k])) {
			return false
		}
	}
	return true
}


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