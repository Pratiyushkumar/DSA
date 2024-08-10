//1st Approach
function findSecondLargestElement(arr: number[]) {
  let newArr = [...arr].sort((a, b) => a - b);
  let largest = newArr[newArr.length - 1];
  let secondLargest = -1;

  for (let i = newArr.length - 2; i >= 0; i--) {
    if (newArr[i] < largest && newArr[i] > secondLargest) {
      secondLargest = newArr[i];
    }
  }
  return secondLargest;
}

// console.log(findSecondLargestElement([1, 2, 4, 7, 7, 5]));

//2nd Approach
function findSecondLargestElementSecondApproach(arr: number[]) {
  let largest = arr[0],
    sLargest = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largest && arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }

  return sLargest;
}

// console.log(findSecondLargestElementSecondApproach([1, 2, 4, 7, 7, 5]));

function findSecondLargestElementThirdApproach(arr: number[]) {
  let largest = arr[0],
    slargeest = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      slargeest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > slargeest) {
      slargeest = arr[i];
    }
  }
  console.log(largest);
  return slargeest; // returns the second largest element in the array. If there is no second largest, it returns -1.  // Example: findSecondLargestElementThirdApproach([1, 2, 4, 7, 7, 5]) => 7  // Example: findSecondLargestElementThirdApproach([1, 2, 3]) => -1  // Example: findSecondLargestElementThirdApproach([1])
}

// console.log(findSecondLargestElementThirdApproach([1, 2, 4, 7, 7, 5, 6]));
// console.log(findSecondLargestElementThirdApproach([10, 10]));
console.log(findSecondLargestElementThirdApproach([1]));
