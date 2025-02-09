/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let map = new Map()
    for (let i = 0; i < text.length; i++) {
        map.set(text[i], (map.get(text[i]) || 0) + 1)
    }
    let min = Infinity
    let word = "balloon"
    if (map.size < 5) {
        return 0
    }
    map.set("l", Math.floor(map.get("l") / 2))
    map.set("o", Math.floor(map.get("o") / 2))
    for (let i = 0; i < word.length; i++) {
        min = Math.min(min, map.get(word[i]) || 0)
    }
    return min
};