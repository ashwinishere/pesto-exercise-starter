function getAlternatingDeletionCount(word) {
  let deleteCount = 0;
  word.split('').forEach((letter, index) => {
    if (!word[index + 1]) return;
    if (letter === word[index + 1]) {
      deleteCount += 1;
    }
  });
  return deleteCount;
}

function alternatingCharacters(inputArray) {
  const result = [];
  inputArray.forEach(word => {
    const deletionCount = getAlternatingDeletionCount(word);
    result.push(deletionCount);
  });
  return result;
}
export {
  alternatingCharacters,
};
