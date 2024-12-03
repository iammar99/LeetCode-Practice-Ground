class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        res = ""
        pointer = 0
        for i in range(len(s)):
            if pointer < len(spaces) and spaces[pointer] == i:
                res += " "
                pointer += 1
            res += s[i]
        return res