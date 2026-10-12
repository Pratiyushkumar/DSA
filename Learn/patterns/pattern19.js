/**
 ******
 **  **
 *    *
 *    *
 **  **
 ******
 */

function pattern19(n) {
  let temp = '';
  let space = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      temp += '*';
    }
    for (let j = 0; j <= space; j++) {
      temp += ' ';
    }
    for (let j = 0; j < n - i; j++) {
      temp += '*';
    }
    console.log(temp);
    temp = '';
    space += 2;
  }

  let temp2 = '';
  let sapce = n + 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      temp2 += '*';
    }
    for (let j = 0; j <= sapce; j++) {
      temp2 += ' ';
    }
    for (let j = 0; j < i + 1; j++) {
      temp2 += '*';
    }
    console.log(temp2);
    temp2 = '';
    sapce -= 2;
  }
}

pattern19(3);
