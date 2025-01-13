class Solution:
    def minimumLength(self, s: str) -> int:
        if len(s) < 3:
            return len(s)
        
        count = {}
        ans = 0
        
        for char in s:
            count[char] = count.get(char, 0) + 1
        
        for val in count.values():
            while val >= 3:
                ans += 2
                val -= 2
        
        ans = len(s) - ans
        return ans

