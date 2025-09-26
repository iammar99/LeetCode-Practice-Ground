function triangleNumber(nums: number[]): number {
    let count: number = 0;
    let arr: number[] = Array(Math.max(...nums) + 1).fill(0);
    for (let i: number = 0; i < nums.length; i++) {
        arr[nums[i]]++;
    }
    let sorted: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        while (arr[i] > 0) {
            sorted.push(i);
            arr[i]--;
        }
    }
    for (let i: number = 2; i < sorted.length; i++) {
        let left: number = 0;
        let right: number = i - 1;
        while (left < right) {
            const sum: number = sorted[right] + sorted[left];
            if (sum > sorted[i]) {
                count += right - left;
                right--;
            } else {
                left++;
            }
        }
    }
    return count;
};