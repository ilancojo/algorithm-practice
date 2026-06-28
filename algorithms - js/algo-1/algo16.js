// #16
// Given an array of positive integers and a target number, return
// how many contiguous subarrays have a sum equal to the target.
//
// Constraints: the array will only contain positive integers.
// A subarray must have at least one element.
//
// Think about when each pointer should move.
//
// Input:  [1, 2, 3, 4, 5], target 5  →  Output: 2  ([2,3] and [5])

/*
המשפט שאתה צריך לזכור
בבעיות sliding window עם מספרים חיוביים:
מוסיפים מימין כדי להגדיל את הסכום.
מורידים משמאל כדי להקטין את הסכום.
סופרים כשסכום החלון שווה ליעד.
*/
function countSubarraysWithSum(arr, target) {
    let left = 0;   //הוא הגבול השמאלי של החלון.
    let currentSum = 0;
    let count = 0;

    for (let right = 0; right < arr.length; right++) {//הוא הגבול הימני של החלון. R
        currentSum += arr[right];//שומר את הסכום של כל האיברים שנמצאים כרגע בין שמאל לימין

        while (currentSum > target && left <= right) {
            currentSum -= arr[left]; //אם הסכום גדול מדי, צריך להקטין את החלון
            left++;
        }
        //אחרי שהחלון תקין, בודקים אם הסכום שווה ליעד.
        if (currentSum === target) {
            count++;
        }
    }

    return count;
}

console.log(countSubarraysWithSum([1, 2, 3, 4, 5], 5)); // 2
console.log(countSubarraysWithSum([1, 1, 1], 2));       // 2
console.log(countSubarraysWithSum([5], 5));             // 1
console.log(countSubarraysWithSum([6], 5));             // 0
console.log(countSubarraysWithSum([], 5));              // 0















/*  ERROR IN REDING THE Q

function f1 (arr, t){

    let len =arr.length;
    let l = arr[0];         ///טעות זה חייב להיות אינדקס ולא הערך בשביל החלון
    let currentNum = 0;
    let lastMum = 0;
    let listOfOutput = [];
    let subArry =[]
    let currentSum  = 0;    //לא מתעדכן בכלל 
    if(len === 1 ){return arr[0]}

    for(let r = 0 ; r < len ; r++){// Input:  [1, 2, 3, 4, 5], target 5  →  Output: 2  ([2,3] and [5])
    
        currentSum = arr[r]+ currentNum;
        
        if(currentNum < t){

                if(arr[r] >= arr[r+1]){
                        l = arr[r+1];
                        subArry =[];
                        currentSum  = 0;
                }
             subArry.push(arr[r]);
        }        
                        
        if(currentSum === t){
                 
            subArry.push(arr[r]);
            listOfOutput.push(subArry);  
        }

        else{
             l = arr[r];
             subArry =[];
             currentSum  = 0;

        }
    }



}
    */


