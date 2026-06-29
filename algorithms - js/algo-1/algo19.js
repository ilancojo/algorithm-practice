// #19
// Given a string, return the first character that appears only once.
// If no such character exists, return null.
//
// Constraints: the string will only contain lowercase letters.
// The string will always have at least one character.
//
// Input:  "leetcode"   →  Output: "l"
// Input:  "aabb"       →  Output: null
// Input:  "aabbc"      →  Output: "c"

function f1(str){

    let map = new Map();//שומר וסופר 

    for (let i = 0 ; i < str.length; i++){

        if(map.has(str[i])){
            let val = map.get(str[i]);
            val++
            map.set(str[i],val);
        }
        else{
            map.set(str[i],1);

        }
    }
    /**     // c - זה הערך כבר
      map.forEach(c => {
        if(c.value === 1){
            return c.;
        }     
    });
     */
        for (let i = 0; i < str.length; i++) {
            let char = str[i];

            if (map.get(char) === 1) {
                return char;
            }
    }

    return null;
}


let str = "leetcode";
let str1 = "aabb";
let str2 ="aabbc";


console.log(f1(str ));    
console.log(f1(str1 ));    
console.log(f1(str2 ));    