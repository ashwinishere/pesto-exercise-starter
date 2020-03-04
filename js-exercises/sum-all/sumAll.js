function sumAll(arr) {
  const numbersList = arr.sort((a, b) => a - b);
  let currentNumber = numbersList[0];
  const maxNumber = numbersList[1];
  let sum = 0;
  while (currentNumber <= maxNumber) {
    sum += currentNumber;
    currentNumber += 1;
  }
  return sum;
}
export {
  sumAll,
};
