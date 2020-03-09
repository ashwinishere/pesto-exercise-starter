function rot13(encodedString) {
  return encodedString.split('').map(letter => {
    const charCode = letter.charCodeAt(0);
    if (charCode < 65 || charCode > 90) {
      return letter;
    } if (charCode < 78) {
      return String.fromCharCode(charCode + 13);
    }
    return String.fromCharCode(charCode - 13);
  }).join('');
}

export {
  rot13,
};
