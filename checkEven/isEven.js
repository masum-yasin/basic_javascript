// function isEven(number){
//     const remainder = number % 2;
//     // console.log(remainder);
//     if(remainder===0){
//         console.log('Its Even Number' + " :  " +  remainder);
//     }
//     else{
//         console.log('Its Odd Number' + " : " +  remainder);
//     }
// }
// isEven(427)
// isEven(100)

function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder===0){
       return true;
    }
    else{
        return false;
    }
}


const mynumberIsEvent= isEven(427);
console.log(mynumberIsEvent);
const herNumberIsEven=isEven(1220);
console.log(herNumberIsEven);