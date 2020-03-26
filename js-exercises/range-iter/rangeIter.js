function* range(lb, ub) {
  for (let index = lb; index <= ub; index += 1) {
    yield index;
  }
}

function rangeIter(lb, ub) {
  if (typeof lb !== 'number' || typeof ub !== 'number') throw TypeError(`Expected number , recived ${typeof lb}`);
  if (lb > ub) return [];
  if (lb === ub) return [ub];
  const result = [];
  for (const index of range(lb, ub)) {
    result.push(index);
  }
  return result;
}
export {
  rangeIter,
};
