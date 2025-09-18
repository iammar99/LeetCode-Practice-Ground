/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let map = {
        a: '.-', b: '-...', c: '-.-.', d: '-..',
        e: '.', f: '..-.', g: '--.', h: '....',
        i: '..', j: '.---', k: '-.-', l: '.-..',
        m: '--', n: '-.', o: '---', p: '.--.',
        q: '--.-', r: '.-.', s: '...', t: '-',
        u: '..-', v: '...-', w: '.--', x: '-..-',
        y: '-.--', z: '--..'
    }
    let count = 1
    let arr = []
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        let str = ""
        for (let j = 0; j < word.length; j++) {
            str += map[word[j]]
        }
        if (arr.indexOf(str) == -1) {
            arr.push(str)
            count++
        }
    }
    return arr.length
};