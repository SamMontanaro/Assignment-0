function productOfAnyAmountOfNumbers(...args) {
  let result = 1;
  args.forEach(e => {
    result *= e;
  });
  return result;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;