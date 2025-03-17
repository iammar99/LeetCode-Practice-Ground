class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        map = defaultdict(int)
        for i in range(len(nums)):
            map[nums[i]] += 1

        for key, val in map.items():
            if val % 2 != 0:
                return False

        return True