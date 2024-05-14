let bestFriend = (friends)=>{
    let longName = "";
for(let i = 0; i<friends.length; i++){
   if(friends[i].length>longName.length){
    longName = friends[i];
   }
}
return longName
}

let myFrind = ['mamun', 'shovo', 'rayan', 'sazzed', 'munna', 'sakib', 'imran','esrak Toiob'];
let findLongName = bestFriend(myFrind)
console.log("This is Long Name:",findLongName);