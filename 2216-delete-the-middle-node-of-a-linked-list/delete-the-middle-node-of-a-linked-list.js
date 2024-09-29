/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
    let counter = 0
    let temp = head
    while (temp) {
        temp = temp.next
        counter++
    }
    let index = Math.floor(counter / 2)
    if(counter == 1){
        return null
    }
    counter = 1
    temp = head
    let newList = temp 
    while (temp && temp.next) {
        if (counter == index){
            temp.next = temp.next.next
        }
        temp = temp.next
        counter++
    }
    return newList
};