/**
1          1
12        21
12       321
1234    4321
12345  54321
123456654321
 */

function pattern11(n) {
  let temp = '';
  let spaces = 2 * (n - 1);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      temp += j;
    }

    for (let j = 1; j <= spaces; j++) {
      temp += ' ';
    }
    spaces = spaces - 2;

    for (let j = i; j >= 1; j--) {
      temp += j;
    }
    console.log(temp);
    temp = '';
  }
}

pattern11(4);
