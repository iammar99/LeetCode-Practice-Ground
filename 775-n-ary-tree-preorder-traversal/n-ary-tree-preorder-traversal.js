/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let arr = []
    const dfs = (root) => {
        if(root == null){
            return
        }
        arr.push(root.val)
        let node = root.children
        for(let i = 0 ; i < node.length ; i++){
            dfs(node[i])
        }

    }
    dfs(root)
    return arr
};