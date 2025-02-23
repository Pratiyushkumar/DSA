function lengthOfLongestSubstring(s: string) {
  let n = s.length;
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    // O(n)
    let substr = '';
    for (let j = i; j < n; j++) {
      //O(n)
      if (substr.includes(s[j])) {
        // this will take O(k) TC where k <= n
        break;
      }
      substr += s[j];
    }
    maxLength = Math.max(maxLength, substr.length);
  }

  return maxLength;
}

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('cadbzabcd'));
// console.log(lengthOfLongestSubstring('bbbbbbb'));
// TC - O(n^2)*O(K) = ~O(n^3)

function lengthOfLongestSubstring2(s: string) {
  let maxLength = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let hashedArray = new Array(256).fill(0);
    for (let j = i; j < n; j++) {
      if (hashedArray[s.charCodeAt(j)] === 1) {
        break;
      }
      hashedArray[s.charCodeAt(j)] = 1;
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }
  return maxLength;
}

// console.log(lengthOfLongestSubstring2('abcabcbb'));
// console.log(lengthOfLongestSubstring2('cadbzabcd'));
// console.log(lengthOfLongestSubstring2('bbbbbbb'));

function lengthOfLongestSubstringOptimized(s: string) {
  let map = new Map();
  let maxLength = 0;
  let n = s.length;
  let l = 0;
  let r = 0;
  while (r < n) {
    if (map.has(s[r])) {
      if (map.get(s[r]) > l) {
        l = map.get(s[r]) + 1;
      }
    }
    map.set(s[r], r);
    maxLength = Math.max(maxLength, r - l + 1);
    r++;
  }
  return maxLength;
}

// console.log(lengthOfLongestSubstring2('abcabcbb'));
// console.log(lengthOfLongestSubstringOptimized('cadbzabcd'));
// console.log(lengthOfLongestSubstring2('bbbbbbb'));
