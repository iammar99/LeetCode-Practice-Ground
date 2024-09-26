/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let maxLeft = []
    let maxRight = [];
    let minValue = []
    let res = 0
    let current = 0;
    for (let i = 0; i < height.length; i++) {
        maxLeft.push(current);
        current = Math.max(current, height[i]);
    }
    current = 0
    for (let i = height.length - 1; i >= 0; i--) {
        maxRight.push(current);
        current = Math.max(current, height[i]);
    }
    maxRight.reverse()
    for (let i = 0; i < height.length; i++) {
        minValue.push(Math.min(maxLeft[i], maxRight[i]))
    }
    for (let i = 0; i < height.length; i++) {
        let diff = minValue[i] - height[i]
        if (diff < 0) {
            continue
        }
        res += diff
    }
    return res
};