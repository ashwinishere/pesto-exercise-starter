// first one big, second one small , same
function leastCommonMultiple(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new TypeError(`Expected input type number but received ${typeof num1} and ${typeof num2}`);
  if (num1 <= 0 || num2 <= 0) throw new Error('Input must be positive');
  if (num1 === num2) return num1;
  const largeNumber = Math.max(num1, num2);
  const smallerNumber = Math.min(num1, num2);
  let i = largeNumber;
  while (i % smallerNumber !== 0) {
    i += largeNumber;
  }
  return i;
}
export {
  leastCommonMultiple,
};
