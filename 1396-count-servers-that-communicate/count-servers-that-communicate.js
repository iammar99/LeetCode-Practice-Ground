/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    let row = new Array(grid.length).fill(0);
    let col = new Array(grid[0].length).fill(0);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                row[i]++
                col[j]++
            }
        }
    }
    let ans = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] && (row[i] > 1 || col[j] > 1)) {
                ans++
            }
        }
    }
    return ans
};