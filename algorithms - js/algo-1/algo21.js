// #21
// Given a string and a number K, return the length of the longest
// substring that contains at most K distinct characters.
//
// Constraints: K will always be a positive integer.
// The string will only contain lowercase letters.
//
// Input:  "araaci", K=2  →  Output: 4  ("araa")
// Input:  "araaci", K=1  →  Output: 2  ("aa")
// Input:  "cbbebi", K=3  →  Output: 5  ("cbbeb")



function f1(str, k) {
    if (k === 0 || str.length === 0) return 0;
    
    let map = new Map();
    let left = 0;
    let maxLength = 0;
    
    // מצביע ימני שמרחיב את החלון
    for (let right = 0; right < str.length; right++) {
        let rightChar = str[right];
        
        // מוסיפים את התו החדש ל-Map ומעדכנים את הכמות שלו
        map.set(rightChar, (map.get(rightChar) || 0) + 1);
        
        // אם יש יותר מ-K תווים שונים בחלון, צריך לכווץ אותו משמאל
        while (map.size > k) {
            let leftChar = str[left];
            map.set(leftChar, map.get(leftChar) - 1);
            
            // אם הכמות של התו הגיעה ל-0, מוחקים אותו לגמרי מה-Map
            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            left++; // מקדמים את המצביע השמאלי ימינה
        }
        
        // מעדכנים את האורך המקסימלי שנמצא עד כה
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

console.log(f1("araaci", 2)); // פלט: 4 ("araa")
console.log(f1("araaci", 1)); // פלט: 2 ("aa")
console.log(f1("cbbebi", 3)); // פלט: 5 ("cbbeb")