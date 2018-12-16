// let counter = 5;
// let countdown= setInterval(function(){
//   console.log(counter);
//   counter --;
//   if (counter === 0){
//     console.log(`Game over`);
//     clearInterval(countdown);
//   }
//
// }, 1000);



// let counter2=0;
//
// let countdown2 = setTimeout(function(){
//   counter2++;
//   console.log(counter2);
// },5000);
//
// console.log(counter2);

let superCountdown = setInterval (function() {
  let yearsInMiliseconds = 31536000000;
  let xmas = new Date(2018, 9, 15);
  let today = new Date();
  if (xmas<=today){
    console.log(`Merry Xmas!`);
    return;
  }

  let remainingTime = xmas - today;
  let remainingYears = remainingTime/yearsInMiliseconds;
  let roundedYears = Math.floor(remainingYears);

  let remainingDays = (remainingYears-roundedYears)*365;
  let roundedDays = Math.floor(remainingDays);

  let remainingHours = (remainingDays-roundedDays)*24;
  let roundedHours = Math.floor(remainingHours);

  let remainingMinutes = (remainingHours-roundedHours)*60;
  let roundedMinutes = Math.floor(remainingMinutes);

  let remainingSeconds = (remainingMinutes-roundedMinutes)*60;
  let roundedSeconds = Math.floor(remainingSeconds);

  // console.log(objectiveDate)
  // console.log(remainingTime);
  // console.log(remainingYears);
  // console.log(remainingDays);
  // console.log(roundedDays);
  // console.log(remainingHours);
  // console.log(roundedHours);
  // console.log(remainingMinutes);
  // console.log(roundedMinutes);

  console.log(`There is ${roundedYears} years, ${roundedDays} days, ${roundedHours} hours,
    ${roundedMinutes} minutes and ${roundedSeconds} seconds before Xmas`)

}, 1000);
