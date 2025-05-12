function primeFactorization(n: number) {
  let list: number[] = [];
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      while (n % i === 0) {
        list.push(i);
        n = Math.floor(n / i);
      }
    }
  }
  if (n !== 1) list.push(n);
  return list;
}

function primeFactors(queries: number[]) {
  let ans: number[][] = [];
  for (let i = 0; i < queries.length; i++) {
    let list = primeFactorization(queries[i]);
    ans.push(list);
  }
  return ans;
}

// console.log(primeFactors([2, 3, 4, 5, 6]));
// console.log(primeFactors([7, 12, 18]));

//=========================================
//OPTIMIZED WAY
let MAXN = Math.pow(10, 5);
let spf = new Array(MAXN + 1).fill(1);

function Sieve() {
  for (let i = 2; i <= MAXN; i++) {
    if (spf[i] === 1) {
      for (let j = i; j <= MAXN; j += i) {
        if (spf[j] === 1) {
          spf[j] = i;
        }
      }
    }
  }
}

Sieve();
function getFactoization(n: number) {
  let ans: number[] = [];
  while (n !== 1) {
    ans.push(spf[n]);
    n = Math.floor(n / spf[n]);
  }

  return ans;
}

console.log(getFactoization(30));
console.log(getFactoization(16));
console.log(getFactoization(17));
