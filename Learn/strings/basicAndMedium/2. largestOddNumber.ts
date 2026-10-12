function largestOddNumber(num: string) {
  let strArray: string[] = num.split('');
  let strAns = '';
  for (let i = 0; i < strArray.length; i++) {
    if (Number(strArray[i]) % 2 !== 0) {
      strAns = num.substring(0, i + 1);
    }
  }

  return strAns;
}

// console.log(largestOddNumber('4206'));
// console.log(largestOddNumber('52'));
// console.log(largestOddNumber('5234721'));

function largestOddNumberOptimized(num: string) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2 !== 0) {
      return num.substring(0, i + 1);
    }
  }

  return '';
}
console.log(largestOddNumberOptimized('52'));
console.log(largestOddNumberOptimized('4206'));
console.log(largestOddNumberOptimized('5234721'));
