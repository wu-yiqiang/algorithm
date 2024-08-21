# /**
#  * @param {string} s
#  * @return {string}
#  */

def longestPalindrome(s):
    if len(s) <= 1:
        return s
    if len(s) == 2:
        if s[0] == s[1]:
            return s
        return s[1]
    huiwenStr = s[0]
    length = 1
    lengthStr = len(huiwenStr) - 1
    huiwen = isHuiWen(s)
    if huiwen:
        return s
    for i in range(lengthStr):
        for j in range(i + 1, lengthStr):
            
# def longestPalindrome(s):
#     if (s.length <= 1) return s
#     if (s.length == 2) {
#         if (s[0] == s[1]) return s
#         return s[0]
#     }
#     let huiwenStr = s[0]
#     let length = 1
#     let len = s.length
#     const huiwen = isHuiWen(s)
#     if (huiwen) return s
#     for (let i = 1; i < len; i++) {
#         for (let j = 0; j + i < len; j++) {
#             const l = j + i
#             if (l >= len) return huiwenStr
#             const str = s.slice(j, l+1)
#             const huiwen = isHuiWen(str)
#             if (huiwen && str.length > length) huiwenStr = str
#         }
#     }
#     return huiwenStr



def isHuiWen(strs):
    if (len(strs) == 1):
        return False
    index = len(strs) - 1
    j = index
    for i in range(index):
        if (i <= j):
            if (strs[i] != strs[j]):
                return False

        j = j -1
    return True