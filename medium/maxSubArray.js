function getMaxSubArray(nums) {
  if(!nums.length) return 0;
  let mv = -Infinity;
  let cs = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (cs < 0) {
      cs = nums[i];
    } else {
      cs += nums[i];
    }
    if (mv < cs) {
      mv = cs;
    }
  }
  return mv;
}

module.exports = getMaxSubArray;
