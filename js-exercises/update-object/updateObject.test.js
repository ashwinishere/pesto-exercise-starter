import { updateObject } from './updateObject';

describe('updateObject', () => {
  test('is working with valid input', () => {
    expect(updateObject(1, 99, [1, 2, 3])).toStrictEqual([1, 99, 3]);
    expect(updateObject(2, 'hello', [1, 2, 3])).toStrictEqual([1, 2, 'hello']);
    expect(updateObject(1, '_', ['a', 'b', 'c'])).toStrictEqual(['a', '_', 'c']);
    expect(updateObject(-1, '_', ['a', 'b', 'c'])).toStrictEqual(['a', 'b', '_']);
    expect(updateObject(-1, 'a', ['b', 'c'])).toStrictEqual(['b', 'a']);
    expect(updateObject(0, 'a', ['b', 'c'])).toStrictEqual(['a', 'c']);
    expect(updateObject(1, null, ['b', 'c'])).toStrictEqual(['b', null]);
  });
  test('is working with out of bound index', () => {
    expect(updateObject(99, 99, [1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
    expect(updateObject(-22, 'hello', [1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
});
