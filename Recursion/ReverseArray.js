//iterative approach1
function reverseArrayIteratively(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// console.log(reverseArrayIteratively([5, 4, 3, 2, 1]));
// console.log(reverseArrayIteratively([10, 20, 30, 40]));

//recursive approach1
function reverseArrayRecursively(arr, reversedArray, index) {
    if (index < 0) {
        return reversedArray;
    }
    reversedArray.push(arr[index]);
    return reverseArrayRecursively(arr, reversedArray, index - 1);
}

// let arr = [5, 4, 3, 2, 1]

// console.log(reverseArrayRecursively(arr, [], arr.length - 1))

//iterative approach2
function reverseArrayIterativelyWithoutExtraSpace(arr) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

console.log(reverseArrayIterativelyWithoutExtraSpace([1, 2, 3, 4, 5, 6, 7]));

//recursive approach1
function reverseArrayRecursivelyWithoutExtraSpace(arr, start, end) {
    if (start >= end) {
        return arr;
    }
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    return reverseArrayRecursivelyWithoutExtraSpace(arr, start + 1, end - 1);
}

let arr = [5, 4, 3, 2, 1]
console.log(reverseArrayRecursivelyWithoutExtraSpace(arr, 0, arr.length - 1));