class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        res = []
        p = ''.join(sorted(p))
        for i in range(len(s) - len(p) + 1):
            newArr = ''.join(sorted(s[i:i + len(p)]))
            if newArr == p:
                res.append(i)
        return res