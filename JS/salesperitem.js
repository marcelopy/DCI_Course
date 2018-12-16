// Summarize the products ex.

let sales = ['smartphone', 'smartphone', 'laptop', 'smartphone', 'laptop', 'air cooler',  'smartphone', 'smartphone', 'laptop', 'smartphone', `air cooler`, `pocket watch`];

let allSales=[];

let saleInfo = function(arraySoldItems){
  let quantity = 0;

  arraySoldItems = arraySoldItems.sort();
  // console.log(arraySoldItems);
  for (let i=1; i<=arraySoldItems.length; i++){

    if(arraySoldItems[i]===arraySoldItems[i-1]){
      quantity++
    } else {
      let itemName = arraySoldItems[i-1];
      let itemQuantity = quantity+1;
      allSales[itemName]= itemQuantity;
      quantity = 0;
  }
  }
}

saleInfo(sales);
console.log(allSales);
console.log(allSales.length);
