function sumOfAllEvenNumbers(nums) {
  let result = 0;
  nums.forEach(e => {
    if (e % 2 == 0)
      result++;
  });
  return result;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;