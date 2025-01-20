/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let columns = []
    let res = 0
    for (let i = 0; i < grid[0].length; i++) {
        let sub = []
        for (let j = 0; j < grid.length; j++) {
            sub.push(grid[j][i])
        }
        columns.push(sub)
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < columns.length; j++) {
            if (JSON.stringify(grid[i]) === JSON.stringify(columns[j])) {
                res++
                // break
            }
        }
    }
    return res
};