class Solution(object):
    def compareVersion(self, version1, version2):
        """
        :type version1: str
        :type version2: str
        :rtype: int
        """
        v1_array = version1.split('.')
        v2_array = version2.split('.')
        sub = len(v1_array) - len(v2_array)
        if sub > 0:
            for i in range(sub):
                v2_array.append('0')
        if sub < 0:
            for i in range(abs(sub)):
                v1_array.append('0')
        for k in range(len(v1_array)):
            v1_value = v1_array[k].lstrip('0')
            v2_value = v2_array[k].lstrip('0')
            v1_value_end = int('0' if v1_value == "" else v1_value)
            v2_value_end = int('0' if v2_value == "" else v2_value)
            print(v1_value_end, v2_value_end)
            if v1_value_end > v2_value_end:
                return 1
            if v1_value_end < v2_value_end:
                return -1
        return 0
solution = Solution()
print(solution.compareVersion("1.0", "0.1"))