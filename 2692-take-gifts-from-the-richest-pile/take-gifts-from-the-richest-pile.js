/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    for (let i = 0; i < k; i++) {
        const max = Math.max(...gifts)
        const index = gifts.indexOf(max)
        gifts[index] = Math.floor(Math.sqrt(max))
    }
    let sum = 0
    for (let i = 0; i < gifts.length; i++) {
        sum += gifts[i]
    }
    return sum
};