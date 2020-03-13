/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(permutationOptions, level) {
  const result = [];
  if (permutationOptions.length === 1) {
    return [...permutationOptions];
  }
  const firstPermutationOption = permutationOptions[0];
  const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1), level);
  smallerPermutations.forEach((smallestPermutation) => {
    for (let index = 0; index <= smallestPermutation.length; index += 1) {
      const permutationFirstValue = smallestPermutation.slice(0, index);
      const permutationLastValue = smallestPermutation.slice(index);
      result.push(permutationFirstValue.concat([...firstPermutationOption], permutationLastValue));
    }
  });
  return result;
}
export {
  permutateWithoutRepetitions,
};
