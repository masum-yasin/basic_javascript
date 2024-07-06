let first = 8;
let second = 11;
console.log(first, second);
// not correct way
// first = second;
// second = first;          
// console.log(first,second);

//this correct Way approach-1;

// const tempStore = first;
// first = second;
// second = tempStore;
// console.log(first, second);

//this correct Way approach-2 array destructuring;

[first, second] = [second, first];
console.log(first, second);