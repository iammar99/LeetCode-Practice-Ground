/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let m1 = {}
    let m2 = {}
    let arr1 = s1.split(" ")
    let arr2 = s2.split(" ")
    for (let i = 0; i < arr1.length; i++) {
        if (m1[arr1[i]]) {
            m1[arr1[i]] += 1
        }
        else {
            m1[arr1[i]] = 1
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (m2[arr2[i]]) {
            m2[arr2[i]] += 1
        }
        else {
            m2[arr2[i]] = 1
        }
    }
    let ans = []
    for (const key in m1) {
        if (m1[key] == 1 && m2[key] == undefined) {
            ans.push(key)
        }
    }
    for (const key in m2) {
        if (m2[key] == 1 && m1[key] == undefined) {
            ans.push(key)
        }
    }
    return ans
};