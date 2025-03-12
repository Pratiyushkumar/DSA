function checkithBit(n: number, i: number) {
  let res = '';
  while (n > 0) {
    if (n % 2 === 0) res = 1 + res;
    else res = 0 + res;
    n = Math.floor(n / 2);
  }

  console.log(res);

  for (let j = res.length - 1; j >= 0; j--) {
    if (res[i] === '1') {
      return true;
    }
  }

  return false;
}

// console.log(checkithBit(13, 2));

// optimal approach by left shift
function checkithBitUsingLeftShift(n: number, i: number) {
  if ((n & (i << 1)) !== 0) {
    return true;
  }
  return false;
}

console.log(checkithBitUsingLeftShift(13, 2));

function checkithBitUsingRightShift(n: number, i: number) {
  if (((n >> i) & 1) !== 0) {
    return true;
  }
  return false;
}

console.log(checkithBitUsingRightShift(13, 2));
