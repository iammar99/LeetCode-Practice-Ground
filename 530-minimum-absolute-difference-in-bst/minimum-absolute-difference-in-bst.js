/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let arr = []
    const dfs = (root) => {
        if (root == null) {
            return
        }
        arr.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    let ans = Infinity
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            ans = Math.min(ans,Math.abs(arr[i]-arr[j]))
        }
    }
    return ans
};