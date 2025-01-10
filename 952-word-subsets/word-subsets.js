/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    let req = new Map()
    let res = []
    for (let i = 0; i < words2.length; i++) {
        let word = words2[i]
        let cur = new Map()
        for (let j = 0; j < word.length; j++) {
            let char = word[j]
            cur.set(char, ((cur.get(char) || 0) + 1))
            req.set(char, Math.max(req.get(char) || 0, cur.get(char)))
        }
    }
    for (let i = 0; i < words1.length; i++) {
        let word = words1[i]
        let temp = new Map(req)
        for (let j = 0; j < word.length; j++) {
            let char = word[j]
            if (temp.has(char)) {
                temp.set(char, temp.get(char) - 1)
            }
            if (temp.get(char) == 0) {
                temp.delete(char)
            }
        }
        if (temp.size == 0) {
            res.push(word)
        }
    }
    return res
};