class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        
        sum_ = nums[0]
        arr = []
        
        for i in range(1, len(nums)):
            if nums[i - 1] < nums[i]:
                sum_ += nums[i]
            else:
                arr.append(sum_)
                sum_ = nums[i]
            
            if i == len(nums) - 1:
                arr.append(sum_)
        
        return max(arr)