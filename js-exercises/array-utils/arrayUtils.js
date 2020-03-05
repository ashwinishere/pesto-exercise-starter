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
function filter() {

}

function reduce() {

}
export {
  forEach,
  map,
  filter,
  reduce,
};
