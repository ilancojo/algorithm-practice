// #13
// Given an array of integers, move all zeros to the end
// while keeping the relative order of non-zero elements.
// Do this in-place, do not create a new array.
//
// Constraints: modify the original array in-place.
// The order of non-zero elements must stay the same.
// Do not use any extra arrays, objects, or sets.
//

/*
איך זה עובד

המשתנה read עובר על כל המערך.

המשתנה write אומר איפה צריך לשים את המספר הבא שאינו אפס.

כאשר אנחנו רואים מספר שאינו אפס, אנחנו כותבים אותו במקום של write, ואז מקדמים את write.

אחרי שסיימנו להעביר את כל המספרים שאינם אפס להתחלה, כל המקומות שנשארו מסוף write עד סוף המערך צריכים להיות אפסים.

מה ללמוד מזה///////////////////////////////////////////

בבעיות כאלה אל תחפש את האפסים.

תחפש את הערכים שאתה רוצה לשמור, ותכתוב אותם קדימה עם write pointer

*/


function moveZeroes(arr){

    let write = 0;//אומר איפה צריך לשים את המספר הבא שאינו אפס

    for(let r = 0 ; r < arr.length ; r++){//לולאה ראשונה מעתיקה 

        if(arr[r] !== 0){
            arr[write] = arr[r]; 

            write++;
        }
    }
    while (write < arr.length) {//לולאה שניה עושה אפסים מסוף הסידור 
        arr[write] = 0;
        write++;
    }
    return arr;
}

let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);