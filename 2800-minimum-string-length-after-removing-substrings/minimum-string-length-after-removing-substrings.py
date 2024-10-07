class Solution:
    def minLength(self, s: str) -> int:
        stack = []
        if len(s) == 1:
            return 1
        for i in range(len(s)):
            if s[i] == "B" and stack and stack[-1] == "A":
                stack.pop()
                i += 1
            elif s[i] == "D" and stack and stack[-1] == "C":
                stack.pop()
                i += 1
            else:
                stack.append(s[i])
        return len(stack)