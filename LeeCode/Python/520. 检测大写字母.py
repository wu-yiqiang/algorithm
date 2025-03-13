class Solution(object):
    def detectCapitalUse(self, word):
        """
        :type word: str
        :rtype: bool
        """
        lower_count = 0
        upper_count = 0
        isStart = False
        length = len(word)
        for i in range(len(word)):
            if word[i].islower():
                lower_count += 1
            else:
                if i == 0:
                    isStart = True
                upper_count += 1
        if lower_count == length:
            return True
        if upper_count == length:
            return True
        print(upper_count, isStart)
        if upper_count == 1 and isStart is True:
            return True
        return False
