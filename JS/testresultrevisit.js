// Test Results revisit


let goodScores = [67, 82, 91, 96, 54];
let badScores = [46, 48, 24, 33, 30];

let allScores = goodScores.concat(badScores);

let allAverages = [];
let maxScore=0;

calculateAverage = function(allScores, inWhichVar){
let scoreTotal=0;
for (let score of allScores){
  scoreTotal=scoreTotal+score;
  if (score>maxScore){
    maxScore=score;
  }
}
inWhichVar= scoreTotal/allScores.length;
allAverages.push(inWhichVar);
return inWhichVar;
}

calculateAverage(allScores, `firstScore`);
allScores.push(99);
calculateAverage(allScores, `secondScore`);
// console.log(allAverages);

if (allAverages[0]>allAverages[1]){
   let finalMargin=allAverages[0]-allAverages[1];
   console.log(`The average has decreased by ${finalMargin} points`);
} else if (allAverages[0]<allAverages[1]){
   let finalMargin=allAverages[1]-allAverages[0];
   console.log(`The average has increased by ${finalMargin} points`);
 } else console.log(`The average has remained the same`);

 console.log(`The highest score is ${maxScore}`);
