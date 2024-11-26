/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let curr = head
    let arr = []
    while(curr){
        arr.push(curr.val)
        curr = curr.next
    }
    k = k % arr.length
    arr = [...arr.slice(-k), ...arr.slice(0, -k)];
    console.log(arr)
    let dummy = new ListNode()
    let temp = dummy
    for(let i = 0 ; i < arr.length ; i++){
        temp.next = new ListNode(arr[i])
        temp = temp.next
    }
    return dummy.next
};