class Solution:
    def canMakeSubsequence(self, str1: str, str2: str) -> bool:
        i = 0
        j = 0 
        m = len(str1)
        n = len(str2)
        while i < m and j < n:
            if (ord(str2[j]) - ord(str1[i]) + 26) % 26 <= 1 :
                j += 1
            i += 1
        return j == n