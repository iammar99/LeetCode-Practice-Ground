/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0
    }
    let count = 0
    let arr = [[root,1]]
    while(arr.length > 0){
        let [node, depth] = arr.pop()
        count = Math.max(count,depth)
        console.log(node)
        if(node.children){
            for(let i = 0 ; i < node.children.length ; i++){
                arr.push([node.children[i], depth+1])
                console.log(depth)
            }
        }
    }
    return count
};