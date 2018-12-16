// Multiply table ex option 1


// function multiply(numberToMultiply){
// if (numberToMultiply<1 || numberToMultiply>10 || typeof numberToMultiply !==`number`) {
//   console.log(`Please use a NUMBER between 1 and 10`);
// } else for (var i=1; i<=10; i++){
//
//   console.log(numberToMultiply*i);
// }
// }
// multiply(3);
// multiply(-12);
// multiply(7);
// multiply(11);


// Multiply table ex option 2

// var numberToMultiply = 2;
//
// if (numberToMultiply<1 || numberToMultiply>10 || typeof numberToMultiply !==`number`) {
//   console.log(`Please use a NUMBER between 1 and 10`);
// } else for (var i=1; i<=10; i++){
//   console.log(numberToMultiply*i);
// }

// Multiply table ex option 3

function multiply(numberToMultiply){
if (numberToMultiply<1 || numberToMultiply>10 || typeof numberToMultiply !==`number`) {
  console.log(`Please use a NUMBER between 1 and 10`);
  return;
} else {
  console.log(`Multiplication table for ${numberToMultiply}`);
  for (var i=1; i<=10; i++){

  console.log(numberToMultiply*i);
}
numberToMultiply++;
if (numberToMultiply<=10){
multiply(numberToMultiply);
} else return;
}
}
multiply(1);
