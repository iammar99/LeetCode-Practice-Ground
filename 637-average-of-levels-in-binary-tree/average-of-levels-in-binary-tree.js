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
var averageOfLevels = function (root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let sum = 0
        let counter = 0
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            sum += node.val
            counter++
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(sum / counter)

    }

    return result;
};