/**
 
 * * * * * *
* * * * * 
* * * * 
* * * 
* * 
*
 
 */

function pattern5(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      temp += '* ';
    }
    console.log(temp);
    temp = '';
  }
}

pattern5(6);
