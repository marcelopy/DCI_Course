// Last day of each month ex.

// Write a function that calculates what is the last day of each month on a given year.  Pass the given year as an argument to make this the most reusable way you can.
let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

let days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];


let lastDayOfMonth = function (yearGiven){
  for (i=1; i<=12; i++){
    let firstDay = new Date(yearGiven, i, 0);
    console.log (`In the year ${yearGiven}, the last day of ${months[i-1]} is a ${days[firstDay.getDay()]}`);
  }
}


lastDayOfMonth(2018);
