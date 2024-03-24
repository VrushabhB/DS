function summaryRanges(nums) {
  let length = nums.length;
  let result = [];
  let startIndex = 0;

  let str = "";
  for (let i = 0; i < length; ++i) {
    if (nums[i] + 1 !== nums[i + 1]) {
      let begin = i - startIndex;
      if (begin === i) {
        str = `${nums[i]}`;
      } else {
        str = nums[i - startIndex] + "->" + nums[i];
        startIndex = 0;
      }
      result.push(str);
    } else {
      startIndex += 1;
    }
  }
  return result;
}
module.exports = summaryRanges;
