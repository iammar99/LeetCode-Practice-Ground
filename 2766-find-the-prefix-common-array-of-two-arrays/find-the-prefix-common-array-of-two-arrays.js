/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let lenA = Math.max(...A)
    let freA = new Array(lenA + 1).fill(0)
    let lenB = Math.max(...B)
    let freB = new Array(lenA + 1).fill(0)
    let res = []
    for (let i = 0; i < A.length; i++) {
        freA[A[i]] += 1
        freB[B[i]] += 1
        let max = Math.max(A[i], B[i])
        let count = 0
        for (let j = 0; j < freA.length; j++) {
            if (freA[j] >= 1 && freB[j] >= 1) {
                count++
            }
        }
        res.push(count)
    }
    return res
};