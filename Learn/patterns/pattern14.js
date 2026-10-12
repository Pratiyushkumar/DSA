/**
A
A B
A B C
A B C D
A B C D E
A B C D E F
 */

function pattern14(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      temp += String.fromCharCode(65 + j) + ' ';
    }
    console.log(temp);
    temp = '';
  }
}

pattern14(6);
