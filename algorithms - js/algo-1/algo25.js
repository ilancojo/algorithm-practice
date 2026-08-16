// #25
// Given a SORTED array of integers and a target number, return the
// index of the target if it exists, or -1 if it doesn't.
//
// Constraints: the array is sorted in ascending order.
// You may not use any built-in search functions.
//
// Input:  [1, 3, 5, 7, 9], target 5   →  Output: 2
// Input:  [1, 3, 5, 7, 9], target 6   →  Output: -1
// Input:  [1, 3, 5, 7, 9], target 1   →  Output: 0
/* הקוד שלי 
function f1(arr,t){
    
    let count = 0;
    
    for(let index = 0 ;index < arr.length; index++){

        if( t !== arr[index]){
            count++   
        }
        else{
            return count;
        }
        count++
    }
    return -1
}

function f1(arr, t) {  תיקון גימיני
    for (let index = 0; index < arr.length; index++) {
        // אם מצאנו את המספר, נחזיר את האינדקס הנוכחי
        if (arr[index] === t) {
            return index;
        }
    }
    // אם הלולאה הסתיימה ולא החזרנו כלום, סימן שהמספר לא קיים
    return -1;
}
ָָָ*/
function f1(arr, target) {
    // מגדירים שני מצביעים: אחד להתחלת המערך ואחד לסופו
    let left = 0;
    let right = arr.length - 1;

    // כל עוד המצביעים לא חלפו אחד על פני השני
    while (left <= right) {
        // מוצאים את האינדקס האמצעי
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // בינגו! מצאנו
        } 
        else if (arr[mid] < target) {
            // המספר באמצע קטן מהמטרה, אז המטרה חייבת להיות בחצי הימני
            left = mid + 1;
        } 
        else {
            // המספר באמצע גדול מהמטרה, אז המטרה חייבת להיות בחצי השמאלי
            right = mid - 1;
        }
    }

    // אם המצביעים נפגשו ולא מצאנו כלום
    return -1;
}

console.log("Output :", f1([1, 3, 5, 7, 9], 3));  // יחזיר 1
console.log("Output :", f1([1, 3, 5, 7, 9], 6));  // יחזיר -1
console.log("Output :", f1([1, 3, 5, 7, 9], 1));  // יחזיר 0


console.log("Output :", f1([1, 3, 5, 7, 9],5));  
console.log("Output :", f1([1, 3, 5, 7, 9],6));  
console.log("Output :", f1([1, 3, 5, 7, 9],1));  