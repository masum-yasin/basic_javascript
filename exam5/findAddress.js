function findAddress(obj){
    const values = Object.values(obj)
if(values.length ==3){
    return values;
}
else if(values.length ===2){
    return values.map(value => value + "__")
}
else if(values.length ===1){
    return values.map(value => value + "__" +  "__")
}
}






let myAddress = {
    street: 10,
    house:154, 
    society: "Earth Property",

}

let myAddress2 = {
    street:10,
    society: "Earth Perfect"
}
let myAddress3 = {
    street:10
}
const result = findAddress(myAddress);
const result2 = findAddress(myAddress2);
const result3 = findAddress(myAddress3)
console.log(result);
console.log(result2);
console.log(result3);