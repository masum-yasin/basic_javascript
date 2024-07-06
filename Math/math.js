const result = Math.pow(10,8);
// console.log(result);

const num1 = 20;
const num2 = 45;
const gap =Math.abs(num1-num2);

// console.log(gap);
if(gap<10){
    console.log('both of two good friend');
}
else{
    console.log('not well two of friend realtionship');
}

// math.round//
const numer = 4.40362541;
const fullNumber = Math.round(numer);
// console.log(fullNumber);
const numer2 = 4.50;
const fullNumber2 = Math.round(numer2);
// console.log(fullNumber2);
const numbr1 = 450.5154;
const result1 =Math.ceil(numbr1);
// console.log(result1);

const result2 =Math.floor(16.2541);
// console.log(result2);

// random //

// const random = Math.round(Math.random()*100);
// console.log(random);
// const random2 = Math.random();
// console.log(random2);

for(let i = 0; i<20; i++){
    console.log(Math.round(Math.random()) *8);
}