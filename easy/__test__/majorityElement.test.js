const majorityElement = require("../majorityElement");

test("Finding majority element", () => {
  // Test case 1: Majority element exists
  const nums1 = [1, 2, 2, 2, 3];
  const expected1 = 2;
  expect(majorityElement(nums1)).toEqual(expected1);

  // Test case 2: Majority element does not exist
  const nums2 = [1, 2, 3, 4, 5];
  const expected2 = null;
  expect(majorityElement(nums2)).toEqual(expected2);

  // Test case 3: Empty input array
  const nums3 = [];
  const expected3 = null;
  expect(majorityElement(nums3)).toEqual(expected3);

  // Test case 4: Single element in the input array
  const nums4 = [1];
  const expected4 = 1;
  expect(majorityElement(nums4)).toEqual(expected4);

  // Test case 5: Majority element with negative numbers
  const nums5 = [-1, -1, 2, 2, 2, -1, -1];
  const expected5 = -1;
  expect(majorityElement(nums5)).toEqual(expected5);
});
