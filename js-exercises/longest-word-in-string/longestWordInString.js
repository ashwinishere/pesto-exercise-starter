function longestWordInString(inputSentence) {
  const allWordsLengthArray = inputSentence.split(' ').map(word => word.length);
  return Math.max(...allWordsLengthArray);
}
export { longestWordInString };
