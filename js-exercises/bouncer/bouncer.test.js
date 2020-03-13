import {
  bouncer,
} from './bouncer';

describe('bouncer', () => {
  test('is removing all falsy values ', () => {
    expect(bouncer([1, 1, 1, 1, 1])).toStrictEqual([1, 1, 1, 1, 1]);
    expect(bouncer([null, 0, NaN, '', ''])).toStrictEqual([]);
    expect(bouncer([])).toStrictEqual([]);
    expect(bouncer(['string', 0, 'hello', null, 'world'])).toStrictEqual(['string', 'hello', 'world']);
  });
  test('is throwing type error ', () => {
    expect(() => bouncer(6)).toThrow();
    expect(() => bouncer('hi')).toThrow();
  });
});
