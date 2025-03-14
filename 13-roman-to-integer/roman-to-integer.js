/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let hashmap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (hashmap[s.charAt(i)] < hashmap[s.charAt(i + 1)]) {
            res -= hashmap[s.charAt(i)]
        }
        else {
            res += hashmap[s.charAt(i)]
        }
    }
    return res
};