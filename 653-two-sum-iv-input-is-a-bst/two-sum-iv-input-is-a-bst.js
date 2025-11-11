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
 * @return {boolean}
 */
var findTarget = function(root, k) {
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
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[i] + arr[j] == k){
                return true
            }
        }
    }
    return false
};