class Solution:
    def gridGame(self, grid: List[List[int]]) -> int:
        topSum = 0
        bottomSum = 0
        robo2 = float('inf')
        for i in range(len(grid[0])):
            topSum += grid[0][i]
        for i in range(len(grid[0])):
            topSum -= grid[0][i]
            
            robo2 = min(robo2,max(topSum,bottomSum))
            bottomSum += grid[1][i]
        return robo2