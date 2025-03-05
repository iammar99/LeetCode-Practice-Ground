/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
    let box = 1
    let add = 4
    for (let i = 1; i < n; i++) {
        box += add
        add += 4
    }
    return box
};