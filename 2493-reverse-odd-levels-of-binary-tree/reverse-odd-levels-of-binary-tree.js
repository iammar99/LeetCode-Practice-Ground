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
var reverseOddLevels = function (root) {
    reverse(root.left,root.right ,  0)
    return root
};
    const reverse = (leftNode , rightNode,level) => {
        if(leftNode == null){
            return 
        }
        if(level % 2 == 0){
            let temp = leftNode.val
            leftNode.val = rightNode.val
            rightNode.val = temp
        }
        reverse(leftNode.left , rightNode.right , level+1)
        reverse(leftNode.right , rightNode.left , level+1)
    }