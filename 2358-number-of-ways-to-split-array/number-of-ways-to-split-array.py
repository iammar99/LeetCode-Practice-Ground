class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        count = []
        sum_ = 0
        res = 0
        for i in range(len(nums)):
            sum_ += nums[i]
        for i in range(len(nums)):
            count.append(sum_)
            sum_ -= nums[i]
        left = nums[0]
        for i in range(1, len(count)):
            if left >= count[i]:
                res += 1
            left += nums[i]
        return res

