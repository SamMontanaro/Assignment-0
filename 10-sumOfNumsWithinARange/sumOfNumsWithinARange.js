function sumOfNumsWithinARange(nums, start, end) {
  let result = 0;
  let counting = false;

  for (let i = 0; i < nums.length; i++) {
    if (counting)
      result++;

    if (nums[i] == start) {
      counting = true;
      result++;
    }
    else if (nums[i] == end) {
      counting = false;
    }
  }
  return result;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;