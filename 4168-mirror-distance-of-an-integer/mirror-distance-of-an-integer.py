class Solution:
    def mirrorDistance(self, n: int) -> int:
        char = str(n)
        num = ""
        for i in range(len(char) - 1, -1, -1):
            num += char[i]
        return abs(n - int(num))
