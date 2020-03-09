function flipArgs(callbackFunction) {
  return function (...args) {
    return callbackFunction(args.reverse());
  };
}

export {
  flipArgs,
};
