
function OddNumber(numbers){
    let evenNum = [];
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            evenNum.push(numbers[i])
        }
    }
    return evenNum;
}
let EvenNumbers = [12, 24, 25, 26, 27, 28, 33, 40, 41, 46, 47];

let result = OddNumber(EvenNumbers);
console.log(result);

let myFunc = (OddNumbers)=>{
    let myoddNumber = [];
    OddNumbers.forEach(element => {
        if(element % 2 !==0){
            myoddNumber.push(element)
        }
    });
    return myoddNumber;
}

let myNumbers = [12, 24, 25, 26, 27, 28, 33, 40, 3, 46, 21];
let Oddresult = myFunc(myNumbers);
console.log(Oddresult);