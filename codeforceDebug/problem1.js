function longestSubString(str) {
  let maxLength = 0;
  let n = str.length;
  for (let i = 0; i < n; i++) {
    let hashArray = new Array(256).fill(0);
    for (let j = i; j < n; j++) {
      if (hashArray[str.charCodeAt(j)] === 1) {
        break;
      }
      hashArray[str.charCodeAt(j)]++;
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }
  return maxLength;
}

console.log(longestSubString('cadbzabcd'));
