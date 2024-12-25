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
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return []; 
    const result = []; 
    const queue = [root]; 
    let ans = []
    while (queue.length > 0) {
        const row = []; 
        const rowSize = queue.length; 

        for (let i = 0; i < rowSize; i++) {
            const node = queue.shift();
            row.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(row);
    }
    console.log(result)
    for(let i = 0 ; i < result.length ; i++){
        const arr = result[i]
        const max = Math.max(...arr)
        ans.push(max)
    }
    return ans
};