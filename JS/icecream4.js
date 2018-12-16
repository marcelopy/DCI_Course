var totalMoney=0;

function howMuchMoneyiHave(dayOfTheWeek) {

  if (typeof dayOfTheWeek !== `number` || dayOfTheWeek>7 || dayOfTheWeek<1){
    console.log(`The value introduced must be a number between 1 (Monday) and 7 (Sunday)`);
    return;
  }
  switch(dayOfTheWeek){
    case 1:
    totalMoney += 40;
    break;
    case 2:
    totalMoney += 60;
    break;
    case 3:
    totalMoney += 80;
    break;
    case 4:
    totalMoney += 100;
    break;
    case 6:
    totalMoney += 20;
    break;
    default:
    totalMoney +=0;
  }
    dayOfTheWeek++;

  if (dayOfTheWeek<=7){
  howMuchMoneyiHave(dayOfTheWeek);
} else {console.log(`The amount of money you will earn the rest of the week is ${totalMoney} $`);
}
}

howMuchMoneyiHave(1);
howMuchMoneyiHave(`red`);
howMuchMoneyiHave(-3);
howMuchMoneyiHave(12);
howMuchMoneyiHave(6);
