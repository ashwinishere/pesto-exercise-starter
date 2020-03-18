const compose = (...fns) => x => fns.reduce((v, f) => f(v), x);
const map = mapFn => data => data.map(mapFn);
const toEntries = Object.entries;
const { fromEntries } = Object;


function objectInvert(input) {
  const reverseEntry = map(el => el.reverse());
  return compose(toEntries, reverseEntry, fromEntries)(input);
}
export {
  objectInvert,
};
