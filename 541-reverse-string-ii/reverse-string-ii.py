class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        slow = 0
        fast = k
        stack = []
        arr = []
        while fast <= len(s) or slow < len(s):
            while slow < fast and slow < len(s):
                stack.append(s[slow])
                slow += 1
            slow += k
            while stack:
                arr.append(stack.pop())
            while fast < slow and fast < len(s):
                arr.append(s[fast])
                fast += 1
            fast += k
        return ''.join(arr)