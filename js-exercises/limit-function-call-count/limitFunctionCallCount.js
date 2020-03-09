let callCount = 0;
const limitFunctionCallCount = (callback, callLimit) => {
  callCount += 1;
  return function (...args) {
    if (callCount > callLimit) return null;
    callCount += 1;
    return callback(...args);
  };
};

export {
  limitFunctionCallCount,
};
