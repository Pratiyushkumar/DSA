/**
 ***********
 *********
 *******
 *****
 ***
 *
 */

function pattern8(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      temp += ' ';
    }

    for (let j = 1; j < 2 * (n - i); j++) {
      temp += '*';
    }
    // for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
    //   temp += '*';
    // }

    for (let j = 0; j <= i; j++) {
      temp += ' ';
    }

    console.log(temp);
    temp = '';
  }
}

pattern8(4);
