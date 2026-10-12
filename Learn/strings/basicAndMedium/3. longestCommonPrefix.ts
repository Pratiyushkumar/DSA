function longestCommonPrefix(strs: string[]) {
  let sortedStr = strs.sort();
  console.log('sortedStr', sortedStr);
  let first = sortedStr[0];
  let last = sortedStr[sortedStr.length - 1];
  let minLength = Math.min(first.length, last.length);
  let i = 0;

  while (i < minLength && first[i] === last[i]) {
    i++;
  }

  console.log('value of i', i);

  return first.substring(0, i);
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
