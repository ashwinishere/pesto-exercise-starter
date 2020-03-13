
function updateObject(replaceIndex, replaceValue, inputArray) {
  if (replaceIndex > inputArray.length || replaceIndex < inputArray.length * -1) return inputArray;
  const cloneArray = inputArray.slice();
  cloneArray.splice(replaceIndex, 1, replaceValue);
  return cloneArray;
}
export {
  updateObject,
};
