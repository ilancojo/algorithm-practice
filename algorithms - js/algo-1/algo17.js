// #17
// Given a string and a number K, return the maximum number of vowels
// in any substring of length K.
// Vowels are: a, e, i, o, u (lowercase only).
//
// Constraints: K will always be less than or equal to the string length.
// The string will only contain lowercase letters.
// You may not use any built-in methods to count vowels.
//
// Hint: count vowels in the first K characters as your starting window.

/*
החלק הכי חשוב להבין
הקוד לא סופר מחדש כל חלון מהתחלה.
הוא רק מעדכן את הספירה:
תו אחד יוצא משמאל.
תו אחד נכנס מימין.
בודקים אם כל אחד מהם הוא vowel.
מעדכנים את המקסימום.
זו בדיוק הלוגיקה של fixed-size sliding window.

 */



function maxVowelsInSubstring(str, k) { //"abciiidef" , K=3
    let currentVowels = 0;

    for (let i = 0; i < k; i++) {   //מתחילים לבנות את החלון הראשון "abc"
                                    //אם K =3 ,0,1,2 כלומר על שלושת התווים הראשונים.
        if (isVowel(str[i])) {      //בודקים כל תו בחלון הראשון
            currentVowels++;    
        }
    }

    let maxVowels = currentVowels;  //כרגע זה המקסימום הכי טוב שראינו
    //כאן מתחילים להחליק את החלון ימינה.
    for (let right = k; right < str.length; right++) { //r=k - כי עברו כבר על 3 ריברים ראשונים
        let left = right - k;//כאן מחשבים מי התו שיוצא מהחלון מצד שמאל.
                             //left = 0 -כלומר התו ברפס יוצא מהחלון
                             //אנחנו עוברים מהחלון ל-"bci"
        if (isVowel(str[left])) {//כאן בודקים את התו שיוצא.
            currentVowels--;    //אם התו שיוצא הוא vowel, צריך להוריד 1 מהספירה.
        }

        if (isVowel(str[right])) {//כאן בודקים את התו שנכנס מצד ימין.
            currentVowels++;      //אם התו שנכנס הוא vowel, מוסיפים 1.
        }
//אחרי שעדכנו את החלון, בודקים אם החלון הנוכחי יותר טוב מכל מה שראינו עד עכשיו.
        if (currentVowels > maxVowels) {
            maxVowels = currentVowels;//אם כן, מעדכנים את
        }
    }
//בסוף מחזירים את המספר הכי גבוה של vowels שנמצא באיזשהו חלון באורך k.
    return maxVowels;
}

function isVowel(char) {
    return (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    );
}

console.log(maxVowelsInSubstring("abciiidef", 3));     // 3
console.log(maxVowelsInSubstring("ilancojocaru", 3));  // 2
console.log(maxVowelsInSubstring("leetcode", 3));      // 2
console.log(maxVowelsInSubstring("rhythms", 4));       // 0
console.log(maxVowelsInSubstring("aeiou", 2));         // 2