let programmingSkills = {
  html : 75,
  css : 85,
  js : 50
}

let averageSkills = function(findAverage){
    let sum = 0;
    let counter = 0;
  for (let subjectNote in findAverage){
    sum += findAverage[subjectNote];
    counter++;
  }
  findAverage.notes = sum/counter;
}

averageSkills(programmingSkills);
console.log(programmingSkills);
