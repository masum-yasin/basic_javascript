function reverseString(text){
    let reversed = '';
    for(let i = text.length-1; i>=0; i--){
        const element = text[i];
        reversed = element + reversed
        console.log(element, reversed);
    }
    return reversed;
}
const myString = "Tasmia is my Love since 10 years";
const reversed= reverseString(myString);
console.log(reversed);