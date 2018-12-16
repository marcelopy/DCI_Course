
// let resultOfMod = function(a,b) {
//   return a%b;
// };
//
// console.log(resultOfMod(3,2));
// console.log(resultOfMod(10,5));


// Factorial Ex

function factorial(num){
  let result=1;
  for (let i=1; i<=num; i++){
    result = result*i;
  }
  console.log(result);
}

factorial(4);
factorial(6);
factorial(10);


// Factorial ex 2
var i2=1;
var result2 = 1;
function factorial2(num2){
  if (i2<=num2){
    result2 = result2*i2;
    i2++;
    factorial2(num2);
  }
  return result2;
}

console.log(factorial2(4));
console.log(factorial2(6));
console.log(factorial2(10));
