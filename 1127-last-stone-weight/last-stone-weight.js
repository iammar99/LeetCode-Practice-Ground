/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const sorting = (array) => {
        let arr = Array(Math.max(...array) + 1).fill(0)
        for (let i = 0; i < array.length; i++) {
            arr[array[i]]++
        }
        let sorted = []
        for (let i = 0; i < arr.length; i++) {
            while (arr[i] > 0) {
                sorted.push(i)
                arr[i]--
            }
        }
        return sorted
    }
    let sort = sorting(stones)
    for (let i = sort.length - 1; i >= 0; i--) {
        if (sort.length == 1) return sort[0]
        sort.push(Math.abs(sort.pop() - sort.pop()))
        sort = sorting(sort)
    }
    return sort[0]
};