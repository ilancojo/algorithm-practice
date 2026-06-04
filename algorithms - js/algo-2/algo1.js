
//#4
//Given an array of integers, return how many numbers
// in the array are strictly greater than the average.
//
// Constraints: the array will always have at least one element.
//
// Input:  [1, 2, 3, 4, 5]  →  Output: 2  (4 and 5 are above average 3)
// Input:  [10, 10, 10, 20] →  Output: 1  (only 20 is above average 12.5)

let input   = [1, 2, 3, 4, 5];
let input2   =  [10, 10, 10, 20];


function countAboveAverage(arr) {
  
    let aboveAverage = 0;
    let average = 0;
    for(let i =0;i<arr.length; i++){
        average += arr[i];
    } 
    average /= arr.length ;

    for(let i =0;i<arr.length; i++){
        
        if(arr[i] > average){
           aboveAverage +=1;
        }
    }
  return aboveAverage;
}

console.log(countAboveAverage(input));
console.log(countAboveAverage(input2));