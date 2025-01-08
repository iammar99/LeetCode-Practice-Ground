class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        count = 0
        def is_suffix(str1, str2):
            if len(str1) > len(str2):
                return False
            return str2[-len(str1):] == str1

        def is_prefix(str1, str2):
            if len(str1) > len(str2):
                return False
            return str2[:len(str1)] == str1

        for i in range(len(words) - 1):
            for j in range(i + 1, len(words)):
                count += is_prefix(words[i], words[j]) and is_suffix(words[i], words[j])

        return count



