// #26
// Given a sorted array of integers (may include negative numbers),
// return a new array of the squares of each number, sorted in
// ascending order.
//
// Constraints: do not use any built-in sort functions.
// The input array is sorted in ascending order.
//
// Input:  [-4, -1, 0, 3, 10]  →  Output: [0, 1, 9, 16, 100]
// Input:  [-7, -3, 2, 3, 11]  →  Output: [4, 9, 9, 49, 121]


/*
function f1(arr) {

    let countLen = 0;
    let map = new Map();

    let sortArr = [];

    for(let i = 0 ; i < arr.length; i++){

        if(!map.has(arr[i])){
            map.set(arr[i], arr[i]*arr[i]);
        }
        else{
             map.set(arr[i], arr[i]*arr[i]);
        }
    }

    while(countLen < arr.length){
    
        let min = min(arr);
    
    }

    return map
}
*/

function sortedSquares(arr) {
  const result = new Array(arr.length);
  let left = 0;
  let right = arr.length - 1;
  let insertPos = arr.length - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left];
    const rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      // left square is bigger — place it at the back
      result[insertPos] = leftSquare;
      left++;
    } else {
      // right square is bigger or equal — place it at the back
      result[insertPos] = rightSquare;
      right--;
    }
    insertPos--;
  }

  return result;
}


console.log("Output :", sortedSquares( [-4, -1, 0, 3, 10] ));  // Output: [0, 1, 9, 16, 100]

console.log("Output :", sortedSquares( [-7, -3, 2, 3, 11] ));  // Output: [4, 9, 9, 49, 121]