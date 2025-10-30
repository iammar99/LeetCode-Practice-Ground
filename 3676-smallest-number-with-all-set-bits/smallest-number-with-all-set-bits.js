/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    return parseInt(Array(n.toString(2).length).fill(1).join(""),2)
};