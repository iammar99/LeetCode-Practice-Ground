class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        map = defaultdict(int)
        for i in range(len(text)):
            map[text[i]] += 1

        min_count = float('inf')
        word = "balloon"
        if len(map) < 5:
            result = 0
        else:
            map["l"] = math.floor(map["l"] / 2)
            map["o"] = math.floor(map["o"] / 2)
            for i in range(len(word)):
                min_count = min(min_count, map[word[i]])
            result = min_count

        return result

