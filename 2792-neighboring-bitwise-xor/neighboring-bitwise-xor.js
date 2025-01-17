/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
    let sum = 0
    for (let i = 0; i < derived.length; i++) {
        sum ^= derived[i]
    }
    return sum == 0
};