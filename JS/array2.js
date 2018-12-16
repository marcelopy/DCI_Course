let basis = 50;
let testResults = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60];
let failedResults =0;

for (let eachResult of testResults){
  if (eachResult<basis){
    failedResults++;
  }
}
let percentageOfFailure = (failedResults*100)/testResults.length;
console.log(`The percentage of students failing the curse is ${percentageOfFailure}`);



// Ex version 2
let resultsofExams = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60];


let calculateFailedStudents = function(testResults, basis){
  let failedResults =0;
  for (let eachResult of testResults){
    if (eachResult<basis){
      failedResults++;
    }
  }
  let percentageOfFailure = (failedResults*100)/testResults.length;
  console.log(`The percentage of students failing the curse is ${percentageOfFailure}`);
}

calculateFailedStudents(resultsofExams, 50);
