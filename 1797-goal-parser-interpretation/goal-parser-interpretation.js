/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let str = ""
    for (let i = 0; i < command.length; i++) {
        let char = command[i]
        if (char == "G") {
            str += char
        }
        else if (char == "(" && command[i + 1] == ")") {
            str += "o"
            i++
        }
        else {
            i += 3
            str += "al"
        }
    }
    return str
};