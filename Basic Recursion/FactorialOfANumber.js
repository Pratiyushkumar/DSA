//iterative approach
function FactorialOfNumber(n) {
  let multiplication = 1;

  if (n === 0 || n === 1) {
    return multiplication;
  }

  for (let i = 2; i <= n; i++) {
    multiplication *= i;
  }

  return multiplication;
}

console.log(FactorialOfNumber(5));

// recursive approach
function recursiveApproach(n){
  if(n === 0){
    return 1;
  }
  return n*recursiveApproach((n-1));
}

console.log(recursiveApproach(7));