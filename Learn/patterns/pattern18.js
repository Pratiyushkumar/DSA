/**
F
E F
D E F
C D E F
B C D E F
A B C D E F
 */

function pattern18(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    let charCode = 65 + n - 1 - i;
    for (let j = 0; j <= i; j++) {
      temp += String.fromCharCode(charCode) + ' ';
      charCode++;
    }
    console.log(temp);
    temp = '';
  }
}

// pattern18(6ṇ);
pattern18(3);
