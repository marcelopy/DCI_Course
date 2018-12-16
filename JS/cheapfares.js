let airlinePrices = [
  {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
  {airlinesName: 'Aegean', avgPriceTicket: 65.8},
  {airlinesName: 'KLM', avgPriceTicket: 102.82},
  {airlinesName: 'British Airways', avgPriceTicket: 114.9},
  {airlinesName: 'Iberia', avgPriceTicket: 77.2},
  {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
  {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
  {airlinesName: 'Air France', avgPriceTicket: 105.6},
  {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
  {airlinesName: 'Emirates', avgPriceTicket: 135.4},
]


// let thisIsAlsoDifficult = price=>{
//
// let priceOffers = airlinePrices.filter(eachPrice=>eachPrice.avgPriceTicket<=price);
// for (eachName of priceOffers){
//   console.log(eachName.airlinesName);
// }
// }
//
// thisIsAlsoDifficult(110);


let numbers2 = [0,3,4,9,18,22];
let numbers = [0,2,4,6,8];

let multiply = (multiplier, arrayName)=>{
  arrayName.forEach(each=>{
    console.log(each*multiplier);
  })

};

multiply(10,numbers);
