const groupAnagrams = require("./groupAnagram");

test("Grouping anagrams", () => {
  // Test case 1: Anagrams are present in the input array
  const words1 = ["cat", "dog", "tac", "god", "act"];
  const expected1 = [
    ["cat", "tac", "act"],
    ["dog", "god"],
  ];
  expect(groupAnagrams(words1)).toEqual(expected1);

  // Test case 2: No anagrams are present in the input array
  const words2 = ["hello", "world", "code", "test"];
  const expected2 = [["hello"], ["world"], ["code"], ["test"]];
  expect(groupAnagrams(words2)).toEqual(expected2);

  // Test case 3: Empty input array
  const words3 = [];
  const expected3 = [];
  expect(groupAnagrams(words3)).toEqual(expected3);

  // Test case 4: Single word in the input array
  const words4 = ["apple"];
  const expected4 = [["apple"]];
  expect(groupAnagrams(words4)).toEqual(expected4);

  // Test case 5: Anagrams with different lengths
  const words5 = ["listen", "silent", "elbow", "below", "state"];
  const expected5 = [["listen", "silent"], ["elbow", "below"], ["state"]];
  expect(groupAnagrams(words5)).toEqual(expected5);
});
