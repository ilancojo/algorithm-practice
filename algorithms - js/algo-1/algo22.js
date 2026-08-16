// #22
// Given a string containing only the characters '(', ')', '{', '}',
// '[' and ']', return true if the string is valid, false otherwise.
//
// A string is valid if:
// - Every opening bracket has a corresponding closing bracket
// - Brackets are closed in the correct order
//
// Constraints: the string may be empty - return true in that case.
//

/*
function f1(str){
    let L = 0 ;
    let R = str.length-1;
    if(R === 0){return true}
    while(L < R){

        if(str[L] !== str[R]){  /// {,} הם לא באמת שווים
            return false
        }
        L++;
        R--;
    }
    return true
}
*/

function f1(str) {
    // מקרה קצה: מחרוזת ריקה צריכה להחזיר true לפי ההוראות
    if (str.length === 0) {
        return true;
    }

    // ניצור אובייקט (מילון) שיעזור לנו להתאים בין סוגר סוגר לסוגר הפותח שלו
    const bracketsMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
 
    // ניצור את המחסנית שלנו (מערך פשוט בג'אווה סקריפט)
    const stack = [];

    // נעבור על כל תו במחרוזת
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // אם התו הנוכחי הוא סוגר סוגר (כלומר, הוא מפתח ב-bracketsMap)
        if (bracketsMap[char]) {
            // נוציא את הסוגר הפותח האחרון מהמחסנית
            let topElement = stack.length > 0 ? stack.pop() : null;

            // נבדוק אם הסוגר שהוצאנו תואם לסוגר שהיינו צריכים לקבל
            if (topElement !== bracketsMap[char]) {
                return false;
            }
        } else {
            // אם זה סוגר פותח, פשוט נדחוף אותו למחסנית
            stack.push(char);
        }
    }

    // בסוף הלולאה, המחסנית חייבת להיות ריקה. 
    // אם נשארו בה איברים, זה אומר שיש סוגריים פותחים שלא נסגרו.
    return stack.length === 0;
}

// ------------------------------------
// בדיקות - הדפסה לטרמינל כדי לראות תוצאות
// ------------------------------------
console.log("Testing '{[()]}':", f1("{[()]}")); // צפי: true
console.log("Testing '{]':", f1("{]"));         // צפי: false
console.log("Testing '()[]{}':", f1("()[]{}")); // צפי: true
console.log("Testing '':", f1(""));             // צפי: true

