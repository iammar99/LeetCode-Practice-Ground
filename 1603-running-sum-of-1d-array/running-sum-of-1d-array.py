class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        count = 0
        arr = []
        for i in range(len(nums)):
            count = count + nums[i]
            arr.append(count)
        return arr