console.log(``);

let findPalindrome = function(wordToAnalize){
  let flag;
 wordToAnalize===wordToAnalize.toLowerCase().split(``).reverse().join(``) ? flag= `is`: flag= `is not`;

 console.log(`${wordToAnalize} ${flag} a Palindrome`);
}

findPalindrome(`racecar`);


console.log(``);



let findAnagram = function(wordOne, wordTwo){
  let flag;
  wordOne.toLowerCase().split(``).sort().join(``)===wordTwo.toLowerCase().split(``).sort().join(``) ?  flag= `are`: flag= `are not`;
  console.log(`${wordOne} and ${wordTwo} ${flag} anagrams`);
}

findAnagram(`anna`, `nana`);

console.log(``);
