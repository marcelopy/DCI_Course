var balls = 2;

switch (balls){
  case 1:
    console.log(`You have ordered ${balls} balls and the total price is 1$`);
    break;
  case 3:
    console.log(`You have ordered ${balls} balls and the total price is 2,5$`);
    break;
  case 4:
    console.log(`You have ordered ${balls} balls and the total price is 3$`);
    break;
  case 5:
    console.log(`You have ordered ${balls} balls and the total price is 3,3$`);
    break;
  default:
    console.log(`You have oredered ${balls} balls and the total price is 1,8$`);
}


var randomNumber = 864;
var standardWinnings = 10;
var jackpot = 1000;




if (randomNumber < 500){
  standardWinnings = 0;}
  else if (randomNumber < 700  || randomNumber >= 800 && randomNumber < 900) {
    standardWinnings = standardWinnings * 2;
  }  else if (randomNumber < 800) {
      switch (randomNumber) {
        case 776:
         standardWinnings = jackpot / 2;
         break;
         case 778:
         standardWinnings = jackpot / 5;
         break;
         case 777:
         standardWinnings = jackpot;
         break;
         default:
         standardWinnings = standardWinnings * 10;
      }
    }  else {
      standardWinnings = standardWinnings * 5;
    }

 console.log(`Total Winnings: ${standardWinnings}`);




 // from this part starts the Phone Selling program!

 var shoppingCart = 0;
 var priceSmartphone = 600;
 var priceHeadphones = 50;
 var priceCover = 20;
 var buyingSmartphone = true;
 var buyingHeadphones = true;
 var buyingCover = 'green';
 var buyingCustomer = true;

 if (buyingCustomer) {
   if (buyingSmartphone&&buyingHeadphones&&buyingCover){
     shoppingCart =(priceSmartphone+priceHeadphones+priceCover)*0.85
   }else if (buyingSmartphone&&buyingHeadphones) {
     shoppingCart = (priceSmartphone+priceHeadphones)*0.9
   }else if (buyingCover) {
     switch (buyingCover) {
       case 'green':
       shoppingCart = (priceSmartphone+priceCover)*0.93;
         break;

       case 'pink':
       shoppingCart = (priceSmartphone+priceCover)*0.88;
         break;

       case 'orange':
       shoppingCart = (priceSmartphone+priceCover)*0.85;
         break;
       default:
        shoppingCart = (priceSmartphone+priceCover)*0.95;
     }

   }else {
     shoppingCart = priceSmartphone;
   }

 }else {
   shoppingCart = shoppingCart;
 }


console.log(`The total amount of the purchase is ${shoppingCart} $`);




// Practice makes perfect

// Ex 1

var number = -77;

if (number > 0) {
  console.log(`The number is positive`);

}else if (number < 0) {
  console.log(`The number is negative`);
}else {
  console.log(`The number is zero`);
}

// Ex 2

var number = 54;

console.log(`The result is ${number*-1}`)


// Ex 3

var num1 = 3;
var num2 = 1;
var num3 = 2;
var num4 = 2;
var num5 = 2;

console.log(`The sum total is ${(num1+num2+num3+num4+num5)} and the average is ${(num1+num2+num3+num4+num5)/5}`);

// Ex 4

var num1 = 6;
var num2 = 6;
var num3 = 7;
var biggernum = 0;

if (num1>num2&&num1>num3){
    biggernum = num1;
  }else if (num2>num3&&num2>num1){
    biggernum = num2;
  }
else if (num3>num1&&num3>num2){
  biggernum = num3;
} else biggernum = 'a tie';


console.log(`The bigger number is ${biggernum}`);


// Ex 5

var numMonth = 10;
var month = '';

switch (numMonth){
  case 1:
  month = 'January has 31 days';
  break;
  case 2:
  month = 'February has 28 days';
  break;
  case 3:
  month = 'March has 31 days';
  break;
  case 4:
  month = 'April has 30 days';
  break;
  case 5:
  month = 'May has 31 days';
  break;
  case 6:
  month = 'June has 30 days';
  break;
  case 7:
  month = 'July has 31 days';
  break;
  case 8:
  month = 'August has 31 days';
  break;
  case 9:
  month = 'September has 30 days';
  break;
  case 10:
  month = 'October has 31 days';
  break;
  case 11:
  month = 'November has 30 days';
  break;
  case 12:
  month = 'December has 31 days';
  break;
}
console.log(month);

// Ex 6

var year = 1998;

if (year%4 !==0) {
  leapYear = 'not';
}else leapYear = '';

console.log(`The year ${year} is ${leapYear} a leap year`);


// Ex 7

var num1 = 8;
var num2 = 5;
var biggerNum = 0;
var smallerNum = 0;

if (num1>num2){
  biggerNum = num1;
  smallerNum = num2;
}else {
  biggerNum = num2;
  smallerNum = num1;
}

totalN = biggerNum-smallerNum+1;

console.log((totalN*(biggerNum+smallerNum))/2)


// Loops

var counter =-500;

while (counter <=500) {
  console.log(counter);
  counter++;
}

// Fizzbuzz ex

var currentNum = 1;
var endNum = 100;

while (currentNum <= endNum) {

  if (currentNum % 3 === 0 && currentNum % 5 === 0){
    console.log(`FizzBuzz`);
    }else if (currentNum % 3 === 0){
          console.log(`Fizz`);
        }else if (currentNum % 5 === 0){
          console.log('Buzz');
        }else {
          console.log(`${currentNum}`);
        }
  currentNum++
}



// Odd or even number ex

var currentNum = 1;
var endNum = 100;

while (currentNum <= endNum) {

currentNum % 2 === 0 ? console.log(`${currentNum} is even`) : console.log(`${currentNum} is odd`);

currentNum++;
}




// Multiplication Table

var numToMultiply = 9;
var counter = 1;
var tableNumber = 0;

while (counter <=10){
  tableNumber = numToMultiply*counter;
  console.log(tableNumber);
  counter++;
}


// Payment exp

var employeeId = 1;
var balance = 100000;
var nextSalary =0;

// while ((balance-nextSalary)>=0){
//   if (employeeId===1){
//     balance = balance -7500;
//     nextSalary = 10000;
//
//     }else if(employeeId===2){
//       balance = balance - 10000;
//       nextSalary = 3000;
//
//       }else if(employeeId<5){
//         balance = balance-3000;
//         nextSalary= 3000;
//
//         if (employeeId===4){
//           nextSalary = 2000;
//
//         }}else if(employeeId<9){
//           balance = balance-2000;
//           nextSalary= 2000;
//
//           if (employeeId===8){
//             nextSalary = 1500;
//
//           }}else if(employeeId<13){
//               balance = balance-1500;
//               nextSalary= 1500;
//
//               if (employeeId===12){
//                 nextSalary = 1000;
//
//               }}else if(employeeId<63){
//                   balance = balance-1000;
//                   nextSalary= 1000;
//
//                   if (employeeId===62){
//                     nextSalary = 5000;
//
//                   }}else if(employeeId<68){
//                     balance = balance-5000;
//                     nextSalary= 5000;
//
//                     if (employeeId===67){
//                       nextSalary = 4000;
//
//                     }}else {balance=balance-4000;
//                       nextSalary = 4000;
//                   }
//                      employeeId++;
// }
//
// console.log(`In the balance remains ${balance} $`);
// console.log(`and ${72-(employeeId-1)} employees have not been paid`);



for (employeeId=1;(balance-nextSalary)>=0;employeeId++){
  if (employeeId===1){
    balance = balance -7500;
    nextSalary = 10000;

    }else if(employeeId===2){
      balance = balance - 10000;
      nextSalary = 3000;

      }else if(employeeId<5){
        balance = balance-3000;
        nextSalary= 3000;

        if (employeeId===4){
          nextSalary = 2000;

        }}else if(employeeId<9){
          balance = balance-2000;
          nextSalary= 2000;

          if (employeeId===8){
            nextSalary = 1500;

          }}else if(employeeId<13){
              balance = balance-1500;
              nextSalary= 1500;

              if (employeeId===12){
                nextSalary = 1000;

              }}else if(employeeId<63){
                  balance = balance-1000;
                  nextSalary= 1000;

                  if (employeeId===62){
                    nextSalary = 5000;

                  }}else if(employeeId<68){
                    balance = balance-5000;
                    nextSalary= 5000;

                    if (employeeId===67){
                      nextSalary = 4000;

                    }}else {balance=balance-4000;
                      nextSalary = 4000;
                  }

}

console.log(`In the balance number 2, it remains ${balance} $`);
console.log(`and ${72-(employeeId-1)} employees have not been paid`);


// Buying clothes ex

var tshirt = 10;
var jeans = 30;
var jacket = 150;
var balance = 150;
var customer=1;
var firstPurchaseTshirt=30;
var firstPurchaseJeans = 60;
var firstPurchaseJacket = 150;


// for (var customer=1; customer<=78; customer=customer+3){
//
// balance=balance+240;
// }

for (var customer=1; customer<=78; customer++){
  var customerAmount=0;
  if (customer%3===0){
    balance=balance+jacket;
    customerAmount=jacket;
  }else if(customer%3===2 || customer===2){
    balance=balance+(jeans*2);
    customerAmount=jeans*2;
  }else {
    balance=balance+(tshirt*3);
    customerAmount=tshirt*3;
  }
  console.log(`The customer number ${customer} paid ${customerAmount} $ and the balance at the moment is ${balance} $`)
}

console.log(`The second balance of the day is ${balance}$`);

// Buying clothes ex 2

var tshirt = 10;
var jeans = 30;
var jacket = 150;
var balance = 150;
var customer=1;
var customerRepetition=3;
var firstPurchaseTshirt=30;
var firstPurchaseJeans = 60;
var firstPurchaseJacket = 150;




for (var customer=1; customer<=78; customer=customer+customerRepetition){

  for (var customerRepetitionLoop=1; customerRepetitionLoop<=customerRepetition; customerRepetitionLoop++){
  if (customerRepetitionLoop===1){
    balance=balance+jacket;
  }else if(customerRepetitionLoop===2){
    balance=balance+(jeans*2);
  }else {
    balance=balance+(tshirt*3);
  }
  }
}

console.log(`The third balance of the day is ${balance}$`);
