class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        total = self.fib(n - 1) + self.fib(n - 2)
        return total 