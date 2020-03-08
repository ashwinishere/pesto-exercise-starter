const sumEvenArgs = (...inputArray) => inputArray.filter(value => value % 2 === 0)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
export { sumEvenArgs };
