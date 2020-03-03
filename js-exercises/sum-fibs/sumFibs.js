function sumFibs(maxLimit) {
  let result = 0;
  let prevNumber = 0;
  let currentNumber = 1;
  while (currentNumber <= maxLimit) {
    if (currentNumber % 2 !== 0) result += currentNumber;
    currentNumber += prevNumber;
    prevNumber = currentNumber - prevNumber;
  }
  return result;
}
export {
  sumFibs,
};
