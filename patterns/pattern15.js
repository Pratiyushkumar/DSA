/**
A B C D E F
A B C D E 
A B C D
A B C
A B
A
 */

function pattern15(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      temp += String.fromCharCode(65 + j) + ' ';
    }
    console.log(temp);
    temp = '';
  }
}

pattern15(6);
