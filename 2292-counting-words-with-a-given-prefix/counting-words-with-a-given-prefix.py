class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        count = 0
        for i in range(len(words)):
            char = words[i][:len(pref)]
            if char == pref:
                count += 1
        return count