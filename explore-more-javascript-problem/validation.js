let validation = (num, num2) => {
  if (typeof num !== "number" || typeof num2 !== "number") {
    return "please Enter Number";
  } else {
    return num + num2;
  }
};

console.log(validation(60, 120));

let multiply=(num,num2)=>{

return num *  num2
}

let myMultiply = multiply( 30 , 30 );
console.log(myMultiply);
