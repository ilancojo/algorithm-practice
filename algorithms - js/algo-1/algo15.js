// #15
// Given an array of integers and a number K, find the maximum sum
// of any K consecutive elements in the array.
//
// Constraints: K will always be less than or equal to the array length.
// The array will contain at least K elements.
//
// Input:  [2, 1, 5, 1, 3, 2], K=3  →  Output: 9   (5+1+3)
// Input:  [1, 2, 3, 4, 5],    K=2  →  Output: 9   (4+5)
// Input:  [4, 4, 4, 4],       K=1  →  Output: 4


function maxSubarraySum(arr, k) {
   
    if (arr.length < k) return null;
   
    let currentSum =0;
    let maxSum = 0;

    // שלב 1: חישוב הסכום של החלון הראשון
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    maxSum = currentSum;

    // שלב 2: החלקת החלון על שאר המערך
    for (let i = k; i < arr.length; i++) {
        // שלב 3: מוסיפים את האיבר החדש שנכנס מימין, ומחסרים את האיבר הישן שיצא משמאל
        currentSum = currentSum - arr[i - k] + arr[i];
        
        // שלב 4: שמירת המקסימום
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
console.log(maxSubarraySum([1, 2, 3, 4, 5], 2));
console.log(maxSubarraySum([4, 4, 4, 4],  1));


// Input:  [2, 1, 5, 1, 3, 2], K=3  →  Output: 9   (5+1+3)
// Input:  [1, 2, 3, 4, 5],    K=2  →  Output: 9   (4+5)
// Input:  [4, 4, 4, 4],       K=1  →  Output: 4
