let myBazer = [
    {product:'suger', price:180, quantity:3},
    {product:'lentil', price:150, quantity:2},
    {product:'ata', price:70, quantity:5},
    {product:'noodles', price:210, quantity:2},
    {product:'potato', price:70, quantity:10},
    {product:'oil', price:210, quantity:15},
]

function myProduct(products){
    let sum = 0;
for(let i =0; i<products.length; i++){
    let totlaProduct = products[i];
    sum += totlaProduct.price * totlaProduct.quantity;
    
}
return sum;
}

let Totalexpense = myProduct(myBazer);
console.log(Totalexpense);