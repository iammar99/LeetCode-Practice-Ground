class Solution:
    def tupleSameProduct(self, nums: List[int]) -> int:
        prods = defaultdict(int)
        ans = 0
        for i in range(len(nums) - 1):
            for j in range(i + 1, len(nums)):
                prod = nums[i] * nums[j]
                ans += prods[prod]
                prods[prod] += 1
        return ans * 8