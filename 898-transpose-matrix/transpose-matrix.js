/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let transpose = Array.from({ length: col }, () => Array(row).fill(0));
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            transpose[i][j] = matrix[j][i]
        }
    }
    return transpose;
};