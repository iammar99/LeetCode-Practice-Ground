class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        map = defaultdict(int)
        for i in range(len(nums)):
            if nums[i] % 2 == 0:
                map[nums[i]] += 1
        print(map)
        if len(map) == 0:
            return -1
        ans = 0
        cur = float('-inf')
        for key, val in map.items():
            if val > cur:
                cur = val
                ans = key
            elif val == cur:
                ans = min(ans, key)
        return ans