function freqSort(inputArray) {
  const letterFrequencyMap = {};
  inputArray.forEach(letter => {
    letterFrequencyMap[letter] = letterFrequencyMap[letter] ? letterFrequencyMap[letter] + 1 : 1;
  });
  const letterFrequencyMapSorted = Object.keys(letterFrequencyMap).sort(
    // eslint-disable-next-line function-paren-newline
    (a, b) => letterFrequencyMap[b] - letterFrequencyMap[a]);
  return letterFrequencyMapSorted;
}

export {
  freqSort,
};
