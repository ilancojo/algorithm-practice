
// #10
// Given a sorted array of integers, remove the duplicates in-place
// so each element appears only once, and return the new length.
// The array is sorted, so duplicates will always be adjacent.
//
// Constraints: do not create a new array, modify the original in-place.
// The order of elements must stay the same.
//
// Input:  [1, 1, 2, 3, 3, 4]  →  Output: 4  (array becomes [1, 2, 3, 4])
// Input:  [1, 1, 1, 1]        →  Output: 1  (array becomes [1])

function f1(arr) {

    if (arr.length === 0) {
        return 0;
    }

    let writeIndex = 1;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] !== arr[i - 1]) {
            arr[writeIndex] = arr[i];
            writeIndex++;
        }
    }

    arr.length = writeIndex;

    return writeIndex;
}

let input1 = [1, 1, 2, 3, 3, 4];
let input2 = [1, 1, 1, 1];

console.log(f1(input1)); // 4
console.log(input1);     // [1, 2, 3, 4]

console.log(f1(input2)); // 1
console.log(input2);     // [1]