/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let map = new Map()
    let sum = 0
    for (let i = 0; i < stones.length; i++) {
        map.set(stones[i], (map.get(stones[i]) || 0) + 1)
    }
    for (let i = 0; i < jewels.length; i++) {
        sum += map.get(jewels[i]) || 0
    }
    return sum
};