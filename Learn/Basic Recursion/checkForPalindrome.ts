function checkPalindromeUsingBuiltInMethod(str: string) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// console.log(checkPalindromeUsingBuiltInMethod('ABCDCBA'));
// console.log(checkPalindromeUsingBuiltInMethod('TAKE U FORWARD'));

function checkPalindromeTwoPointerTechnique(str: string): boolean {
  let start: number = 0;
  let end: number = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

// console.log(checkPalindromeTwoPointerTechnique('ABCDCBA'));
// console.log(checkPalindromeTwoPointerTechnique('TAKE U FORWARD'));

function checkPalindromeRecursively(
  str: string,
  start: number,
  end: number
): boolean {
  if (start >= str.length / 2) return true;

  if (str[start] !== str[end]) return false;

  return checkPalindromeRecursively(str, start + 1, end - 1);
}
let str = 'ABCDCBA';
console.log(checkPalindromeRecursively(str, 0, str.length - 1));
