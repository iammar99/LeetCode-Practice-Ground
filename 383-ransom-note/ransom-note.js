/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false
    let map1 = new Map()
    let map2 = new Map()
    for (let i = 0; i < ransomNote.length; i++) {
        map1.set(ransomNote[i], (map1.get(ransomNote[i]) || 0) + 1)
    }
    for (let i = 0; i < magazine.length; i++) {
        map2.set(magazine[i], (map2.get(magazine[i]) || 0) + 1)
    }
    for (const [key, val] of map1) {
        if (map1.get(key) > map2.get(key) || map2.get(key) == undefined) {
            return false
        }
    }
    return true
};