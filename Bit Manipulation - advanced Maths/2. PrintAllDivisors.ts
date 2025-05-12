function printAllDivisors(n: number) {
  let list: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) list.push(i);
  }
  return list;
}

// console.log(printAllDivisors(36));
// console.log(printAllDivisors(37));
// console.log(printAllDivisors(780));

function printAllDivisorsApproach2(n: number) {
  let list: number[] = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      list.push(i);
      if (Math.floor(n / i) !== i) list.push(n / i);
    }
  }
  return list;
}
console.log(printAllDivisorsApproach2(36));
