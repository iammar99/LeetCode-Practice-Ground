/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    let vowel = false
    let number = false
    let special = true
    let consonant = false

    if (word.length < 3) return false
  for (let i in word) {
      if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u" || word.charAt(i) == "A" || word.charAt(i) == "E" || word.charAt(i) == "I" || word.charAt(i) == "O" || word.charAt(i) == "U") {
          vowel = true
      }
      if (!(word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u" || word.charAt(i) == "A" || word.charAt(i) == "E" || word.charAt(i) == "I" || word.charAt(i) == "O" || word.charAt(i) == "U") && !(word.charCodeAt(i) >= 48 && word.charAt(i) <= 57)) {
          consonant = true
      }
      if (word.charAt(i) == "@" || word.charAt(i) == "#" || word.charAt(i) == "$") {
          special = false
      }
      if (word.charCodeAt(i) >= 48 && word.charAt(i) <= 57) {
          number = true
      }
  }
    if (vowel == true && consonant == true && special == true) {
        return true
    }
    else {
        return false
    }
};