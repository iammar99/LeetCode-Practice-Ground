class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        length = len(grid)
        arr = [0] * (length ** 2)
        res = [0, 0]

        for i in range(len(grid)):
            row = grid[i]
            for j in range(len(row)):
                arr[row[j] - 1] += 1

        for i in range(len(arr)):
            if arr[i] == 2:
                res[0] = i + 1
            if arr[i] == 0:
                res[1] = i + 1

        return res