function diffArray(inputArray1, inputArray2) {
  const uniqueValueFromArray1 = inputArray1.filter((value) => inputArray2.indexOf(value) === -1);
  const uniqueValueFromArray2 = inputArray2.filter((value) => inputArray1.indexOf(value) === -1);
  return uniqueValueFromArray1.concat(uniqueValueFromArray2);
}
export {
  diffArray,
};
