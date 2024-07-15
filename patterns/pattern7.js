/**
     *     
    ***    
   *****   
  *******  
 ********* 
***********
 */

function pattern7(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      temp += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      temp += '*';
    }
    for (let l = 0; l < n - i - 1; l++) {
      temp += ' ';
    }

    console.log(temp);
    temp = '';
  }
}

pattern7(5);
