function deepCopy(obj) {
  const resultObj = {};
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    if (obj[key] === null || typeof obj[key] !== 'object') {
      resultObj[key] = obj[key];
    } else {
      resultObj[key] = { ...obj[key] };
    }
  }
  return resultObj;
}

const deepCopyObject = objToCopy => {
  if (objToCopy === null || typeof objToCopy !== 'object') return objToCopy;
  return deepCopy(objToCopy);
};
export {
  deepCopyObject,
};
