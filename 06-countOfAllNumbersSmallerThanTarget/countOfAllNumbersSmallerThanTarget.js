function countOfAllNumbersSmallerThanTarget(nums, target) {
  let result = 0;
  nums.forEach(e => {
    if (e < target)
      result++;
  });
  return result;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;