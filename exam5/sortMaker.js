// function sortMaker(arr) {
//     // Arrays where both elements are positive and not equal
//     let positivePairs = [];
//     // Arrays where both elements are equal
//     let equalPairs = [];
    
//     arr.forEach(innerArr => {
//         if (innerArr[0] > 0 && innerArr[1] > 0) {
//             if (innerArr[0] === innerArr[1]) {
//                 equalPairs.push(innerArr);
//             } else {
//                 positivePairs.push(innerArr);
//             }
//         }
//     });
    
//     // Sort the positive pairs in ascending order by their first element
//     positivePairs.sort((a, b) => a[0] - b[0]);
    
//     // Return an object containing both sets
//     return {
//         positivePairs,
//         equalPairs:"equal"
//     };
// }

// const array = [
//     [2, 3], [4, 2], [4, 4], [1, 2], [4, -2], [3, 3]
// ];
// const result = sortMaker(array);
// console.log(result);

function sortMaker(arr){
    let positivePairs = [];
    let equalPairs  = [];
    let inValid = [];
    arr.forEach(innerArr =>{
        if(innerArr[0]>0 && innerArr[1]>0){
         positivePairs.push(innerArr);
          }
          else if(innerArr[0]===innerArr[1]){
            equalPairs.push(innerArr);
            
          }
          else if(innerArr.some(num => num<0)){
            inValid.push(innerArr)
          }
         


})



    positivePairs.sort((a,b) => a[0]-b[1]);
    return{
        positivePairs,
        equalPairs: "equla",
        inValid: "Invalid Input"


    }

}



const array = [
    [2, 3], [4, 2], [4, 4], [1, 2], [4, -2], [3, 3]
]
 const result = sortMaker(array)
 console.log(result);