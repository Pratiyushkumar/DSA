function removeOuterParentheses(s: string) {
  let result = '';
  let depth = 0;

  for (let char of s) {
    if (char === '(') {
      if (depth > 0) {
        result += char;
      }
      depth++;
    } else if (char === ')') {
      depth--;
      if (depth > 0) {
        result += char;
      }
    }
  }
  return result;
}

console.log(removeOuterParentheses('(()())(())(()(()))'));
