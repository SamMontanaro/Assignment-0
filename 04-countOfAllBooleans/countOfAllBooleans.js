function countOfAllBooleans(arr) {
  let result = 0;
  arr.forEach(e => {
    if (e === true || e === false)
      result++;
  });
  return result;
}

// Do not edit this line;
module.exports = countOfAllBooleans;