class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        if len(s) < k:
            return False
        odd = 0
        count = {}
        for i in range(len(s)):
            count[s[i]] = count.get(s[i], 0) + 1
        for key ,val in count.items():
            if not val % 2 == 0:
                odd += 1
        return odd <= k