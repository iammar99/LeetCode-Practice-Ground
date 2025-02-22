/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    const findOriginal = (original, cloned, target) => {
        if (!original || !cloned) return null;

        if (original === target) return cloned;

        let leftResult = findOriginal(original.left, cloned.left, target);
        if (leftResult) return leftResult;

        return findOriginal(original.right, cloned.right, target);
    }
    return findOriginal(original, cloned, target)
};