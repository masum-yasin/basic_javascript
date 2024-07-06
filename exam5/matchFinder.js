// function matchFinder(string1, string2){
// const matches = [];
// for(const item1 of string1){
//     for(const item2 of string2){
//         if(item1.toLowerCase().includes(item2.toLowerCase())){
//             matches.push(`"${item1}" found in "${item2}"`)
//         }
//     }
// }

// if(matches.length>0){
//     return "Found Matching word in the string";
// }
// else{
//     return "Not Found Matching String";
// }
// }

// const array1 = ['John Doe','Javascript', 'Peter Parker', "Pen", "Peter parker"]
// const array2 = ['ohn', 'code', "Pen", 'Pet']
// const result = matchFinder(array1, array2);
// console.log(result);

function matchFinder(string1, string2) {
  const matches = [];
  for (const item1 of string1) {
    for (const item2 of string2) {
      if (item1.toLowerCase().includes(item2.toLowerCase())) {
        matches.push(`"${item1}" in found "${item2}"`);
      }
    }
  }
  if (matches.length > 0) {
    return "true";
  } else {
    return "false";
  }
}
const array1 = [
  "John Doe",
  "Javascript",
  "Peter Parker",
  "Pen",
  "Peter parker",
];
const array2 = ["ohn", "code", "Pen", "Pet"];
const result = matchFinder(array1, array2);
console.log(result);
