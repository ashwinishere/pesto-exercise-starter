import { isString } from 'util';

function abbreviateString(inputString) {
  if (!isString(inputString)) throw new Error(`Expected 'String' but got ${typeof inputString}`);
  const inputStringArray = inputString.split(' ');
  return `${inputStringArray[0]} ${inputStringArray[inputStringArray.length - 1].charAt(0).toUpperCase()}.`;
}
export {
  abbreviateString,
};
