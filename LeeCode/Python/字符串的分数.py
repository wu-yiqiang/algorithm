from functools import reduce
class Solution(object):
    def scoreOfString(self, s):
        """
        :type s: str
        :rtype: int
        """
        if len(s) == 0:
            return 0
        if len(s) == 1:
            return ord(s[0])
        arr = [ord(x) for x in s]
        sum = 0
        #newArr = reduce(lambda x, y: x+y, arr)
        for i in range(len(arr)):
            j = i + 1
            if j < len(arr):
               sum += abs(arr[j] - arr[i])
        return  sum

solution = Solution()
print(solution.scoreOfString("a"))