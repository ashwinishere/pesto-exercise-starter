function bouncer(array) {
  if (!Array.isArray(array)) throw new TypeError(`Expected Array but received ${typeof array}`);
  return array.filter(value => Boolean(value));
}
export { bouncer };
