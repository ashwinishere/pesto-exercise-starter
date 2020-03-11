function isBrace(char) {
  return ['{', '}', '[', ']', '(', ')'].includes(char);
}

function balancedBraces(inputString) {
  const bracesStorage = [];
  const bracesListMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  inputString.split('').forEach(char => {
    if (!isBrace(char)) return;
    if (char in bracesListMap) {
      bracesStorage.push(char);
    } else if (char === bracesListMap[bracesStorage[bracesStorage.length - 1]]) {
      bracesStorage.pop();
    }
  });
  return bracesStorage.length === 0;
}
export {
  balancedBraces,
};
