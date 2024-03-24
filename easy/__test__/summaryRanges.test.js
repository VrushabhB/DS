const summaryRanges = require("../summaryRanges");

test("Summary Ranges", () => {
  // Test case 1: Regular input with consecutive numbers
  const nums1 = [0, 1, 2, 4, 5, 7];
  const expected1 = ["0->2", "4->5", "7"];
  expect(summaryRanges(nums1)).toEqual(expected1);

  // Test case 2: Regular input with non-consecutive numbers
  const nums2 = [1, 3, 5, 7, 9];
  const expected2 = ["1", "3", "5", "7", "9"];
  expect(summaryRanges(nums2)).toEqual(expected2);

  // Test case 3: Empty input array
  const nums3 = [];
  const expected3 = [];
  expect(summaryRanges(nums3)).toEqual(expected3);

  // Test case 4: Single number in the input array
  const nums4 = [5];
  const expected4 = ["5"];
  expect(summaryRanges(nums4)).toEqual(expected4);

  // Test case 5: Input array with negative numbers
  const nums5 = [-5, -4, -3, -1, 0, 1, 2];
  const expected5 = ["-5->-3", "-1->2"];
  expect(summaryRanges(nums5)).toEqual(expected5);
});
