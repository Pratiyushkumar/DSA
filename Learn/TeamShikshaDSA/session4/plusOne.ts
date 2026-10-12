function plusOne(digits: number[]) {
  let n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    let sum = digits[i] + 1;
    let rem = sum % 10;
    digits[i] = rem;
    if (sum <= 9) {
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
}

// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([4, 3, 2, 9, 9]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
