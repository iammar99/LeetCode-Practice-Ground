/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let x = 0
    for (let i = 0; i < operations.length; i++) {
        const char = operations[i]
        if (char == "++X" || char == "X++") {
            x += 1
        }
        else {
            x -= 1
        }
    }
    return x
};