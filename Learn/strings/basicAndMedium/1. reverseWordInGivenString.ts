function reverseWords(s: string) {
  let splittedString = s.split(' ');
  let ans: string = '';
  for (let i = splittedString.length - 1; i >= 0; i--) {
    if (splittedString[i] !== '') {
      ans += splittedString[i] + ' ';
    }
  }

  return ans.trim();
}

// console.log(reverseWords('the sky is blue'));
// console.log(reverseWords('  hello world  '));

function reverseWordsOptimized(s: string) {
  let n = s.length;
  let result: string[] = [];
  let i = n - 1;

  while (i >= 0) {
    while (i >= 0 && s[i] === ' ') i--;

    if (i < 0) break;

    let end = i;

    while (i >= 0 && s[i] !== ' ') i--;

    let start = i + 1;

    let word = '';
    for (let i = start; i <= end; i++) {
      word += s[i];
    }
    result.push(word);
  }
  console.log('result array', result);
  let final = '';
  for (let i = 0; i < result.length; i++) {
    final += result[i] + ' ';
  }

  return final.trim();
}

// console.log(reverseWordsOptimized('    jungle the  to     welcome     '));
console.log(reverseWordsOptimized('the sky is blue'));
