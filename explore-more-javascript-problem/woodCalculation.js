function woodCalculation(chairQuantity, tableQuantity, bedQuantity){
 const chairPerWood = 8;
 const tablePerWood = 9;
 const bedPerWood =  60;
 const charWood = chairPerWood * chairQuantity;
 const tablWood = tablePerWood * tableQuantity;
 const bedWood = bedPerWood  * bedQuantity;
 const totlaWood  = charWood + tablWood + bedWood;
 return totlaWood;
}

const myWoodCalculation = woodCalculation(5, 10, 2)
console.log(myWoodCalculation);
