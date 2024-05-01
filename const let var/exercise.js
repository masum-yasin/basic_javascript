
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

function ThreeMultiplyNumber(num, num2, num3){
return num * num2 * num3
}

let myNumber = ThreeMultiplyNumber(6, 9, 8)
console.log(myNumber);

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



