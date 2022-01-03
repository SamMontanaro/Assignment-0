function sumOfMinimumAndMaximum(nums) {
  let min = nums[0];
  let max = nums[0];
  nums.forEach(e => {
    if (e < min)
      min = e;
    else if (e > max)
      max = e;
  });
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;