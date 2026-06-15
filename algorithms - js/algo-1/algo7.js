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


