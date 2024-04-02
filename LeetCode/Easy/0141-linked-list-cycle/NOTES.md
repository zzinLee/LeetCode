# linked-list-cycle
`node`에 `visited` 속성을 추가하여 시간복잡도 $O(n)$, 공간복잡도 $O(1)$ 으로 풀이`solution1` 했으나 <br>
문제에서 제시한 `Node`를 직접 건드린 방법이라 다른 풀이법을 찾아보기로 했다.

</br>

## Pass

### solution 1 | 직접 데이터 구조를 수정

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  let currentNode = head;

  while (currentNode) {
    if (currentNode.visited) {
      return true;
    }

    currentNode.visited = true;
    currentNode = currentNode.next;
  }

  return false;
}

```

### solution 2 | hashing

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  const set = new Set();

  while (head) {
    if (set.has(head)) {
      return true;
    }

    set.add(head);

    head = head.next;
  }

  return false;
}
```

### solution 3 | Floyd's Cycle-Finding Algorithm

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Determines whether a linked list has a cycle.
 * @param {ListNode} head - The head of the linked list.
 * @return {boolean} - Returns true if there is a cycle, otherwise false.
 */
function hasCycle(head) {
    // Check if the linked list is empty or contains only one node
    if (!head || !head.next) {
        return false;
    }

    // Initialize two pointers: slow and fast
    let slow = head;
    let fast = head;

    // Iterate through the linked list
    while (fast && fast.next) {
        // Move slow pointer one step forward
        slow = slow.next;
        // Move fast pointer two steps forward
        fast = fast.next.next;

        // If there's a cycle, slow and fast pointers will meet
        if (slow === fast) {
            return true;
        }
    }

    // If fast pointer reaches the end, there's no cycle
    return false;
}

```
