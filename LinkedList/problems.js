class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  // Create a dummy node as the head of the merged list
  const dummy = new ListNode();
  let current = dummy;

  // Traverse both lists and compare the values of the nodes
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Append the remaining nodes of the non-empty list
  current.next = list1 || list2;

  // Return the head of the merged list
  return dummy.next;
}
module.exports = mergeTwoLists;
