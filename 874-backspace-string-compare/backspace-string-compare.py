class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        s_stack = []
        t_stack = []
        for i in range(len(s)):
            s_stack.append(s[i])
            if(s[i] == "#"):
                s_stack.pop()
                if s_stack:
                    s_stack.pop()
        for i in range(len(t)):
            t_stack.append(t[i])
            if(t[i] == "#"):
                t_stack.pop()
                if t_stack:
                    t_stack.pop()
        return "".join(s_stack) == "".join(t_stack)