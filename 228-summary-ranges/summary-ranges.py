class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0:
            return []
        
        res = []
        sub = []
        range_list = []
        sub.append(nums[0])
        
        for i in range(1, len(nums)):
            if nums[i - 1] + 1 == nums[i]:
                sub.append(nums[i])
            else:
                res.append(sub)
                sub = [nums[i]]
        
        res.append(sub)
        
        for arr in res:
            if len(arr) > 1:
                print(arr)
                start = arr[0]
                end = arr[-1]
                range_list.append(f"{start}->{end}")
            else:
                range_list.append(str(arr[0]))
        
        return range_list