class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        lenA = max(A)
        freA = [0] * (lenA + 1)
        lenB = max(B)
        freB = [0] * (lenA + 1)
        res = []

        for i in range(len(A)):
            freA[A[i]] += 1
            freB[B[i]] += 1
            max_val = max(A[i], B[i])
            count = 0
            for j in range(len(freA)):
                if freA[j] >= 1 and freB[j] >= 1:
                    count += 1
            res.append(count)

        return res