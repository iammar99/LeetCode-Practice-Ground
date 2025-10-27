/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let map = {}
    let ans = 0
    for (let i = 0; i < bank.length; i++) {
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] == 1) {
                if (map[i]) {
                    map[i] += 1
                }
                else {
                    map[i] = 1
                }
            }
        }
    }
    const keys = Object.keys(map).sort((a, b) => a - b);
    for (let i = 1; i < keys.length; i++) {
        ans += map[keys[i]] * map[keys[i - 1]]
    }
    return ans
};