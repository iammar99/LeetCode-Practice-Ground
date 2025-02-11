class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        stack = []
        n = len(part)
        for i in range(len(s)):
            stack.append(s[i])
            sub = ''.join(stack[-n:])
            if sub == part:
                del stack[-n:]
        return ''.join(stack)