function chunkArrayInGroups(array, chunkSize) {
  return array
    .reduce((previousValue, _, i) => ((i % chunkSize)
      ? previousValue
      : [...previousValue, array.slice(i, i + chunkSize)]),
    []);
}
export {
  chunkArrayInGroups,
};
