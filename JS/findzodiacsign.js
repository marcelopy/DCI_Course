

let findZodiac = function(birthDate){
  console.log(`You were born in ${birthDate.getDate()}/${birthDate.getMonth()+1}/${birthDate.getFullYear()}`);
  let fixedYear = birthDate.setYear(2000);
  let newYear = new Date(fixedYear);
  let zodiacSign;
  // console.log(newYear);

  let aquarius = new Date(2000,0,20);
  let pisces = new Date (2000, 1, 19);
  let aries = new Date (2000, 2, 21);
  let taurus = new Date (2000, 3, 20);
  let gemini = new Date (2000, 4, 21);
  let cancer = new Date (2000, 5, 21);
  let leo = new Date (2000, 6, 23);
  let virgo = new Date (2000, 7, 23);
  let libra = new Date (2000, 8, 23);
  let scorpio = new Date (2000, 9, 23);
  let sagittarius = new Date (2000, 10, 22);
  let capricorn = new Date (2000, 11, 22);


  // let signs = [aquarius, pisces, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn];
  // console.log(signs);

  if (newYear>=aquarius && newYear<pisces) {
    zodiacSign = `Aquarius`;
  } else if (newYear>=pisces && newYear<aries){
    zodiacSign = `Pisces`;
  } else if (newYear>=aries && newYear<taurus){
    zodiacSign = `Aries`;
  } else if (newYear>=taurus && newYear<gemini){
    zodiacSign = `Taurus`;
  } else if (newYear>=gemini && newYear<cancer){
    zodiacSign = `Gemini`;
  } else if (newYear>=cancer && newYear<leo){
    zodiacSign = `Cancer`;
  } else if (newYear>=leo && newYear<virgo){
    zodiacSign = `Leo`;
  } else if (newYear>=virgo && newYear<libra){
    zodiacSign = `Virgo`;
  } else if (newYear>=libra && newYear<scorpio){
    zodiacSign = `Libra`;
  } else if (newYear>=scorpio && newYear<sagittarius){
    zodiacSign = `Scorpio`;
  } else if (newYear>=sagittarius && newYear<capricorn){
    zodiacSign = `Sagittarius`;
  } else { zodiacSign = `Capricorn`};

  console.log(` `);

  console.log (`Your zodiac sign is ${zodiacSign}.`);
}

let birthDay = new Date(2012,11,14);


findZodiac(birthDay);


console.log(` `);
