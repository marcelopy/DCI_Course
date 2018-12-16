let groceries = [`chocolate`, `bananas`, `rice`, `beers`, `deodorant`];
let amounts = [5,5,2,6,1];
let totalList = [];


for ( let i=0; i<groceries.length; i++){
  let correctList=[groceries[i],amounts[i]];
  totalList.push(correctList);
  console.log(`Please buy ${amounts[i]}x ${groceries[i]}`);
}
console.log(totalList);
