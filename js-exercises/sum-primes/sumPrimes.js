function getPrimeNumbers(max) {
  const markedNumbers = [];
  const primeNumbers = [];
  let i = 2;
  while (i <= max) {
    if (!markedNumbers[i]) {
      primeNumbers.push(i);
      for (let j = i * 2; j <= max; j += i) {
        markedNumbers[j] = true;
      }
    }
    i += 1;
  }
  return primeNumbers;
}
function sumPrimes(maximumNumber) {
  return getPrimeNumbers(maximumNumber).reduce((a, b) => a + b, 0);
}
export {
  sumPrimes,
};
