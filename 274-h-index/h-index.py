class Solution:
    def hIndex(self, citations: List[int]) -> int:
        max_citations = max(citations)
        count = [0] * (max_citations + 1)

        for citation in citations:
            count[citation] += 1

        new_arr = []
        for i in range(len(count)):
            while count[i] > 0:
                new_arr.append(i)
                count[i] -= 1

        ans = 0
        for i in range(len(new_arr)):
            if len(new_arr) - i <= new_arr[i]:
                ans = len(new_arr) - i
                break

        return ans