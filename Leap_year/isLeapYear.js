// function isLeapYear(year){
// const remainder  =  year % 4;
// if(remainder===0){
//     console.log('Your year is LeapYear', year);
// }
// else{
//     console.log('Your year is not LeapYear', year);
// }

// }
// isLeapYear(1952)


function isLeapYear(year){
const remainder  =  year % 4;
if(remainder===0){

return true;
}
else{


return false;

}

}
const myLeapYear= isLeapYear(1952)
console.log('My Year is', myLeapYear);
const YorLeapYear= isLeapYear(1933)
console.log('Your Year is' ,YorLeapYear);