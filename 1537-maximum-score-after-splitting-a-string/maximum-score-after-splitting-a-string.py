class Solution:
    def maxScore(self, s: str) -> int:
        max_value = 0
        zeros = 0
        ones = 0
        arr = list(s)

        for i in range(1, len(arr)):
            if arr[i] == '1':
                ones += 1

        if arr[0] == '0':
            zeros += 1

        for i in range(1, len(arr)):
            sum_value = zeros + ones
            max_value = max(sum_value, max_value)
            if arr[i] == '0':
                zeros += 1
            else:
                ones -= 1

        return max_value

