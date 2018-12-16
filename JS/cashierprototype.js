// let shopValues = {
//   shopTotalBalance: 0,
//   tshirtsPrice: 10,
//   jeansPrice: 30,
//   jacketsPrice: 150,
//   tshirStock: 100,
//   jeansStock: 100,
//   jacketStock: 100,
//   calculateSale: function(quantityOfTshirt, quantityOfJeans, quantityOfJacket){
//     if (this.quantityOfTshirt>shopValues.tshirStock||this.quantityOfJeans>shopValues.jeansStock||this.quantityOfJacket>shopValues.jacketStock){
//       console.log(`Sorry, we don't have the amount of items you want`);
//       return;
//     } else {
//       shopValues.tshirStock-=this.quantityOfTshirt;
//       shopValues.jeansStock-=this.quantityOfJeans;
//       shopValues.jacketStock-=this.quantityOfJacket;
//       let customerPayment=this.quantityOfTshirt*shopValues.tshirtsPrice+this.quantityOfJeans*shopValues.jeansPrice+this.quantityOfJacket*shopValues.jacketsPrice
//       this.customerCounter++;
//       cashierBalance=cashierBalance+customerPayment;
//       shopValues.shopTotalBalance+=cashierBalance;
//       console.log(`Cashier ${this.cashierId} has so far ${this.customerCounter} clients. The Cashier Balance is ${this.cashierBalance} $ and the Shop Total balance is ${shopValues.shopTotalBalance} $`);
//       console.log(shopValues.tshirStock, shopValues.jeansStock, shopValues.jacketStock);
//     }
//   }
//
//   }
//
// let profileOfCashier = function(cashierId, cashierFullName){
//   let customerCounter=0;
//   let cashierBalance=0;
// };
//
// let cashierOne = new profileOfCashier(1, `Marcelo`);
// let cashierTwo = new profileOfCashier(2, `Murhaf`);
// let cashierThree = new profileOfCashier(3, `Eugen`);
//
// Object.setPrototypeOf(cashierOne, shopValues);
// Object.setPrototypeOf(cashierTwo, shopValues);
// Object.setPrototypeOf(cashierThree, shopValues);
//
// cashierOne.calculateSale(2, 8, 6);
// cashierTwo.calculateSale(7, 1, 0);
// cashierOne.calculateSale(90, 8, 6);
// cashierThree.calculateSale(2, 0, 12);


let shop = {
  tshirtPrice: 10,
  jeansPrice: 30,
  jacketPrice: 150,
  tshirtStock: 100,
  jeansStock: 100,
  jacketStock: 100,
  balance: 0,
  createSale: function(numOfShirts, numOfJeans, numOfJackets) {

    if (numOfShirts > shop.tshirtStock){
      console.log(`Sorry, we don't have enough T-Shirts, we can sell ${shop.tshirtStock} to you`);
      numOfShirts = shop.tshirtStock;
    };
    if (numOfJeans > shop.jeansStock){
      console.log(`Sorry, we don't have enough Jeans, we can sell ${shop.jeansStock} to you`);
      numOfJeans = shop.jeansStock;
    };
    if (numOfJackets > shop.jacketStock){
      console.log(`Sorry, we don't have enough Jackets, we can sell ${shop.jacketStock} to you`);
      numOfJackets = shop.jacketStock;
    };

    let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;
    this.numOfSales += 1;
    this.cashierBalance += costOrder;
    shop.balance += costOrder;
    shop.tshirtStock -= numOfShirts;
    shop.jeansStock -= numOfJeans;
    shop.jacketStock -= numOfJackets;
    console.log(`The cashier ${this.id} - ${this.employee} has made a new sale! The balance of this cashier now is ${this.cashierBalance} $.`);
    console.log(`After this sale the total balance of the shop is ${shop.balance}$`);
    console.log(`We have now in stock: ${shop.tshirtStock} T-Shirts, ${shop.jeansStock} Jeans and ${shop.jacketStock} Jackets`);

  },
  refund: function(numOfShirts, numOfJeans, numOfJackets) {
    let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;
    this.numOfSales -= 1;
    this.cashierBalance -= costOrder;
    shop.balance -= costOrder;
    shop.tshirtStock += numOfShirts;
    shop.jeansStock += numOfJeans;
    shop.jacketStock += numOfJackets;
    console.log(`Refund on cashier with id ${this.id} was success!`);
  }
};

let Cashier = function(id, employee) {
  this.id = id;
  this.employee = employee;
  this.numOfSales = 0;
  this.cashierBalance = 0;
}

let firstCashier = new Cashier(1, 'Marcelo Ramirez');
let secondCashier = new Cashier(2, 'Meir Overferst');
let thirdCashier = new Cashier(3, 'Jens Soltwedel');

Object.setPrototypeOf(firstCashier, shop);
Object.setPrototypeOf(secondCashier, shop);
Object.setPrototypeOf(thirdCashier, shop);

// firstCashier.createSale(2, 2, 0);
// thirdCashier.createSale(0, 1, 1);
// thirdCashier.createSale(3, 0, 0);
secondCashier.createSale(2, 1, 1);
secondCashier.createSale(300, 78, 0);
thirdCashier.createSale(2, 98, 400);

// secondCashier.refund(2, 1, 1);
