class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        n = len(arr)
        subArr = []
        ans = 0
        for i in range(n):
            for j in range(i,n):
                sub = arr[i:j+1]
                if len(sub) % 2 == 0:
                    continue
                ans += sum(sub)
        return ans