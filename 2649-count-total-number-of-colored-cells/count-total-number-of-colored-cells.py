class Solution:
    def coloredCells(self, n: int) -> int:
        box = 1
        add = 4
        for i in range(1, n):
            box += add
            add += 4
        return box