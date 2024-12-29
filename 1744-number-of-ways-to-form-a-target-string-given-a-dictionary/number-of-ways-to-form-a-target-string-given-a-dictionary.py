class Solution:
    def numWays(self, words: List[str], target: str) -> int:
        m, n, MOD = len(target), len(words[0]), int(1e9 + 7)
        freq = [[0] * n for _ in range(26)]
        for word in words:
            for i in range(n):
                freq[ord(word[i]) - ord('a')][i] += 1
        
        dp = [0] * (m + 1)
        dp[0] = 1
        for j in range(n):
            for i in range(m - 1, -1, -1):
                dp[i + 1] = (dp[i + 1] + dp[i] * freq[ord(target[i]) - ord('a')][j]) % MOD
        return dp[m]