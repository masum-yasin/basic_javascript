let number = [10, 15, 20, 30, 55, 65, 75, 90, 100, 210, 310, 850];

function findMaxNumber(){
    let myNumber =[];
    for(let i = 0; i<number.length; i++){
        let numElement = number[i];
        if(numElement>myNumber){
            myNumber = numElement;
        }
    
    }
    return myNumber;
}
let MaxNumber = findMaxNumber(number);
console.log(MaxNumber);