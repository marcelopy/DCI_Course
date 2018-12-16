//
//
// let dataComesFromUser = `jack russel`;
//
// let myRegex = /^Jack\s(nicholson|sparrow)$/i;
//
// console.log(myRegex.test(dataComesFromUser));
//
//
// let dataComesFromUser = `jack russel`;
//
// let myRegex = /^Jack\s(nicholson|sparrow)$/i;
//
// console.log(myRegex.test(dataComesFromUser));




//Cellphone pattern

//
// let phone1 = `00491532 68 44 12 1`;
// let phone2 = `02384 1246927`;
// let phone3 = `004915326844121`;


// let phoneRegex = /^(\d{4}|0)\s?\d{4}\s?\d{7}/;

// let phoneRegex = /^(0049|0)\s?(\d\s?){11}$/;
//
// console.log(phoneRegex.test(phone1));
// console.log(phoneRegex.test(phone2));
// console.log(phoneRegex.test(phone3));


// Email pattern

// let mail1 = `kostas.diakogannis$23@gmail.com`;
// let mail2 = `kostas.diakogannis$23@gmail.org`;
// let mail3 = `kostas6655665.diakogannis$23@gmail.com`;
//
// let mailRegex = /.+@[a-z]+\.(com|net|org)$/;
//
// console.log(mailRegex.test(mail1));
// console.log(mailRegex.test(mail2));
// console.log(mailRegex.test(mail3));



// URL validation

// let url1 = `http://www.id.com`;
// let url2 = `https://www.1234567890123456789078901234567890.edz`;
// let url3 = `https://www.iluheg-ieur6553.nan`;
//
// let urlRegex = /^https?:\/\/www\.[\w\-]{2,50}\.[a-z]{2,4}\/?$/i;
//
// console.log(urlRegex.test(url1));
// console.log(urlRegex.test(url2));
// console.log(urlRegex.test(url3));



// Boundary

let text1 = `bear`;
let text2 = `I love watching bears fishing salmons in Kamtschaka.`;
let text3 = `My morning routine is to shave my beard.`;
let text4 = `The heat is unbearable!`;

let textRegex = /\bbears?\b/i;

console.log(textRegex.test(text1));
console.log(textRegex.test(text2));
console.log(textRegex.test(text3));
console.log(textRegex.test(text4));
