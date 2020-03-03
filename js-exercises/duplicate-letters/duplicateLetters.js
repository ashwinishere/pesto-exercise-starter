
function duplicateLetters(...args) {
  const word = args[0];
  const wordCount = {};
  for (const key of word) {
    wordCount[key] = wordCount[key] ? wordCount[key] + 1 : 1;
  }
  const arr = Object.values(wordCount);
  return Math.max(...arr) === 1 ? false : Math.max(...arr);
}
export {
  duplicateLetters,
};
