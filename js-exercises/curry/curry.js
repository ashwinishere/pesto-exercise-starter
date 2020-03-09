function curry(originalFunction, initialParams = []) {
  return (...nextParams) => {
    const curriedFunction = (params) => {
      if (params.length === originalFunction.length) {
        return originalFunction(...params);
      }

      return curry(originalFunction, params);
    };

    return curriedFunction([...initialParams, ...nextParams]);
  };
}

export {
  curry,
};
