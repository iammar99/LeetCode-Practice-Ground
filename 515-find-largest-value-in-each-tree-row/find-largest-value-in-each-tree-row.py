# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        ans = []
        if not root:
            return []
        result = []
        queue = [root]
        while len(queue) > 0 :
            row = []
            rowSize = len(queue)

            for i in range(rowSize):
                node = queue.pop(0)
                row.append(node.val)

                if node.left :
                    queue.append(node.left)
                if node.right :
                    queue.append(node.right)
            result.append(row)
        for i in range(len(result)):
            arr = result[i]
            maxVal = max(arr)
            ans.append(maxVal)
        return ans