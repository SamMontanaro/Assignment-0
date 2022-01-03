function countOfAllBooleansAndStrings(arr) {
  let result = 0;
  arr.forEach(e => {
    if (typeof(e) === "string" || typeof(e) === "boolean")
      result++;
  });
  return result;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;