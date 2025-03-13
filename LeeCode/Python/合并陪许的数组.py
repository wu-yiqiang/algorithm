class Solution(object):
    def merge(self, A, m, B, n):
        """
        :type A: List[int]
        :type m: int
        :type B: List[int]
        :type n: int
        :rtype: None Do not return anything, modify A in-place instead.
        """
        if m == 0:
            for index, value in enumerate(B, start=0):
                A[index] = value
            return
        if n == 0:
            return
        a_point = 0
        b_point = 0
        max_num = m+ n
        new_array = []
        for i in range(max_num):
            if A[a_point] < B[b_point]:
                value = A[a_point]
                a_point += 1
            else:
                value = B[b_point]
                b_point += 1
            new_array.append(value)
        sum = m - b_point
        index = m +n - sum
        array = B[b_point:]
        ar = new_array[:index]+array
        print(ar)
        for index, value in enumerate(ar, start=0):
            A[index] = value
solution = Solution()
print(solution.merge([2,0], 1, [1], 1))