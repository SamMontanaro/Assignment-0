function frequencyCounter(word) {
  let freq = {};
  word.split("").forEach(e => {
    if (freq[e] !== undefined)
      freq[e] += 1;
    else
      freq[e] = 1;
  });
  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;