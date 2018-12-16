let names = [
  'Mauro',
  'Eugen',
  'Mauro',
  'Meir',
  'Eugen',
  'Jens',
  'Jens',
  'Jake',
  'Mohammed',
  'Mauro',
  'Mohammed',
  'Marcelo',
  'Sue',
  'Murhaf',
  'Jens'
];

let uniqueNames = [];
let allNames = (arrayOfNames=names) =>{
  for (i=0; i<arrayOfNames.length; i++){
    if (!uniqueNames.includes(arrayOfNames[i])){
      uniqueNames.push(arrayOfNames[i]);
    }

}
console.log(uniqueNames);
}

allNames(names);
