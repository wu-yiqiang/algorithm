class Solution(object):
    def sortedSquares(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        arr = [x*x for x in nums]
        arr.sort()
        print(arr)
solution = Solution()
print(solution.sortedSquares([-7,-3,2,3,11]))