function addBigInt(input1, input2) {
  let string1 = input1;
  let string2 = input2;
  let sum = '';
  const string1Length = string1.length;
  const string2Length = string2.length;
  if (string2Length > string1Length) {
    const temp = string2;
    string2 = string1;
    string1 = temp;
  }
  let carry = 0;
  let a;
  let b;
  let temp;
  let digitSum;
  for (let i = 0; i < string1.length; i += 1) {
    a = parseInt(string1.charAt(string1.length - 1 - i), 10);
    b = parseInt(string2.charAt(string2.length - 1 - i), 10);
    b = (b) || 0;
    temp = (carry + a + b).toString();
    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1), 10);
    carry = (carry) || 0;
    sum = (i === string1.length - 1) ? temp + sum : digitSum + sum;
  }

  return sum;
}
function addBigIntegers(intString) {
  const integerArray = intString.split('\n');
  return integerArray.reduce((accumulator, currentValue) => {
    const result = addBigInt(String(accumulator), currentValue);
    return result;
  }, 0);
}
export {
  addBigIntegers,
};
