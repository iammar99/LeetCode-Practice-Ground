class Solution:
    def check(self, nums: List[int]) -> bool:
        tracker = 0
        for i in range(len(nums)):
            if nums[i] > nums[(i+1) % len(nums)]:
                tracker += 1
        return tracker <= 1