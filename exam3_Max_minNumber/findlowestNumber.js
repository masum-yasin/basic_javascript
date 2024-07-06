function findLowestHeight(numbers){
    let lowest = numbers[0];
for(let i = 0; i<numbers.length; i++){
    const element = numbers[i];
    if(element<lowest){
        lowest = element;
    }
    
}
return lowest;

}

const heights = [167, 190, 120, 165, 137, 250, 50];
const smallest = findLowestHeight(heights);
console.log('One of the lowest height:', smallest);
