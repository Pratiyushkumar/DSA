/**
1
01
101
0101
10101
010101
 */

function pattern11(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          temp += '1';
        } else {
          temp += '0';
        }
      } else {
        if (j % 2 === 0) {
          temp += '0';
        } else {
          temp += '1';
        }
      }
    }
    console.log(temp);
    temp = '';
  }
}

pattern11(5);
