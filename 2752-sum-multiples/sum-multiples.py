class Solution:
    def sumOfMultiples(self, n: int) -> int:
        res = []
        sum = 0
        for i in range(n+1):
            if i % 3 == 0 or i % 5 == 0 or i % 7 == 0:
                sum = sum + i
        return sum