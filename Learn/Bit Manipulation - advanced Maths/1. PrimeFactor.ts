// function isPrime(n: number) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(5));
// console.log(isPrime(60));

function isPrime(n: number) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primeFactor(n: number) {
  let list: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      if (isPrime(i)) {
        list.push(i);
      }
    }
  }
  return list;
}

// console.log(primeFactor(60));

function primeFactorBetter(n: number) {
  let list: number[] = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (isPrime(i)) list.push(i);
      if (n / i !== i) {
        if (isPrime(n / i)) list.push(n / i);
      }
    }
  }
  return list;
}

// console.log(primeFactorBetter(60));
// console.log(primeFactorBetter(35));
// console.log(primeFactorBetter(37));

function primeFactorOptimized(n: number) {
  let list: number[] = [];

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      list.push(i);
      while (n % i === 0) {
        n = Math.floor(n / i);
      }
    }
  }

  if (n !== 1) list.push(n);
  return list;
}

console.log(primeFactorOptimized(60));
console.log(primeFactorOptimized(35));
console.log(primeFactorOptimized(37));
