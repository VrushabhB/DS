const { addTwoNumber, ListNode } = require("./solution");

test("should return the sum of two numbers represented by linked lists", () => {
  // Test Case 1
  let l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);

  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  let result = addTwoNumber(l1, l2);
  expect(result.val).toBe(7);
  expect(result.next.val).toBe(0);
  expect(result.next.next.val).toBe(8);
  expect(result.next.next.next).toBeNull();

  // Test Case 2
  l1 = new ListNode(0);
  l2 = new ListNode(0);

  result = addTwoNumber(l1, l2);
  expect(result.val).toBe(0);
  expect(result.next).toBeNull();

  // Test Case 3
  l1 = new ListNode(9);
  l1.next = new ListNode(9);
  l1.next.next = new ListNode(9);

  l2 = new ListNode(1);

  result = addTwoNumber(l1, l2);
  expect(result.val).toBe(0);
  expect(result.next.val).toBe(0);
  expect(result.next.next.val).toBe(0);
  expect(result.next.next.next.val).toBe(1);
  expect(result.next.next.next.next).toBeNull();
});
test("should add two numbers correctly", () => {
  // Test case 1: Adding two single-digit numbers
  expect(addTwoNumber(new ListNode(2), new ListNode(3))).toEqual(
    new ListNode(5)
  );

  // Test case 2: Adding two multi-digit numbers
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  expect(addTwoNumber(l1, l2)).toEqual(
    new ListNode(7, new ListNode(0, new ListNode(8)))
  );

  // Test case 3: Adding two numbers with carry
  const l3 = new ListNode(9);
  l3.next = new ListNode(9);
  l3.next.next = new ListNode(9);
  const l4 = new ListNode(1);
  expect(addTwoNumber(l3, l4)).toEqual(
    new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
  );
});
