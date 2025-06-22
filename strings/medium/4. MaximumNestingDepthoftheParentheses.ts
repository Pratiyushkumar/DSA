function maxDepth(s: string) {
  let res = 0;
  let curr = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      curr++;
      res = Math.max(res, curr);
    } else if (s[i] === ')') {
      curr--;
    }
  }
  return res;
}

// console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
// console.log(maxDepth('(1)+((2))+(((3)))'));
// console.log(maxDepth('()(())((()()))'));

function maxDepthAnotherApproach(s: string) {
  let count = 0;
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      if (count < stack.length) {
        count = stack.length;
      }
      stack.pop();
    }
  }

  return count;
}

console.log(maxDepthAnotherApproach('(1+(2*3)+((8)/4))+1'));
console.log(maxDepthAnotherApproach('(1)+((2))+(((3)))'));
console.log(maxDepthAnotherApproach('()(())((()()))'));
