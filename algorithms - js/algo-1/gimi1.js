// Input: arr = [2, 7, 11, 15], target = 9
// Output: [2, 7]
// הסבר: 2 + 7 שווה 9

// Input: arr = [-3, 1, 3, 5], target = 2
// Output: [-3, 5]
// הסבר: -3 + 5 שווה 2


function f1(arr,t) {

    //let newArr = [];
    let L = 0 ;
    let R = arr.length - 1 ;

    while(L<R){      // Input: arr = [2, 7, 11, 15], target = 9
    
      let l = arr[L];
      let r = arr[R];
      let sum = l + r;

      if( sum === t ){ 
     //   newArr.push(arr[L],arr[R]) אפשר להחזיר ישירות
        return [arr[L], arr[R]]
      }
  
      else if(sum > t ){
        //sum -= r; מיותר
        R--;
      }
      else{
        //sum += l; מיותר
        L++
      }
    }
    return null
}

console.log("Output :", f1([2, 7, 11, 15],9 ));  // Output: [0, 1, 9, 16, 100]
console.log("Output :", f1([-3, 1, 3, 5],2 ));  // Output: [4, 9, 9, 49, 121]