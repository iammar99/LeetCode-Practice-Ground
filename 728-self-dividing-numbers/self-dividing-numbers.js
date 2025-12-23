/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let ans = []
    for (let i = left; i <= right; i++) {
        const num = i.toString().split("")
        let flag = true
        for (let j = 0; j < num.length; j++) {
            if (num.indexOf("0") != -1) {
                flag = false
                break
            }
            if (i % parseInt(num[j])) {
                flag = false
                break
            }
        }
        if (flag) {
            ans.push(i)
        }
    }
    return ans
};