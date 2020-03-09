// Write your own test cases,
import {
  filter,
  forEach,
  reduce,
  map,
} from './arrayUtils';

describe('arrayUtils', () => {
  test('forEach should iterate', () => {
    const log = jest.fn();
    forEach([1, 2, 3, 4], log);
    expect(log).toHaveBeenCalledTimes(4);
  });

  test('Map should return array', () => {
    const mappedArray = map([1, 2, 3, 4], (element) => 2 * element);
    expect(mappedArray).toEqual([2, 4, 6, 8]);
  });

  test('filter should return filtered array', () => {
    const filteredArray = filter(['banana', 'apple', 'monkey', 'orange'], (element) => element !== 'monkey');
    expect(filteredArray).toEqual(['banana', 'apple', 'orange']);
  });

  test('reduce should return an output', () => {
    const result = reduce([1, 2, 3, 4], (initialValue, element) => initialValue + element, 0);
    expect(result).toBe(10);
  });
});
