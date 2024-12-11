class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        hashMap = {}
        ans = 0
        for i in range(len(stones)):
            hashMap[stones[i]] = hashMap.get(stones[i], 0) + 1
        for i in range(len(jewels)):
            ans += hashMap.get(jewels[i] , 0)
        print(hashMap)
        return ans