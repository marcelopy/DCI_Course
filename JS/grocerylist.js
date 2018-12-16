// Show affordable items ex.


function groceriesAndPrices(groceryName, groceryPrice) {
  this.groceryName = groceryName;
  this.groceryPrice = groceryPrice;
}

let iceCream = new groceriesAndPrices(`Ice Cream`, 6);
let pizza = new groceriesAndPrices(`Pepperoni pizza`, 3);
let milk = new groceriesAndPrices(`Milk`, 1);
let wurst = new groceriesAndPrices(`Bratwurst`, 3);
let chicken = new groceriesAndPrices(`Chicken breast filet`, 5);
let steak = new groceriesAndPrices(`Prime rib-eyed steak`, 24);
let eggs = new groceriesAndPrices(`a dozen eggs`, 4);
let sugar = new groceriesAndPrices(`Sugar`, 2);
let salad = new groceriesAndPrices(`Bag of salad`, 1);
let oil = new groceriesAndPrices(`Olive oil`, 7);


let groceryList = {
  iceCream: iceCream,
  pizza: pizza,
  milk: milk,
  wurst: wurst,
  chicken: chicken,
  steak: steak,
  eggs: eggs,
  sugar: sugar,
  salad: salad,
  oil: oil,

  checkBudget: function(moneyInMyWallet){
    for (let checker in this){
      if (moneyInMyWallet >= this[checker].groceryPrice){
        console.log(`With your sorry ass budget of ${moneyInMyWallet} euros, you can buy ${this[checker].groceryName}.`)
      }
    }
  }
}

groceryList.checkBudget(3);
