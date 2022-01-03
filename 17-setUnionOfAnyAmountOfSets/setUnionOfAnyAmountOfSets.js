function setUnionOfAnyAmountOfSets(...args) {
  let result = new Set;

  for (const arg of args) {
    for (const num of arg) {
      result.add(num);
    }
  }

  return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;