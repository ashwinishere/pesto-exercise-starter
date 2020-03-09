const argsString = (message, replacementWordsList = []) => {
  const messageArray = message.split(' ');
  let replaceIndex = 0;
  return messageArray.map(word => {
    let currentWord = word;
    if (word.includes('{}')) {
      currentWord = word.replace('{}', replacementWordsList[replaceIndex]);
      replaceIndex += 1;
    }
    return currentWord;
  }).join(' ');
};
export {
  argsString,
};
