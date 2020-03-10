function dropElements(elements, predicate) {
  for (let index = 0; index < elements.length; index += 1) {
    if (predicate(elements[index])) {
      return elements.slice(index);
    }
  }
  return [];
}
export {
  dropElements,
};
