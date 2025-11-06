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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let arr = []
    const dfs = (root) => {
        if(root == null){
            return 
        }
        dfs(root.left)
        dfs(root.right)
        arr.push(root.val)
    }
    dfs(root)
    arr.sort((a,b)=>a-b)
    let ans = new TreeNode(arr[0])
    let cur = ans
    for(let i = 1 ; i < arr.length ; i++){
        cur.right = new TreeNode(arr[i])
        cur = cur.right
    }
    return ans
};