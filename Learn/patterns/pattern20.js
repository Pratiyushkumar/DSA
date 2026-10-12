/**
 *          *
 **        **
 ***      ***
 ****    ****
 *****  *****
 ************
 *****  *****
 ****    ****
 ***      ***
 **        **
 *          *
 */

function pattern20(n) {
  let temp = '';
  let spaces = 2 * n - 2;
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;
    for (let j = 1; j <= stars; j++) {
      temp += '*';
    }
    for (let j = 1; j <= spaces; j++) {
      temp += ' ';
    }
    for (let j = 1; j <= stars; j++) {
      temp += '*';
    }
    console.log(temp);
    if (i < n) spaces -= 2;
    else spaces += 2;
    temp = '';
  }
}

pattern20(6);
