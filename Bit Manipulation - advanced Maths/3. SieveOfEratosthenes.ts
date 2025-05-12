function SOE(n: number) {
  let primeArray = new Array(n + 1).fill(1);

  for (let i = 2; i <= n; i++) {
    if (primeArray[i] === 1) {
      for (let j = 2 * i; j <= n; j += i) {
        primeArray[j] = 0;
      }
    }
  }
  let ans: number[] = [];
  for (let i = 2; i < primeArray.length; i++) {
    if (primeArray[i] === 1) ans.push(i);
  }
  return ans;
}

// console.log(SOE(30));
// console.log(SOE(10));

function SOEOptimization(n: number) {
  let primeArray = new Array(n + 1).fill(1);

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (primeArray[i] === 1) {
      for (let j = i * i; j <= n; j += i) {
        primeArray[j] = 0;
      }
    }
  }
  let ans: number[] = [];
  for (let i = 2; i < primeArray.length; i++) {
    if (primeArray[i] === 1) ans.push(i);
  }
  return ans;
}

console.log(SOEOptimization(10));
