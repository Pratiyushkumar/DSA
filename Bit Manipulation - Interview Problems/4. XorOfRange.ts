// find XOR from 1 to N
function Xor1ToN(n: number) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans ^= i;
  }
  return ans;
}

// console.log(Xor1ToN(7));
// console.log(Xor1ToN(9));

function Xor1ToNOptimize(n: number) {
  if (n % 4 === 1) return 1;
  else if (n % 4 === 2) return n + 1;
  else if (n % 4 === 3) return 0;
  else return n;
}
// console.log(Xor1ToNOptimize(9));
// console.log(Xor1ToNOptimize(10));
// console.log(Xor1ToNOptimize(11));
// console.log(Xor1ToNOptimize(12));

//----------------------------------------
// find XOR from L to R

function xorOperation(l: number, r: number) {
  let ans = 0;
  for (let i = l; i <= r; i++) {
    ans = ans ^ i;
  }
  return ans;
}
// console.log(xorOperation(4, 8));

function xorOperationOptimize(l: number, r: number) {
  return Xor1ToNOptimize(l - 1) ^ Xor1ToNOptimize(r);
}
console.log(xorOperationOptimize(4, 8));
