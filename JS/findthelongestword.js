let sentence = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
let arrayOfWords = sentence.split(` `);
let longestWord = [];
let arrayOfLongestWords = [];

for (let eachWord of arrayOfWords){
  if (eachWord.length>longestWord.length){
    longestWord = eachWord;
  }
}


let positionLongestWord = arrayOfWords.indexOf(longestWord);
arrayOfWords[positionLongestWord]=longestWord.toUpperCase();


// for (let eachWord of arrayOfWords){
//   if (eachWord.length==longestWord.length){
//     arrayOfLongestWords.push(eachWord);
//   }
// }

console.log(sentence);
sentence = arrayOfWords.join(` `);

// console.log(longestWord);
console.log(` `);
console.log(sentence);
