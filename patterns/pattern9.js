/**
     *
    ***
   ***** 
  *******
 *********
***********  
***********
 *********
  *******
   ***** 
    ***    
     *
 */


function pattern7(n) {
     let temp = '';
     for (let i = 0; i < n; i++) {
       for (let j = 0; j < n - i - 1; j++) {
         temp += ' ';
       }
       for (let k = 0; k < 2 * i - 1; k++) {
         temp += '*';
       }
       for (let l = 0; l < n - i - 1; l++) {
         temp += ' ';
       }

       console.log(temp);
       temp = '';
     }
}

function pattern8(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      temp += ' ';
    }

    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      temp += '*';
    }

    for (let j = 0; j < i; j++) {
      temp += ' ';
    }

    console.log(temp);
    temp = '';
  }
}

pattern7(5);
pattern8(5);