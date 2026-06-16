
// #13
// Given a string, return the length of the longest substring
// that contains no repeating characters.
//
// Constraints: the string may contain letters, digits, and spaces.
// An empty string should return 0.
//
// Input:  "abcabcbb"  →  Output: 3  ("abc")
// Input:  "bbbbb"     →  Output: 1  ("b")
// Input:  "pwwkew"    →  Output: 3  ("wke")




function f1(str) {

    let strLen = str.length;
    if(strLen === 0) {return 0};

    let allStr= new Map();
   
    let count = 0;
    let currentSub ="";

    for (let i = 0 ; i < strLen ; i++) {
       
        let current = str[i];
        let next = str[i+1];

        if ((current.charCodeAt(0) < 91 ||  current.charCodeAt(0) > 64 || current.charCodeAt(0) > 96 || current.charCodeAt(0) < 123) && (next !== current)) {

                currentSub +=current;
                count++;
                allStr.set(currentSub,count);

        }
        else{
                let count = 0;
                let currentSub ="";
        }       
    }

    let result = allStr.values().forEach(num=>{
            let result = 1;
            if(num > result) {
                 result = num;
            } 
        });

    return  result;
}

console.log(f1("abcabcbb"));    //→  Output: 3  ("abc")
console.log(f1("bbbbb"));       // Input:  "bbbbb"     →  Output: 1  ("b")
console.log(f1("pwwkew"));      // Input:  "pwwkew"    →  Output: 3  ("wke")





