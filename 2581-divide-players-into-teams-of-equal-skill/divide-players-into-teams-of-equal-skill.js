/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    skill.sort((a, b) => a - b)
    let chemistry = 0
    let team = []
    let left_pointer = 0
    let sum = skill[0] + skill[skill.length - 1]
    let right_pointer = skill.length - 1
    while (left_pointer < right_pointer) {
        if (skill.length != 0) {
            if (sum != (skill[left_pointer] + skill[right_pointer])) {
                return -1
            }
        }
        team.push([skill[left_pointer], skill[right_pointer]])
        left_pointer++
        right_pointer--
    }
    for (let i = 0; i < team.length; i++) {
        const sum = team[i].reduce((accumulator, currentValue) => accumulator * currentValue, 1);
        chemistry += sum
    }
    return chemistry
};