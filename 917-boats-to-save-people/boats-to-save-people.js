/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b)
    let boats = 0
    let left = 0
    let right = people.length - 1
    while (left <= right) {
        let sum = people[left] + people[right]
        if (sum <= limit) {
            left++
        }
        console.log(left)
        right--
        boats++
    }
    return boats
};