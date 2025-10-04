function maxArea(height: number[]): number {
    let ans: number = 0
    let left: number = 0
    let right: number = height.length - 1
    while (left < right) {
        const curr: number = Math.min(height[left], height[right]) * (right - left)
        ans = Math.max(curr, ans)
        if (height[left] < height[right]) {
            left++
        }
        else {
            right--
        }
    }
    return ans
};