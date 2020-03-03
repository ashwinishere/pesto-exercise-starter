function sumAll(arr) {
  const numbers = arr.sort((a, b) => a - b);
  let i = numbers[0];
  const max = numbers[1];
  let sum = 0;
  while (i <= max) {
    sum += i;
    i += 1;
  }
  return sum;
}
export {
  sumAll,
};
