function numberOfSubstrings(s: string) {
  let count = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let hashArray = new Array(3).fill(0);
    for (let j = i; j < n; j++) {
      hashArray[s.charCodeAt(j) - 97] = 1;
      if (hashArray[0] + hashArray[1] + hashArray[2] === 3) {
        count += 1;
      }
    }
  }
  return count;
}

// console.log(numberOfSubstrings('abcabc'));
// console.log(numberOfSubstrings('aaacb'));
// console.log(numberOfSubstrings('abc'));
// console.log(numberOfSubstrings('ab'));

function numberOfSubStringsOptimal(s: string) {
  let count = 0;
  let n = s.length;
  let lastSeen = [-1, -1, -1];
  for (let i = 0; i < n; i++) {
    lastSeen[s.charCodeAt(i) - 97] = i;
    if (lastSeen[0] !== -1 && lastSeen[1] !== -1 && lastSeen[2] !== -1) {
      count = count + (Math.min(lastSeen[0], lastSeen[1], lastSeen[2]) + 1);
    }
  }

  return count;
}

// console.log(numberOfSubStringsOptimal('abcabc'));
console.log(numberOfSubStringsOptimal('bbacba'));
