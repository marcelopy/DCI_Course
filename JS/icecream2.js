// Prime Numbers exp


// Prime numbers solution 2

for (var x=1; x<=100; x++){
  var isPrime = true;
  for (var y = 2; y<= x-1; y++){
    if(x%y === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime){
    console.log(`${x}`);
  }
}


// Functions ex

var x= 2;
var y=5;
console.log(x+y);



// Function ex 2

function typeOfVariable(){
  var a=-34;
  // console.log(typeof a)
  return (typeof a);
}
var a = typeOfVariable();

console.log(a);



// Fizzbuzz ex refactored

console.log(`FizzBuzz results`);

function fizzBuzz(currentNum, endNum, divisorOne, divisorTwo){

while (currentNum <= endNum) {

  if (currentNum % divisorOne === 0 && currentNum % divisorTwo === 0){
    console.log(`FizzBuzz`);
  }else if (currentNum % divisorOne === 0){
          console.log(`Fizz`);
        }else if (currentNum % divisorTwo === 0){
          console.log('Buzz');
        }else {
          console.log(`${currentNum}`);
        }
  currentNum++
}
}

fizzBuzz(100,1,3,5);


// Assing grade ex

function assignGrade(points){
  var note;
  if (points<50){
    note = `Not Pass! Try again next time.`
  } else if (points <=60){
    note = `D`;
  } else if (points <=80){
    note = `C`;
  } else if (points <=90){
    note = `B`;
  } else if (points <= 98){
    note = `A`;
  } else if (points == 99){
    note = `Almost perfect`;
  } else if (points == 100){
    note = `Take a day off tomorrow`;
  }
  console.log (note);
}

assignGrade(2);
assignGrade(100);
assignGrade(75);
assignGrade(99);
assignGrade(50);


// Calculate retirement money ex
console.log(`Here is the exercise about retirement money:`);

function totalSavings(actualAge, retirementAge, monthlyIncome, percentageSaved) {

  if (actualAge>=retirementAge){
    return `Calculate your past memories mate!`;
  }

   var totalSavings = ((retirementAge-actualAge)*12)*((monthlyIncome*percentageSaved)/100);
  console.log(`The total amount of savings after ${retirementAge-actualAge} years is ${totalSavings} $`);
  return;
};

var totalSavings = totalSavings(45,65,2000,10);




// Square of a number ex

console.log(`This returns the square of a number`);

function squareNumber(baseNumber, power){

  if (typeof baseNumber !== `number`|| typeof power !== `number`){
     console.log(`The values introduced must be numbers`);
     return;
  }
  var squareNumber = baseNumber**power;
  console.log(`The number of ${baseNumber} to the power of ${power} is ${squareNumber}`);
}

squareNumber(5, 5);
squareNumber('red', 4);
squareNumber(-3, 'blue');
