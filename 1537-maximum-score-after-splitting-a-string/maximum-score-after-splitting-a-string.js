/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let max = 0
    let zeros = 0
    let ones = 0
    let arr = s.split("")
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == 1) {
            ones += 1
        }
    }
    if (arr[0] == 0) {
        zeros += 1
    }
    for (let i = 1; i < arr.length ; i++) {
        let sum = zeros + ones
        max = Math.max(sum, max)
        if (arr[i] == 0) {
            zeros += 1
        }
        else {
            ones -= 1
        }
    }
    return max
};