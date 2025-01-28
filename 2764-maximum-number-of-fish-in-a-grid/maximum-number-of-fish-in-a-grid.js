/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
    let ans = 0
    const dfs = (i, j) => {
        if (i >= grid.length || i < 0 || j < 0 || j >= grid[0].length || grid[i][j] == 0) {
            return 0
        }
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        let totalFish = grid[i][j]
        grid[i][j] = 0
        for (const [x, y] of dirs) {
            totalFish += dfs(i + x, j + y)
        }
        return totalFish
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            ans = Math.max(ans, dfs(i, j))
        }
    }
    return ans
};