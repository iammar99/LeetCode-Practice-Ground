/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 0
    let right = Math.max(...piles)
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        let total = 0
        for (let i = 0; i < piles.length; i++) {
            total += Math.ceil(piles[i] / mid)
        }
        if (total <= h) {
            right = mid
        }
        else {
            left = mid + 1
        }
    }
    return left
};