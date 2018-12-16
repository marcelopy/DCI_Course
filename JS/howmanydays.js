// How many days remained? ex.


let daysToEndOfMonth = function(dateIntroduced){
  let startingDate = dateIntroduced.getDate();
  let startingMonth = dateIntroduced.getMonth();
  let counter = 0;

  for (i=startingDate; dateIntroduced.getMonth()===startingMonth; i++){
    dateIntroduced.setDate(dateIntroduced.getDate()+1);
    counter++;
  }
  console.log (`It is ${counter-1} days until the end of the month`);
  console.log (startingDate);
  console.log (startingMonth);

}

let randomDate = new Date(2028, 1, 26);

daysToEndOfMonth(randomDate);
