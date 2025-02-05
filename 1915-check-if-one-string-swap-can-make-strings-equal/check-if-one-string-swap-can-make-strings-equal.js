/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    let pos = []
    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) != s2.charAt(i)) {
            pos.push(i)
        }
    }
    if (pos.length == 2 || pos.length == 0) {
        return (s1.charAt(pos[0]) == s2.charAt(pos[1]) && s2.charAt(pos[0]) == s1.charAt(pos[1]))
    }
    return false
};