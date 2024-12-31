package main
import (
	"fmt"
)

func main() {
	fmt.Println(longestPalindrome("babad"))
}


// func longestPalindrome(s string) string {
// 	if len(s) == 1 {
// 		return s
// 	}
// 	var str string
// 	if len(s) == 2 && s[0:1] == s[1:2] {
// 		return s
// 	}
// 	str = string(s[0:1])
// 	for i := 0; i < len(s); i++ {
// 		for j := len(s) - 1; j >= i; j++ {
// 			if(isPalin(s[i:j]) && j - i > len(str) ) {
// 				str = s[i:j]
// 			}
// 		}
//  	}
// 	return str
// }

// func isPalin(str string) bool{
// 	for r := 0, k := len(str) - 1; r < len(str), k >= r; r++, k-- {
// 		if (byte(str[r]) != byte(str[k])) {
// 			return false
// 		}
// 	}
// 	return true
// }




