function ToObject(arg) {
  switch (typeof arg) {
    case undefined:
      throw TypeError('Expected object received undefined');
    case null:
      throw TypeError('Expected object received null');
    case 'boolean':
      return Boolean(arg);
    case 'number':
      return Number(arg);
    case 'string':
      return String(arg);
    case 'object':
      return arg;
    case 'symbol':
      return Symbol(arg);
    default:
      return arg;
  }
}
function ToLength(O) {
  return O.length;
}
function HasProperty(O, property) {
  return Object.prototype.hasOwnProperty.call(O, property);
}
function forEach(callbackFn, thisArg) {
  const O = ToObject(this);
  const len = ToLength(O);
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`Expected a function, But received ${typeof callbackFn}`);
  }
  const T = thisArg !== undefined ? thisArg : undefined;
  let k = 0;
  while (k < len) {
    const Pk = k.toString();
    const kPresent = HasProperty(O, Pk);
    if (kPresent) {
      const kValue = O[Pk];
      callbackFn.call(T, kValue, k, O);
    }
    k += 1;
  }
  return undefined;
}
// function map(array, callback) {
// }
function filter(array, callback) {
  const resultArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const result = callback(array[i], i, array);
    if (result) {
      resultArray.push(callback(array[i], i, array));
    }
  }
  return resultArray;
}

function reduce(array, callback, initialValue) {
  let accumulator = initialValue || 0;
  for (let i = 0; i < array.length; i += 1) {
    accumulator = callback(accumulator, i, array);
  }
  return accumulator;
}

export {
  forEach,
  // map,
  filter,
  reduce,
};
