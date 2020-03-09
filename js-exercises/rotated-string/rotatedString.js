const rotatedString = (originalInput, rotatedValue) => {
  if (originalInput.length !== rotatedValue.length || originalInput === rotatedValue) return false;
  const stringMatchValue = rotatedValue + rotatedValue;
  return stringMatchValue.indexOf(originalInput) !== -1;
};
export {
  rotatedString,
};
