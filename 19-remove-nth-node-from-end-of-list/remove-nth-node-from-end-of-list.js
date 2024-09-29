/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const reverseList = (head) => {
        let temp = head;
        let nexxt = null;
        let prev = null;
        while (temp) {
            nexxt = temp.next;
            temp.next = prev;
            prev = temp;
            temp = nexxt;
        }
        return prev;
    }


    let reversedList = reverseList(head);
    let counter = 1;
    let newList = reversedList;

    if (n == 1) {
        newList = reversedList.next
    }
    else {

        while (reversedList && reversedList.next) {
            if (counter == n - 1) {
                console.log(counter)
                reversedList.next = reversedList.next.next
            }
            reversedList = reversedList.next
            counter++
        }
    }


    let finalList = reverseList(newList)


    return finalList;


};