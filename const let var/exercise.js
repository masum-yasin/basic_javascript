
// let num  = 80;
// let num2 =50;
// let num3 = 120;
// if(num == num2 && num2== num3){
//     largest =num;
// }
// else if(num2==num && num3==num){
//     largest = num2;
// }
// else{
//     largest = num3
// }
// console.log(largest);

// let string = "Apple";
// let string2 = "Banana";
// let string3 = "Orange";

// if(string || string2){
//     console.log("Apple is a Most famous Fruit");
// }
// else if(string2 ||string3){
//     console.log("Banana is a Most famous Fruit");
// }
// else {
//     console.log("Bangladesh is a fokira desh");
// }

// let num = 7;
// while(num<=19){
//     console.log(num);
//     num = num + 2;
// }
// console.log(num);

//  let myFruits = ['Apple','Banana','orange','jackfruit','guava'];
//  let myLength =  myFruits.length;
//  console.log(myLength);
// myFruits[4] = 'nespati'
//  console.log(myFruits);
// let addMyfruits =myFruits.push('Cranberry','Finger Lime');
// console.log(myFruits);
// let LessMyfruits = myFruits.shift('Apple');
// console.log(myFruits);

// let myArray = ['Bangladesh','Canada','Pakistan','India',"Nepal","Butan"];
// for(let i = 0; i<myArray.length; i++){
//     console.log(myArray[i]);
// }

// let myNumber = [10, 30, 50, 70, 90, 120, 220, 240, 520, 630];

// for(let i = 0; i<myNumber.length; i++){
//     if(myNumber[i]>80){
//         console.log(myNumber[i]);
//     }
// }

// function multiply(numbers){
// let multiply = numbers;
// return multiply
// }

// var num = 10;
// var num2 = 20;
// var num3 = 40;
// var result = num * num2 * num3;

// let myFinalResult = multiply(result);
// console.log(myFinalResult);


// 3 Number multiply with function
function ThreeMultiplyNumber(num, num2, num3){
return num * num2 * num3
}

let myNumber = ThreeMultiplyNumber(6, 9, 8)
console.log(myNumber);
// create a object and add another value
let myObject = [
    {
        fName : "Helal",
        Lname :"Rahman",
        Age :42,
    },
    {
        fName : 'Masum',
        country : 'Bangladesh',

    }
]
myObject[1].country = "Pakistan";
myObject[0].Age = 60;
console.log(myObject);


//  Convert Feet To Inch With Function//
function feetToInch(feet){
return feet * 12;
}

let myFeet =  16;
let myResult = feetToInch(myFeet);
console.log(myResult);

// Convert centimeter To Meter With Function//

function centimeterToMeter(centimeter){
    let meter= centimeter / 100;
    return meter
}

let myCenterMeter = 2000;
let myMeterResult =centimeterToMeter(myCenterMeter);
console.log("Count Of Meter:",myMeterResult);
// Out Put Long Name return 
function bestFriend(friendArray){
    let mystore="";
for(let i =0; i<friendArray.length; i++){
    if(friendArray[i].length>mystore.length){
       mystore = friendArray[i];
    }
}
return mystore;
}
let myFriend = ['Mamun','Shovo', 'Ikbal', 'kamrul','Rayan', 'Ifran Khan', 'Nasim Khan'];
let myArray = bestFriend(myFriend)
console.log(myArray);

// Amount of sum Page//
function paperRequirements(a, b, c){
    return a*100 + b*200 + c*300;
}


console.log(paperRequirements(10, 20, 30));



// Return Positive Number
let Mynumber = [10, 20, 30, 40, 50, -5, -10, -30, -50, 12, 18, 30];

function myFunc(){
    let result = [];
    for(let i = 0; i<Mynumber.length; i++){
       if(Mynumber[i]<0){
        break;
       }
       if(Mynumber[i] % 2 === 0){
        result.push(Mynumber[i]);
       }
    }
    return result;
}
console.log(myFunc());

