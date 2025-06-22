function beautySum(s: string) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    let obj: { [key: string]: number } = {};
    for (let j = i; j < s.length; j++) {
      obj[s[j]] = (obj[s[j]] || 0) + 1;
      let values = Object.values(obj);
      let max = Math.max(...values);
      let min = Math.min(...values);
      ans += max - min;
    }
  }

  return ans;
}

// console.log(beautySum('aabcb'));
// console.log(beautySum('aabcbaa'));

function beautySumOptimized(s: string) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    let freq = new Array(26).fill(0);

    for (let j = i; j < s.length; j++) {
      let idx = s.charCodeAt(j) - 97;
      freq[idx]++;

      let max = 0;
      let min = Infinity;

      for (let k = 0; k < 26; k++) {
        if (freq[k] > 0) {
          max = Math.max(max, freq[k]);
          min = Math.min(min, freq[k]);
        }
      }

      ans += max - min;
    }
  }

  return ans;
}

console.log(beautySumOptimized('aabcbaa'));
