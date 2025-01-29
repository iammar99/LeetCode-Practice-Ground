class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        arr = []
        total = sum(nums)
        left = 0
        right = 0
        for i in range(len(nums)):
            right =  total - left - nums[i]
            arr.append(abs(left-right))
            left += nums[i]
        return arr