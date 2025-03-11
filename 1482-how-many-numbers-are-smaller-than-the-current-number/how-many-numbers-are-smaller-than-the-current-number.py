class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        max_num = max(nums)
        count = [0] * (max_num + 1)
        for i in range(len(nums)):
            count[nums[i]] += 1

        sorted_arr = []
        for i in range(len(count)):
            while count[i] > 0:
                sorted_arr.append(i)
                count[i] -= 1

        res = []
        for i in range(len(nums)):
            res.append(sorted_arr.index(nums[i]))

        return res