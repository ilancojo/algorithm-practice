// #7 
// Given two strings, return true if they are anagrams of each other,
// false otherwise. An anagram uses the same characters the same number
// of times, just in a different order.
//
// Constraints: strings will only contain lowercase letters, no spaces.
//
// Input:  "listen", "silent"  →  Output: true
// Input:  "hello",  "world"   →  Output: false
// Input:  "cat",    "car"     →  Output: false

function f1( str1, str2){
  
    const str1Map = new Map();
    const str2Set = new Set(str2);
    const strLen1 = str1.length;
    const strLen2 = str2.length;

    for(let i =0 ; i < strLen1 ;i++ ){
        
        str1Map.set(str1[i],str2);
        if(!str2Set.has(str1[i])){
            return false;
        }
    }
    if(strLen1 !== strLen2){
        return false;
    }
    return true
}
console.log(f1("listen", "silent" ));
console.log(f1("hello",  "world"));
console.log(f1("cat",    "car"));
console.log(f1("aa", "ab"));        /////NOT WIRKING FOR THIS EXEMPLE






function f1(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    const lettersMap = new Map();

    // סופרים כמה פעמים כל אות מופיעה ב-str1
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];

        if (lettersMap.has(char)) {
            lettersMap.set(char, lettersMap.get(char) + 1);
        } else {
            lettersMap.set(char, 1);
        }
    }

    // מורידים ספירה לפי האותיות של str2
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];

        if (!lettersMap.has(char)) {
            return false;
        }

        lettersMap.set(char, lettersMap.get(char) - 1);

        if (lettersMap.get(char) < 0) {
            return false;
        }
    }

    return true;
}

console.log(f1("listen", "silent")); // true
console.log(f1("hello", "world"));   // false
console.log(f1("cat", "car"));       // false
console.log(f1("aa", "ab"));         // false
console.log(f1("aab", "abb"));       // false



