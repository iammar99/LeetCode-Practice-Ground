/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let ans = numBottles
    let filled = 0
    let empty = 0
    while (numBottles >= numExchange) {
        ans += Math.floor(numBottles / numExchange)
        filled = Math.floor(numBottles / numExchange)
        empty = Math.floor(numBottles % numExchange)
        numBottles = filled + empty
    }
    return ans
};