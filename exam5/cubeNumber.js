// function cubeNumber(number){
// return Math.pow(number,3)
// }
// const result1 = cubeNumber(3);
// const result2 = cubeNumber(4);
// console.log(result1);
// console.log(result2);




function cubeNumber(number){
if(typeof number !== 'number' || isNaN(number)){
    return 'Error: Please input a valid Number';
}
return Math.pow(number, 3)
}
const result1 = cubeNumber('a');
const result2 = cubeNumber(4);
console.log(result1);
console.log(result2);