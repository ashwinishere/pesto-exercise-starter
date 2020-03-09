function cacheFunction(callback) {
  const cacheArguments = {};
  return function (arg) {
    if (!cacheArguments[arg]) {
      cacheArguments[arg] = callback(arg);
    }
    return cacheArguments[arg];
  };
}
export {
  cacheFunction,
};
