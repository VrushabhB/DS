/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumber(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let dummyNode = new ListNode(0);
  let current = dummyNode;
  let carry = 0;
  while (p1 || p2) {
    let x = p1 ? p1.val : 0;
    let y = p2 ? p2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummyNode.next;
}
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

let result = addTwoNumber(l1, l2);
console.log("result", result);
module.exports = { addTwoNumber, ListNode };
