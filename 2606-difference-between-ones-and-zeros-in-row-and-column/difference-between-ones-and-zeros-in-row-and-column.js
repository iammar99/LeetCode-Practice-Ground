/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
    let onesInRow = []
    let onesInCol = []
    let zerosInRow = []
    let zerosInCol = []
    for (let i = 0; i < grid.length; i++) {
        let ones = 0
        let zero = 0
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) ones += 1
            if (grid[i][j] == 0) zero += 1
        }
        onesInRow.push(ones)
        zerosInRow.push(zero)
    }
    for (let i = 0; i < grid[0].length; i++) {
        let ones = 0
        let zero = 0
        for (let j = 0; j < grid.length; j++) {
            if (grid[j][i] == 1) ones += 1
            if (grid[j][i] == 0) zero += 1
        }
        onesInCol.push(ones)
        zerosInCol.push(zero)
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const val = onesInRow[i] + onesInCol[j] - zerosInRow[i] -
                zerosInCol[j]
            grid[i][j] = val
        }
    }
    return grid
};