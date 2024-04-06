function sumOfNumber(numbers){
    let sum = 0;
    for(i = 0; i<numbers.length; i++){
        const element = numbers[i];
        sum += element;
     
    }
    return sum;
   
}
const myNumber  = [42, 50, 48, 42, 50, 52, 53, 44];
const result = sumOfNumber(myNumber);
console.log(result);
