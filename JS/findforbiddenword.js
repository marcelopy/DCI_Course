// Find the forbidden words ex.



  let arrayForbiddenWords = [`tax`, `vegan`, `Trump`, `soccer`, `politics`] ;
  let sentenceToAnalyze =  `The Fox jumps over the blackened fence` ;
  let forbiddenWordFlag = false;

let forbiddenWords = function(forbiddenWords, sentenceToAnalyze){
    arrayForbiddenWords = arrayForbiddenWords.join().toLowerCase().split(`,`);
    sentenceToAnalyze.toLowerCase().split(` `);
  for (eachWord of sentenceToAnalyze){
    if (arrayForbiddenWords.includes(eachWord)){
      forbiddenWordFlag = true;
      break;
    }
  }
  (forbiddenWordFlag === true) ? console.log(`The message cannot be printed because it contains inappropriate words`) : console.log(`The sentence "${sentenceToAnalyze}" is approved`);
}


forbiddenWords(arrayForbiddenWords,sentenceToAnalyze);

console.log(``);



// Print all favorite things ex.

let favoriteThings = function(arrayOfthings, groupNameOfFavoriteThings){
  let listOfFavoriteThings = arrayOfthings.join(`,`);
  console.log(`My favorite ${groupNameOfFavoriteThings} are: ${listOfFavoriteThings}.`);
}

favoriteThings([`pizza`, `schnitzel`, `ice cream`, `hummus`], `foods`);

console.log(``);
