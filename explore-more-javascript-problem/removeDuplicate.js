const myFriend = ['mamun', 'shovo', 'sadid', 'rayan', 'alluddhin', 'mizanur','sakib', 'mizanur','mamun','rayan','masum'];
function removeDuplicate(friends){
    let unique = [];
    for(let i = 0; i<friends.length; i++){
        const name = friends[i];
      if(unique.includes(name)===false){
        unique.push(name);
      }
   
    }
    return unique;
  

}

const myResult = removeDuplicate(myFriend);
console.log(myResult);