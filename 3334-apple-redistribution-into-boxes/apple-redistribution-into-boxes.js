/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    apple.sort((a, b) => a - b)
    capacity.sort((a, b) => b - a)
    let counter = 0
    let total = 0
    for (let i = 0; i < apple.length; i++) {
        total += apple[i]
    }
    for (let i = 0; i < capacity.length; i++) {
        total -= capacity[i]
        counter++
        if (total <= 0) break
    }
    return counter
};