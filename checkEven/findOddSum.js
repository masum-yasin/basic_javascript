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


// function findOddSum(numbers){
//     let sum  = 0;
//     for(let i = 0; i<numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element
//         console.log(index, element, sum);
//     }
//     return sum
   
// }
// const newArray =  [5, 7, 8, 10, 45, 30];
// findOddSum(newArray);

function getOddNumberOfAnArray(numbers){
    let sum=0
for(let i = 0; i<numbers.length; i++){
   
    const element = numbers[i];
    if(element % 2 !== 0){
        sum += element;
    }
   
}
return sum;

}

const myArray = [12, 66, 37, 70, 80, 85, 45, 55, 58];
const oddSum  = getOddNumberOfAnArray(myArray);
console.log(oddSum);



       