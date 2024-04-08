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
function reverseList(head) {
  let prevNode = null;
  let curNode = head;
  let nextNode = head?.next;

  while (curNode) {    
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = nextNode;
    nextNode = curNode?.next;
  }

  return prevNode;
}