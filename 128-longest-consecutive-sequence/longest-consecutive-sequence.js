/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    let numMap = new Map();
    let longestStreak = 0;

    for (let num of nums) {
        if (!numMap.has(num)) {
            let left = numMap.get(num - 1) || 0;
            let right = numMap.get(num + 1) || 0;
            let currentStreak = left + 1 + right;

            numMap.set(num, currentStreak);
            numMap.set(num - left, currentStreak);
            numMap.set(num + right, currentStreak);

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};