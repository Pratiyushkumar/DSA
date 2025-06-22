function frequencySort(s: string) {
  let freq: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] !== undefined) {
      freq[s[i]]++;
    } else {
      freq[s[i]] = 1;
    }
  }

  console.log('frequency***', freq);

  let sortedKeys = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
  console.log('sorted keys***', sortedKeys);
  let result = '';

  for (let i = 0; i < sortedKeys.length; i++) {
    result += sortedKeys[i].repeat(freq[sortedKeys[i]]);
  }

  return result;
}

// console.log(frequencySort('tree'));
// console.log(frequencySort('cccaaa'));
// console.log(frequencySort('Aabb'));

function frequencySortOptimized(s: string) {
  const freq: { [key: string]: number } = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const bucket: string[][] = new Array(s.length + 1).fill(null).map(() => []);

  for (const char in freq) {
    bucket[freq[char]].push(char);
  }

  let result = '';
  for (let i = bucket.length - 1; i > 0; i--) {
    for (let char of bucket[i]) {
      result += char.repeat(i);
    }
  }

  return result;
}

console.log(frequencySortOptimized('tree'));
