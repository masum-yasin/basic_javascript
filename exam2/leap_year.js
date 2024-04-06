// function findLeapYear(leapyear){
//     const myArray = [];
//     for(let i =0; i<leapyear.length;i++){
//         const element = leapyear[i];
//         // console.log(element);
//         if(element % 4 ==0){
//             // console.log(element);
//             myArray.push(element);
//         }
//     }
//     return myArray;
// }
// const my_year = [2023, 2024, 2025, 2028, 2023];
// const result = findLeapYear(my_year);
// console.log(result);

function myFunction(myleapyear){
    let leapYarStore=[];
    for(let i = 0; i<myleapyear.length; i++){
        const index = i;
        const myelement = myleapyear[index];
        if(myelement % 4 == 0){
            // console.log(index,myelement);
            leapYarStore.push(myelement);
        }
        
    }
    return leapYarStore;
}
const superYear = [1925, 1958, 1972, 1988, 1999, 2004, 2025, 2024, 2028, 1995];
const result = myFunction(superYear)
console.log(result);