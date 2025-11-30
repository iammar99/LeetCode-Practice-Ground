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
var findSecondMinimumValue = function (root) {
    let set = new Set()
    const dfs = (root) => {
        if (root == null) {
            return
        }
        set.add(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    let arr = [...set].sort((a, b) => a - b);
    return arr.length != 1 ? arr[1] : -1
};