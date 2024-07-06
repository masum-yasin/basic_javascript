const numbers = [40, 50, 70, 30, 20, 90, 70];
// for(let i = 0; i<numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for( const number of numbers){
//     console.log(number);
// }

const products = [
    {name: 'samsung phone', model:21547, price:12547},
    {name: 'lenovo laptop', model:23614, price:42500},
    {name: 'nokia Phone', model:96541, price:4500},
    {name: 'asus laptop', model:8500, price:85000},
    {name: 'walton Phone', model:21547, price:9000},
    {name: 'nova Phone', model:21547, price:32000},
    {name: 'vivo phone', model:897452, price:89000},
    {name: 'mac laptop', model:21547, price:63000},
    {name: 'dell laptop', model:21547, price:12547},
]
// for(let i = 0; i<products.length; i++){
//  let product = products[i];
//  console.log(product);
// }

function myProduct(products, search){
    let matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
       
    }
    return matched;
}
const result = myProduct(products, 'phone')
console.log(result);

