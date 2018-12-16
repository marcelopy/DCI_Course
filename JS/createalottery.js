// Create a Lottery ex.

let lotteryGenerator = function(howManyPlays){
  let totalWinnings = 0;
  for (i=1; i<=howManyPlays;i++){
    let luckyNumber = Math.ceil(Math.random()*100);
    let userNumber = Math.ceil(Math.random()*100);
    let userWinnings = 0;

    if (luckyNumber===userNumber){
      userWinnings = 100;
    } else if((Math.abs(luckyNumber-userNumber))<10){
      userWinnings = (100 - (Math.abs(luckyNumber-userNumber))*10)
    } else {userWinnings=0};
    console.log(`The user's number is ${userNumber}, the lucky number is ${luckyNumber}, and the user won ${userWinnings}$.`);
    totalWinnings = totalWinnings+userWinnings;
  }
  console.log(`This player played ${howManyPlays} games and won a total of ${totalWinnings}$`);
}

lotteryGenerator(5);


console.log(` `);
