/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
    let topSum = 0
    let bottomSum = 0
    let robot2 = Infinity
    for (let i = 0; i < grid[0].length; i++) {
        topSum += grid[0][i]
    }
    for (let i = 0; i < grid[0].length; i++) {
        topSum -= grid[0][i]
        robot2 = Math.min(robot2, Math.max(topSum, bottomSum))
        bottomSum += grid[1][i]
    }
    return robot2
};