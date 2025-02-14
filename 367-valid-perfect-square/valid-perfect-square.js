/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let start = 0
    let end = num
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (mid * mid == num) {
            return true
        }
        else if (mid * mid < num) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }
    return false
};