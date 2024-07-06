let onlyPositive = (positiveNumber) => {
  let storePositiveNumber = [];
  for (let i = 0; i < positiveNumber.length; i++) {
  
    if (positiveNumber[i] < 0) {
      continue;
    }
    if (positiveNumber[i] % 2 === 0) {
      storePositiveNumber.push(positiveNumber[i]);
    }
  }
  return storePositiveNumber;
};

let numbers = [8, 10, 11, -13, 15, 20, 28, 40, -42, -105, -103, 42, -23];
let allPositive = onlyPositive(numbers);
console.log(allPositive);



let myPositiveNumber = (positiveNUM)=>{
    let Pnumber = []; 
    positiveNUM.forEach(element => {
        if(element<0){
            Pnumber.push(element);
        }
    });
}






let number = [8, 10, 11, -13, 15, 20, 28, 40, -42, -105, -103, 42, -23];
let result =myPositiveNumber(number);
console.log(result);



