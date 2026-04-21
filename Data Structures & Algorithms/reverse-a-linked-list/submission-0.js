/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {

        let prev = null;
        let currentNode = head;

        while(currentNode){
            let next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next
        }
        return prev
    }
}
