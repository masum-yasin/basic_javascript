function reverseWord(text){
    const word = text.split(' ');
    let result = [];
   
for(let i = word.length-1; i>=0; i--){
const element = word[i];
result.push(element);    

}
return result;
}

const myString = "Tasmia is a clever Girl";
const reversed = reverseWord(myString);
console.log(reversed);