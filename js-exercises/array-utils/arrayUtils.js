function forEach(array, callback) {
  for (let i = 0; i < array.length; i + 1) {
    callback(array[i], i, array);
  }
}
function map(array, callback) {
  const resultArray = [];
  for (let i = 0; i < array.length; i + 1) {
    resultArray.push(callback(array[i], i, array));
  }
  return resultArray;
}
function filter(array, callback) {
  const resultArray = [];
  for (let i = 0; i < array.length; i + 1) {
    const result = callback(array[i], i, array);
    if (result) {
      resultArray.push(callback(array[i], i, array));
    }
  }
  return resultArray;
}

function reduce(array, callback, initialValue) {
  let accumulator = (initialValue || 0);
  for (let i = 0; i < array.length; i + 1) {
    accumulator = callback(array[i], i, array);
  }
  return accumulator;
}
export {
  forEach,
  map,
  filter,
  reduce,
};
