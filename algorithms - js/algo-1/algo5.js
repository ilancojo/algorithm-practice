// #5 
//Given an array of integers, return the element that appears
// most frequently. If there is a tie, return the one that appears
// first in the array.
//
// Constraints: the array will always have at least one element.
//
// Hint: think about how you can count occurrences of each element
// as you loop through, then find the highest count.

let input = [1, 2, 3, 4, 5,3];
let input2 = [10, 10, 10, 20];

function countFrequentNumber(arr) {

    // This object will store how many times each number appears
    let counts = {};

    // First loop: count the occurrences of each number
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        if (counts[currentNumber] === undefined) {
            counts[currentNumber] = 1;
        } else {
            counts[currentNumber]++;
        }
    }

    // Find the highest count
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        if (counts[currentNumber] > maxCount) {
            maxCount = counts[currentNumber];
        }
    }
    // Return the first number in the array that has the highest count
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        if (counts[currentNumber] === maxCount) {
            return currentNumber;
        }
    }
}

console.log(countFrequentNumber(input));   // 1
console.log(countFrequentNumber(input2));  // 10




















//למה לא טוב כי מתעסקים עם אובייקיטים . ואם יש חזרה על אותו מספר אז ניספר אינדקס נוסף במקום 
// אם אני רוצה שזה יעבוד אני צריך עוד לולאה שעושה בדיקה במערך האינדקסים שלי כי הוא סופר לא נכון 
/* 


let input   = [1, 2, 3, 4, 5, 3];
let input2   =  [10, 10, 10, 20,20,20,10];

function countFrequentNumber(arr) {

   let countFrequent = new Array(arr.length).fill(0);//let countFrequent   =  [0] * arr.length;
    let  mostFrequent = arr[0];
    for(let i =0; i < arr.length; i++){
        countFrequent[i] += 1;
    }
    for(let i =0; i < arr.length; i++){
        if(mostFrequent < countFrequent[i]){
            mostFrequent = countFrequent[i];
        }
    }
  return mostFrequent;
} 
console.log(countFrequentNumber(input));
console.log(countFrequentNumber(input2));

*/