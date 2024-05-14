//1. Check Even Number//


let EvenNumbers = [12, 24, 25, 26, 27, 28, 33, 40, 41, 46, 47];

function myEvenNumber(Numbers) {
  let storeEven = [];
    for (let i = 0; i < Numbers.length; i++) {
      if (Numbers[i] % 2 === 0) {
        storeEven.push(Numbers[i]);
      }
    }

  return storeEven;
}

let myResult = myEvenNumber(EvenNumbers);
console.log(myResult);

let newArray = [12, 36, 40, 41, 42, 33, 69, 60, 50];

let myFunc = (num)=>{
  let evenNumber = [];
num.forEach(element => {
  if(element % 2 ===0){
    evenNumber.push(element)
  }
});
return evenNumber;
}
let result  = myFunc(newArray);
console.log(result);


