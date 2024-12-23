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
var minimumOperations = function (root) {
    if (!root) return 0
    let queue = [root]
    let count = 0
    while (queue.length > 0) {
        const size = queue.length
        const level = []
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        const sort_level = [...level].sort((a, b) => a - b);
        const mp = new Map();
        for (let i = 0; i < level.length; i++) {
            mp.set(level[i], i);
        }
        for (let i = 0; i < level.length; i++) {
            while (level[i] !== sort_level[i]) {
                count++; // Increment swap count
                const cur = mp.get(sort_level[i]); // Find the index where the sorted value is currently located
                mp.set(level[i], cur); // Update the map for the swapped value
                [level[i], level[cur]] = [level[cur], level[i]]; // Swap the values
            }
        }
    }
    return count
};