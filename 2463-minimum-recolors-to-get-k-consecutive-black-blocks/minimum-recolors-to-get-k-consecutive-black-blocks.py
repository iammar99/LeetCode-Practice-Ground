class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        res = float("inf")
        for i in range(len(blocks) - k + 1):
            pointer = i + k
            j = i
            count = 0
            while j < pointer:
                if blocks[j] == "W":
                    count += 1
                j += 1
            res = min(res, count)

        return res