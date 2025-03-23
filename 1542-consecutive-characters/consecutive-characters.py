class Solution:
    def maxPower(self, s: str) -> int:
        max_count = 0
        count = 1
        for i in range(len(s)):
            if i > 0 and s[i] == s[i - 1]:
                count += 1
            else:
                max_count = max(count, max_count)
                count = 1
            max_count = max(count, max_count)
        return max_count