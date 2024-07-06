let shoppingCart = [
    {name:'shoe', price:1200},
    {name:'shirt', price:2800},
    {name:'pant', price:3800},
    {name:'t-shirt', price:1600},
    {name:'belt', price:800},
];

function myShopping(products){
    let sum = 0;
for(let i = 0; i<products.length; i++){
    let myProduct = products[i];
    sum += myProduct.price;

}
return sum;
}

let Totalexpense = myShopping(shoppingCart);
console.log(Totalexpense);