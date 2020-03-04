
function duplicateLetters(word) {
  const wordCountMap = {};
  for (const letter of word) {
    wordCountMap[letter] = wordCountMap[letter] ? wordCountMap[letter] + 1 : 1;
  }
  const wordCountArray = Object.values(wordCountMap);
  return Math.max(...wordCountArray) === 1 ? false : Math.max(...wordCountArray);
}
export {
  duplicateLetters,
};
