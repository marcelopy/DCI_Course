let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];


let dateOfBooking = function(desiredDateOfEvent){
  let currentDate = new Date();
  let dateOfEvent = new Date(desiredDateOfEvent);

  // console.log(currentDate);
  // console.log(dateOfEvent);

  if( dateOfEvent > currentDate){
    let monthOfEvent = months[dateOfEvent.getMonth()];
    console.log(`The event of the ${dateOfEvent.getDate()}th ${monthOfEvent}, ${dateOfEvent.getFullYear()} is booked succesfully`);
  } else {console.log(`Please choose a date that is after today ${currentDate}`)};
}
dateOfBooking(`2030-05-11`);

console.log(` `);

// Is it a weekend? ex.

// Create a function that accepts a specific date given as an argument and returns a message if the day of the specific date is a weekend day or not.


let checkWeekend = function(date){
  console.log(date);
  if(date.getDay()===0 || date.getDay()===6){
    console.log(`It is a weekend!`);
  } else { console.log(`It is a weiterbildung date!!`);
  }
}

let today = new Date();
let randomDate = new Date(2018, 5, 23);

checkWeekend(today);
checkWeekend(randomDate);

console.log(` `);
