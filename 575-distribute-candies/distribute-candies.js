/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let cSet = new Set(candyType);
    return candyType.length / 2 < cSet.size ? candyType.length / 2 : cSet.size
};