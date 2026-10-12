function isAnagram(s: string, t: string) {
  let sLength = s.length;
  let tlength = t.length;

  if (sLength !== tlength) {
    return false;
  }
  let sortedS = s
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
  let sortedT = t
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
  let i = 0;
  let j = 0;

  while (i < sLength && j < tlength) {
    if (sortedS[i] !== sortedT[j]) {
      return false;
    }
    i++;
    j++;
  }

  return true;
}

// console.log(isAnagram('integer', 'tegerni'));
// console.log(isAnagram('rules', 'lesrt'));

function isAnagramOptimized(s: string, t: string) {
  if (s.length !== t.length) {
    return false;
  }
  let hashArray = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let charIndex = s.charCodeAt(i) - 'a'.charCodeAt(0);
    if (hashArray[charIndex] !== 0) {
      hashArray[charIndex]++;
    } else {
      hashArray[charIndex] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let charIndex = t.charCodeAt(i) - 'a'.charCodeAt(0);
    if (hashArray[charIndex] > 0) {
      hashArray[charIndex]--;
    }
  }

  for (let i = 0; i < hashArray.length; i++) {
    if (hashArray[i] > 0) {
      return false;
    }
  }

  return true;
}
console.log(isAnagramOptimized('integer', 'tegerni'));
console.log(isAnagramOptimized('rat', 'car'));
