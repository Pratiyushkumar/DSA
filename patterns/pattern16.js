/**
A 
B B
C C C
D D D D
E E E E E
F F F F F F
 */

function pattern16(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    let char = String.fromCharCode(65 + i);
    for (let j = 0; j <= i; j++) {
      temp += char + ' ';
    }
    console.log(temp);
    temp = '';
  }
}

pattern16(6);
