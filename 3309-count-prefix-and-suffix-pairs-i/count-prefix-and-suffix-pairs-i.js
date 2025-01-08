/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    let count = 0
    const isSuffix = (str1, str2) => {
        if (str1.length > str2.length) return false
        return str2.slice(-str1.length) === str1;
    }
    const isPrefix = (str1, str2) => {
        if (str1.length > str2.length) return false
        return str2.slice(0, str1.length) === str1;
    }
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            count += isPrefix(words[i], words[j]) && isSuffix(words[i], words[j])
        }
    }
    return count
};