
// Pick a random food to eat ex.


let favFoods = ['bananas', 'rice', 'chocolate', 'pizza', 'mett', 'bread', 'onions'];
let daysOfWeek = [`Moday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];

let pairingProducts = function(staticElements, randomElements){
  for (i=0; i<staticElements.length; i++){
    let elementOfTheDay = Math.trunc(Math.random()*(randomElements.length));
    console.log(`On ${staticElements[i]} I will have ${randomElements[elementOfTheDay]}`);
    randomElements.splice(elementOfTheDay,1);
  };
};

pairingProducts(daysOfWeek, favFoods);

console.log(` `);

// Random number within a range ex.

// let randomNumberInARange = function(minNumber, maxNumber){
//   let arrayOfLimits =[];
//   for(i=minNumber; i<=maxNumber; i++){
//     arrayOfLimits.push(i);
//   }
//   console.log(arrayOfLimits);
//   let randomIndex = Math.floor(Math.random()*arrayOfLimits.length);
//   console.log(randomIndex);
//   let randomNumber = arrayOfLimits[randomIndex];
//   console.log(randomNumber);
//   console.log(`The random number between ${minNumber} and ${maxNumber} is ${randomNumber}`)
// }
//
// randomNumberInARange(50,55);
//
// console.log(` `);

// Random number within a range ex. 2

let randomNumberInARange = function(minNumber, maxNumber){
  let rangeOfNumbers = Math.abs((maxNumber-minNumber)+1);
  let randomNumber = parseInt((Math.random()*rangeOfNumbers)+minNumber);
  console.log(randomNumber);
  console.log(`The random number between ${minNumber} and ${maxNumber} is ${randomNumber}`)
}

randomNumberInARange(50,55);

console.log(` `);
