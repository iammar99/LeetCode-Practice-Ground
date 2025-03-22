class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        stack = []
        res = []
        for i in range(len(s)):
            code = ord(s[i])
            if (65 <= code <= 90) or (97 <= code <= 122):
                stack.append(s[i])

        for i in range(len(s)):
            code = ord(s[i])
            if (65 <= code <= 90) or (97 <= code <= 122):
                res.append(stack.pop())
            else:
                res.append(s[i])

        return ''.join(res)