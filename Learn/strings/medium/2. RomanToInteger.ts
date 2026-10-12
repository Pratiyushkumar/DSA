function romanToInt(s: string) {
  let sum = 0;
  let symbolTable: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    if (symbolTable[s[i]] < symbolTable[s[i + 1]]) {
      sum += symbolTable[s[i + 1]] - symbolTable[s[i]];
      i += 1;
    } else {
      sum += symbolTable[s[i]];
    }
  }

  return sum;
}

console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('MMMCMXCIX'));
console.log(romanToInt('IV'));
