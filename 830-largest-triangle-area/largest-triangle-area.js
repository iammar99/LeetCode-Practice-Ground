/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let ans = parseFloat(-Infinity)
    for (let i = 0; i < points.length - 2; i++) {
        const [xi, yi] = points[i]
        for (let j = i + 1; j < points.length - 1; j++) {
            const [xj, yj] = points[j]
            for (let k = j + 1; k < points.length; k++) {
                const [xk, yk] = points[k]
                const area = Math.abs((xi * (yj - yk) + xj * (yk - yi) + xk * (yi - yj)) / 2)
                ans = Math.max(ans, area)
            }
        }
    }
    return ans
};