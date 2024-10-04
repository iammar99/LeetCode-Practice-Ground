/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let duplicate = arr.slice().sort((a, b) => a - b)
    let map = new Map()
    let res = []
    let rank = 1
    for (let i = 0; i < duplicate.length; i++) {
        if (!map.has(duplicate[i])) {
            map.set(duplicate[i], rank)
            rank++
        }
    }
    for (let i = 0; i < arr.length; i++) {
        res.push(map.get(arr[i]))
    }
    return res
};