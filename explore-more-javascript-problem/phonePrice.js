let phones = [
    {
        name:'samsung', camera:12, price:42000, color:"yellow"
    },
    {
        name:'iphone', camera:8, price:105000, color:"sliver"
    },
    {
        name:'xoemai', camera:10, price:26000, color:"yellow"
    },
    {
        name:'opp', camera:16, price:30000, color:"yellow"
    },
    {
        name:'walton', camera:8, price:22000, color:"yellow"
    },
    {
        name:'nokia', camera:6, price:18000, color:"yellow"
    },
]

function PhonePriceCalculation(){
    let cheapest =phones[0];
for(let i = 0; i<phones.length; i++){
    
    const phone = phones[i];
    if(phone.price<cheapest.price){
        cheapest = phone;
    };
}
return cheapest;
}

const lowestPhonePrice = PhonePriceCalculation(phones)
console.log(lowestPhonePrice);