//#3
// Given a string, return the number of vowels (a, e, i, o, u) it contains.
// Treat uppercase and lowercase the same.
//
// Constraints: input may contain spaces and mixed case. Vowels are only a e i o u.
//
// Hint: a string of vowels makes the membership check clean —
// check if each character is inside it.
//
// Input:  "hello world" →  Output: 3


let vowels   =  ['a', 'e', 'i', 'o', 'u'];
let input   = "hello world";

function countVowels(arr) {
  
    let vowelsCounts   =  [0, 0, 0, 0, 0];
    let count = 0;

    for(let i =0; i < arr.length; i++){
        
        for(let j =0; j < vowelsCounts.length; j++){

            if((arr[i].toLowerCase() == vowels[j] )||(arr[i].toUpperCase() == vowels[j] )){

                vowelsCounts[j] += 1;
                count +=1;
            }
       
        }

    }
  return count;
} 


console.log(countVowels(input)); 