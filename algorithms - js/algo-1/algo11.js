
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


