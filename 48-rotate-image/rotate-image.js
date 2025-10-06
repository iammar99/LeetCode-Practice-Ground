/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let ans = []
    for (let i = 0; i < matrix.length; i++) {
        const curRow = matrix[i]
        const row = []
        for (let j = 0; j < curRow.length; j++) {
            const element = matrix[j][i]
            row.push(element)
        }
        ans.push(row.reverse())
    }
    for (let i = 0; i < matrix.length; i++) {
        const curRow = matrix[i]
        for (let j = 0; j < curRow.length; j++) {
            const element = ans[i][j]
            matrix[i][j] = element
        }
    }
};