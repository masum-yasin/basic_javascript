 let Numbers = [8, 16, 28, 30, 55, 75, 90, 110, 150, 180, 200];
 function findMinNumber(){
    let myMIN = Numbers[0];
    for(let i = 0; i<Numbers.length; i++){
        let minNum = Numbers[i];
    if(minNum<myMIN){
        myMIN = minNum;
    }
    }
    return myMIN;
 }

 let myMinresult = findMinNumber(Numbers);
 console.log(myMinresult);