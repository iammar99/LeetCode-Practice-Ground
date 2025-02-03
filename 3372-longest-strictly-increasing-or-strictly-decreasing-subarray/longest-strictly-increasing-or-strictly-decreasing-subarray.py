class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 1
        
        inc = 0
        dec = 0
        ans = 0
        
        # Checking increasing
        cur = 1
        for i in range(1, len(nums)):
            if nums[i - 1] < nums[i]:
                cur += 1
            else:
                cur = 1
            inc = max(cur, inc)
        
        # Checking decreasing
        cur = 1
        for i in range(1, len(nums)):
            if nums[i - 1] > nums[i]:
                cur += 1
            else:
                cur = 1
            dec = max(cur, dec)
        
        ans = max(inc, dec)
        return ans