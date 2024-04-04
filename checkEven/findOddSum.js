// function getSumOfAnArray(numbers){
//     let sum = 0
//     for(let i =0; i<numbers.length; i++){
//         const index =  i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
   
// }

// const myArray  = [40, 45, 50, 55, 60, 65, 70, 75, 80]
// getSumOfAnArray(myArray);


function findOddSum(numbers){
    const sum  = 0;
    for(let i = 0; i<numbers.length; i++){
        const element = numbers[i];
        sum = sum+element
        console.log(element, sum);
    }
    return sum
   
}
const newArray =  [5, 7, 8, 10, 45, 30];
findOddSum(newArray)