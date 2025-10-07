class Solution:
    def avoidFlood(self, rains: List[int]) -> List[int]:
        ans = [None] * len(rains)
        last = {}
        dry = []
        for i, rain in enumerate(rains):
            if rain == 0:
                ans[i] = 1
                dry.append(i)
            else:
                if rain in last:
                    found = False
                    for j in range(len(dry)):
                        if dry[j] > last[rain]:
                            ans[dry[j]] = rain
                            dry.pop(j)
                            found = True
                            break
                    if not found:
                        return []
                ans[i] = -1
                last[rain] = i
        return ans