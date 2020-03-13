import {
  leastCommonMultiple,
} from './leastCommonMultiple';

describe('leastCommonMultiple', () => {
  test('is giving correct output ', () => {
    expect(leastCommonMultiple(6, 21)).toStrictEqual(42);
  });
  test('is giving correct output ', () => {
    expect(leastCommonMultiple(12, 124)).toStrictEqual(372);
  });
  test('is giving correct output for same numbers', () => {
    expect(leastCommonMultiple(6, 6)).toStrictEqual(6);
  });
  test('is throwing type error ', () => {
    expect(() => leastCommonMultiple(6, 'hi')).toThrow();
    expect(() => leastCommonMultiple(false, 12)).toThrow();
  });
  test('is throwing negative error ', () => {
    expect(() => leastCommonMultiple(-6, 21)).toThrow();
    expect(() => leastCommonMultiple(6, -21)).toThrow();
    expect(() => leastCommonMultiple(-6, -21)).toThrow();
  });
});
