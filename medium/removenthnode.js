class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const removeNthFromEnd = (head, n) => {
  // Create a dummy node to handle edge cases
  const dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  // Move the fast pointer n nodes ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both pointers until the fast pointer reaches the end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the nth node from the end
  slow.next = slow.next.next;

  return dummy.next;
};
module.exports = removeNthFromEnd;
