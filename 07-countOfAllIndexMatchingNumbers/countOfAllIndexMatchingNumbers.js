function countOfAllIndexMatchingNumbers(nums) {
  let result = 0;
  nums.map(function(num, index){
    if (num == index)
      result++;
  });
  return result;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;