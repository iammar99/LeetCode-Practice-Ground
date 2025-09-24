/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let map = {}
    for (let i = 0; i < candyType.length; i++) {
        if (map[candyType[i]]) {
            map[candyType[i]]++
        }
        else {
            map[candyType[i]] = 1
        }
    }
    let arr = Object.keys(map);
    let count = 0
    return candyType.length / 2 < arr.length ? candyType.length / 2 : arr.length
};