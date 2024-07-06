/* 
if ticket numbers is less than 100, per ticket price:100
if ticket numbers is more than 100, but less than 200.First 100 tickets will be 100 taka.rest ticket will be 90 taka per price
. if you purchase more than 200 tickets
first 100 ----->100tk
101 ---->200 90tk
200+ -------->70tk

*/

const First100TicketRate = 100;
const Second100TicketRate = 90;
const RestTicketRate = 70;

function myTicket(TicketQuantity) {
  if (TicketQuantity <= 100) {
    const FirstTicketPrice = First100TicketRate * TicketQuantity;
    return FirstTicketPrice;
  } else if (TicketQuantity <= 200) {
    const First100TicketPrice = First100TicketRate * 100;
    const RestTicketQuanity = TicketQuantity - 100;
    const RestTicketPrice = RestTicketQuanity * 90;
    const Ticket1stand2ndPrice = First100TicketPrice + RestTicketPrice;
    return Ticket1stand2ndPrice;
  } else {
    const FirstTicketPrice = First100TicketRate * 100;
    const SecondTicketPrice = Second100TicketRate * 100;
    const RestT3rdTicketQuantity = TicketQuantity - 200;
    const Rest3rdTicketPrice = RestT3rdTicketQuantity * 70;
    const TotalCost = FirstTicketPrice + SecondTicketPrice + Rest3rdTicketPrice;
    return TotalCost;
  }
}

let myTicketPrice = myTicket(201);
// console.log(myTicketPrice);

// let calculate = (tiket) => {
//   let totalPrice;

//   if (tiket <= 100) {
//     totalPrice = tiket * 100;
//   } else if (tiket <= 200) {
//     totalPrice = 100 * 100 + (tiket - 100) * 90;
//   } else {
//     totalPrice = 100 * 100 + 100 * 90 + (tiket - 200) * 70;
//   }

//   return totalPrice;
// };

// console.log(calculate(201));

let calculate = (Ticketquantity)=>{
 let TicketTotalconst;
 if(Ticketquantity<=100){
    TicketTotalconst = 100 * Ticketquantity;
    return TicketTotalconst;
 }
else if(TicketTotalconst<=200){
    TicketTotalconst  = 100 * 100 + (Ticketquantity-100) * 90;
    return TicketTotalconst;
}

else{
    TicketTotalconst = 100 * 100 + 100 * 90 + (Ticketquantity-200) * 70;
    return TicketTotalconst;
}

}
console.log(calculate(201));