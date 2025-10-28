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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = []
    const visit = (root) => {
        if(root == null){
            return
        }
        visit(root.left)
        arr.push(root.val)
        visit(root.right)
    }
    visit(root)
    arr.sort((a,b)=>a-b)
    return arr[k-1]
};