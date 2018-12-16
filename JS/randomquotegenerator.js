let quoteDatabase = [

   {author: 'Jesus Christ',  quote: 'Ask and you shall receive'},

   {author: 'Julius Caesar', quote: 'Veni, Vidi, Vici'},

   {author: 'Tony Montana', quote: 'Say hello to my little friend!'},

   {author: `Alexander Graham Bell`, quote: `Before anything else, preparation is the key to success.`},

   {author: `Tamil proverb`, quote: `When you dress up as a dog, be prepared to bark`},

   {author: `Maya Angelou`, quote: `Nothing will work unless you do.`},

   {author: `Jim Rohn`, quote: `Poor people have big TV. Rich people have big library.`},

   {author: `Unknown`, quote: `If everything comes your way, you are in the wrong lane.`},

   {author: `Benjamin Franklin`, quote: `Be civil to all; sociable to many; familiar with few.`},

   {author: `English proverb`, quote: `Where there is a will there is a way.`}


];

let randomQuoteGenerator = function(arrayOfQuotes){
    let indexNumber = Math.round(Math.random() * (arrayOfQuotes.length - 1));

    console.log(`"${arrayOfQuotes[indexNumber].quote}"  - ${arrayOfQuotes[indexNumber].author}`);
    console.log(indexNumber);
}
randomQuoteGenerator(quoteDatabase);

console.log(``);





// Find the biggest Number in an Array of Strings ex.


let arrayOfNotes = ['63', '55.5', '72', '77', '35.5', '81', '95', '29.5', '44.5',  '80'];

let findMarginOfTwoNumbers = function(notesToAnalyze){
  let biggestNumber = Math.max(...notesToAnalyze);
  let smallestNumber = Math.min(...notesToAnalyze);
  let finalMargin = Math.ceil(Math.abs(biggestNumber-smallestNumber));
  console.log(biggestNumber);
  console.log(smallestNumber);
  console.log(biggestNumber-smallestNumber);
  console.log(finalMargin);
}

findMarginOfTwoNumbers(arrayOfNotes);
