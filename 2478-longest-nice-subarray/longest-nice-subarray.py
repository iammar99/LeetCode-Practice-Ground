class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        max_value = 1
        left = 0
        used = 0
        for i in range(len(nums)):
            while (used & nums[i]) != 0:
                used ^= nums[left]
                left += 1
            used |= nums[i]
            max_value = max(max_value, i - left + 1)
        return max_value 