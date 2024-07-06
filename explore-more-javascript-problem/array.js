const country = "Bangladesh";
const number = 420;
const isIndependent = true;
const students = {
    id:21,
    Name:"Kamrul Hasan",
    email:"abc@gmail.com",
    class: 11,
}
const studentAge = [20, 30, 40, 50, 60, 70, 80]

function myFunc(num, num2, num3){
    let sum =  num +  num2 +  num3
    return sum;
}

console.log(myFunc(40,  60, 30));


console.log(typeof country);
console.log(typeof number);
console.log(typeof isIndependent);
// checki array using Array.isArray;
console.log(Array.isArray(studentAge));
console.log(typeof students);
console.log(typeof myFunc);
// Check to 12 includes have to the studentAge array;
console.log(studentAge.includes(12));

// concate:function
let myArray = [20, 30, 40, 50, 60, 70, 80, 90, 100];
let arrayConcate = myArray.concat(studentAge);
console.log(arrayConcate);