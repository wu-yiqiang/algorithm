class Solution(object):
    def CheckPermutation(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
        le1 = len(s1)
        le2 = len(s2)
        if le1 != le2:
            return False
        d1 = {}
        for i in range(len(s1)):
            if s1[i] not in d1:
                d1[s1[i]] = 1
            else:
                d1[s1[i]] += 1
        d2 = {}
        for i in range(len(s2)):
            if s2[i] not in d2:
                d2[s2[i]] = 1
            else:
                d2[s2[i]] += 1
        for k1 in d1:
            if k1 not in d2 or d2[k1] != d1[k1]:
                return False
        return True
solution = Solution()
print(solution.CheckPermutation('abc', 'bad'))