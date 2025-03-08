/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let res = Infinity
    for (let i = 0; i < blocks.length - k + 1; i++) {
        let pointer = i + k
        let j = i
        let count = 0
        while (j < pointer) {
            if (blocks[j] == "W") {
                count++
            }
            j++
        }
        res = Math.min(res, count)
    }
    return res
};