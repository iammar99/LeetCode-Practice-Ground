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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let arr = []
    const dfs = (root) => {
        if(root == null){
            return
        }
        // console.log(root.val)
        if(root.val >= low && root.val <= high){
            arr.push(root.val)
        }
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    let ans = 0
    for(let i = 0 ; i < arr.length ; i++){
        ans += arr[i]
    }
    return ans
};