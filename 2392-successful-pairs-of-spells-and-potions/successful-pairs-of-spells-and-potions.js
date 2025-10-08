/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    let arr = Array(Math.max(...potions) + 1).fill(0)
    for (let i = 0; i < potions.length; i++) {
        arr[potions[i]]++
    }
    let sort = Array()
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] > 0) {
            sort.push(i)
            arr[i]--
        }
    }
    let ans = Array(spells.length).fill(0)
    for (let i = 0; i < spells.length; i++) {
        const power = spells[i]
        let left = 0
        let right = sort.length
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (sort[mid] * power >= success) {
                right = mid
            }
            else if (sort[mid] * power < success) {
                left = mid + 1
            }
            else {
            }
        }
        ans[i] = sort.length - left
    }
    return ans
};