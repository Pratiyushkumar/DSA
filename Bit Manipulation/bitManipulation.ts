function convertToBinary(n: number) {
  let res = '';
  while (n > 0) {
    if (n % 2 === 1) res = 1 + res;
    else res = 0 + res;
    n = Math.floor(n / 2);
  }

  return res;
}

// console.log(convertToBinary(13));

function convertToDecimal(s: string) {
  let len = s.length;
  let num = 0;
  for (let i = len - 1; i >= 0; i--) {
    num += Number(s[i]) * Math.pow(2, len - i - 1);
  }
  return num;
}

// console.log(convertToDecimal('10001'));
// console.log(convertToDecimal('110'));
// console.log(convertToDecimal('1'));
// console.log(convertToDecimal('100101011'));

function convertToDecimalAnother(s: string) {
  let powOf2 = 1;
  let sum = 0;
  let len = s.length;

  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === '1') {
      sum = sum + powOf2;
    }
    powOf2 *= 2;
  }
  return sum;
}

console.log(convertToDecimalAnother('10001'));
console.log(convertToDecimalAnother('110'));
console.log(convertToDecimalAnother('1'));
console.log(convertToDecimalAnother('100101011'));
