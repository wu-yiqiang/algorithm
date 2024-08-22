# /**
#  * @param {string} s
#  * @return {string}
#  */

# 超时
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) <= 1:
            return s
        if len(s) == 2:
            if s[0] == s[1]:
                return s
            return s[1]
        maxLengthStr = s[0]
        maxLength = 1
        strLen = len(s)
        huiwen = self.isHuiWen(s)
        if huiwen is True:
            return s
        for i in range(1, strLen):
            j = 0
            l = j + i
            while l < strLen:
                str = s[j:l+1]
                huiwen = self.isHuiWen(str)
                print("sss", str, huiwen)
                if (huiwen is True and len(str) > maxLength):
                    maxLengthStr = str
                j = j + 1
                l = j + i
        return maxLengthStr


    def isHuiWen(selft, strs: str) -> bool:
        if (len(strs) == 1):
            return False
        index = len(strs) - 1
        j = index
        for i in range(index):
            if (i <= j):
                if (strs[i] != strs[j]):
                    return False
            j = j - 1
        return True


solution = Solution()
solution.longestPalindrome("ccc")