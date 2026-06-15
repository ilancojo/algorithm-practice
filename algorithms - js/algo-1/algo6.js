
// #6
// Given a string of words separated by spaces, return the longest word.
// If there is a tie, return the first one.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in sort functions.
//
// Input:  "the quick brown fox"   →  Output: "quick"
// Input:  "cat elephant dog"      →  Output: "elephant"
// Input:  "one two six ten"       →  Output: "one"  (tie → first wins)




function f1(input){
    let inputLenght = input.length;
    let maxCount = 0;
    let maxWord ; 
    let currentCount = 0;
    let currentWord = ""; 

    for(let i =0 ; i < inputLenght ;i++ ){

        if(input[i] === " "){
            
            if(currentCount > maxCount){
                currentCount = currentCount;
                maxWord = currentWord;
            }
            currentCount = 0;
            currentWord = "";
        }
        else{
            currentCount ++;
            currentWord += input[i];  
        }
        if (currentCount > maxCount) {// חייב לבדוק גם את המילה האחרונה
            maxCount = currentCount;
            maxWord = currentWord;
        }
    }
        return maxWord;
}
console.log(f1("the quick brown fox"));
console.log(f1("cat elephant dog"));
console.log(f1("one two six ten"));

////////////option 2//////////////
/*      
function f2(input){
  
    let max = 0;
    const maxMap = new Map();
    const wordsSet = new Set(input.split(" "));

    for(let word of wordsSet ){
        let n = word.length;
        if(n > max){
            max = n;
            maxMap.set(n,word);
        }
    }
    return maxMap.get(max);   
}
console.log(f1("the quick brown fox"));
console.log(f1("cat elephant dog"));
console.log(f1("one two six ten"));
*/