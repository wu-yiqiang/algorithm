class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        d1 = {}
        for i in s:
            if i not in d1:
                d1[i] = 1
            else:
                d1[i] += 1

        d2 = {}
        for tk in t:
            if tk not in d2:
                d2[tk] = 1
            else:
                d2[tk] += 1
        for k1 in d2:
            if k1 not in d1 or d1[k1] != d2[k1]:
                return k1
        print(d1, d2)
solution = Solution()
print(solution.findTheDifference("a", 'aa'))