
// #11
// Given two arrays, return a new array containing only the elements
// that appear in both arrays. Each element in the result should be unique.
//
// Constraints: the result can be in any order.
// Each element in the result must appear only once even if it
// appears multiple times in both arrays.
//
// Input:  [1, 2, 3, 4], [3, 4, 5, 6]     →  Output: [3, 4]
// Input:  [1, 1, 2, 3], [1, 2, 2]        →  Output: [1, 2]

/*
function f1(arr1,arr2) {

    let set1 = new Set(arr1); // O(N)
    let set2 = new Set(arr2); // O(N)
    let comonarr = [];

    if (arr1.length === 0 || arr2.length === 0) {
        return [];
    }

    for (let i = 0; i < arr1.length; i++) {
      
        if(set1[i] === set2[i]){
            comonarr.push(set1[i]);
        }
    }
    return comonarr;

}

let input1 = [1, 2, 3, 4] ;
let input2 = [3, 4, 5, 6];

console.log(f1(input1,input2)); 

*/

function f1(arr1, arr2) {

    let smallArr;
    let bigArr;

    if (arr1.length < arr2.length) {
        smallArr = arr1;
        bigArr = arr2;
    } else {
        smallArr = arr2;
        bigArr = arr1;
    }

    let set = new Set(smallArr);
    let commonArr = [];

    for (let i = 0; i < bigArr.length; i++) {
        let current = bigArr[i];

        if (set.has(current)) {
            commonArr.push(current);

            // מוחקים כדי שלא נוסיף את אותו איבר פעמיים
            set.delete(current);
        }
    }

    return commonArr;
}

console.log(f1([1, 2, 3, 4], [3, 4, 5, 6]));      // [3, 4]
console.log(f1([1, 1, 2, 3], [1, 2, 2]));         // [1, 2]