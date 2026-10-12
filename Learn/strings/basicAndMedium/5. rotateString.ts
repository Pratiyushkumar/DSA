function rotateString(s: string, goal: string) {
  let n = s.length;
  let count = 0;
  let i = 1;
  let tempStr = '';
  while (count < n) {
    let leftChar = s[0];
    while (i < n) {
      tempStr += s[i];
      i++;
    }
    tempStr += leftChar;
    count++;
    if (tempStr === goal) {
      return true;
    }
    s = tempStr;
    tempStr = '';
    i = 1;
  }

  return false;
}

// console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));
