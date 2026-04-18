/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
    let char = n.toString()
    let num = ""
    for (let i = char.length - 1; i >= 0; i--) {
        num += char[i]
    }
    return Math.abs(num - n)
};