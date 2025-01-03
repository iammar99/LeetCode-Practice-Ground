class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        sum = 0
        res = 0
        left = 0
        for i in range(len(nums)):
            sum += nums[i]
        for i in range(len(nums) - 1):
            left += nums[i]
            if left >= sum - left:
                res += 1
        return res
