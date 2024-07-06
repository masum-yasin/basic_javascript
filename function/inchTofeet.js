// const incheToFeet  =120;
// const resultFeet =  incheToFeet/12;
// console.log(resultFeet);
//  const dadiFeet   =60;
//  const daidResult = dadiFeet/12;
//  console.log(daidResult);
function incheToFeet(inches){
    const feet  = inches/12;
    return feet;
}
const dadaInches  = 144;
const dadaFeet = incheToFeet(dadaInches);
console.log(dadaFeet);

function Age(age){
  return age;
}
const nanaAge = 142;
const nanaAgeResult = Age(nanaAge);
console.log(nanaAgeResult);

function number(num){
    const totalnum = num + 120;
    return totalnum;
}
const newNumber = 420;
const passData = number(newNumber);
console.log(passData);

function milesToKilometers(miles){
    const kilometers  = miles * 1.609;
    return kilometers;
}
const addMiles = 230;
const countMiles = milesToKilometers(addMiles);
console.log(countMiles);
