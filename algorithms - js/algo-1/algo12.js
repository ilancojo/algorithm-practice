
// #12
// Given a string, return the length of the longest substring
// that contains no repeating characters.
//
// Constraints: the string may contain letters, digits, and spaces.
// An empty string should return 0.
//
// Input:  "abcabcbb"  →  Output: 3  ("abc")
// Input:  "bbbbb"     →  Output: 1  ("b")
// Input:  "pwwkew"    →  Output: 3  ("wke")


////Sliding Window////

function f1(str) {
    let strLen = str.length;
    if (strLen === 0) {
        return 0;
    }

    let charsSet = new Set();
    let left = 0;       //left
    let maxLength = 0;  //  right

    for (let right = 0; right < strLen; right++) {

        while (charsSet.has(str[right])) {
            charsSet.delete(str[left]);
            left++;
        }

        charsSet.add(str[right]);

        let currentLength = right - left + 1;

        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

console.log(f1("abcabcbb")); // 3
console.log(f1("bbbbb"));    // 1
console.log(f1("pwwkew"));   // 3
console.log(f1(""));         // 0



