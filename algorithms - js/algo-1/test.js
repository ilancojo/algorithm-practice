// #21
// Given an array of positive integers and a target number,
// return the length of the shortest contiguous subarray whose sum
// is greater than or equal to the target.
//
// If no such subarray exists, return 0.
//
// Constraints:
// The array may be empty.
// The array will contain only positive integers.
// The target will be a positive number.
// A subarray must have at least one element.
//
// Think about when the window is valid,
// and when the left pointer should move.
//
// Input:  [2, 3, 1, 2, 4, 3], target 7   →  Output: 2  ([4,3])
// Input:  [1, 1, 1, 1, 1],    target 3   →  Output: 3  ([1,1,1])
// Input:  [1, 2, 3],          target 10  →  Output: 0




function f1(arr,target){

    let left = 0;
    let minLen ;
    let currentSum = 0; 

    for(let right = 0 ; right < arr.length; right++){

        currentSum += arr[right];

        while(currentSum >= target){
            currentSum -= arr[left];
            left++
        }   

        let curentLength = right-left +1 ;
        
        if(curentLength <= minLen){
            minLen=curentLength;
        }
    }

    return minLen;
}

let arr = [2, 3, 1, 2, 4, 3]
let arr1 = [1, 1, 1, 1, 1]

console.log(f1(arr,7 ));    
console.log(f1(arr1,3));    
