// Print the city of every Fan of a specific team ex.

function FanPersonalInformation(firstName, lastName, favoriteTeam, cityOfResidence){
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteTeam = favoriteTeam;
  this.cityOfResidence = cityOfResidence;
}

let marcelo = new FanPersonalInformation(`Marcelo`,`Ramirez`,`Barca`,`Hamburg`);
let pepe = new FanPersonalInformation(`Jose`, `Cortes`, `Real Madrid`, `Los Angeles`);
let raquel = new FanPersonalInformation(`Raquel`, `Ramirez`, `Olimpia`, `Asuncion`);
let lorena = new FanPersonalInformation(`Lorena`, `Duarte`, `Olimpia`, `Freiburg`);
let jose = new FanPersonalInformation(`Jose`, `Segovia`, `Schalke`, `Berlin`);
let marco = new FanPersonalInformation(`Marco`, `Sparza`, `Necaxa`, `Los Angeles`);
let joaquin = new FanPersonalInformation(`Joaquin`, `Baldwin`, `Barca`, `Hollywood`);

let soccerFanData = [marcelo, pepe, raquel, lorena, jose, marco, joaquin];

let checkTeam = function(teamToCheck, arrayOfFans){
    for (let fan of arrayOfFans){
      if(fan.favoriteTeam == teamToCheck){
        console.log(fan.cityOfResidence);
      }
    }
  }

checkTeam(`Olimpia`, soccerFanData);

console.log(` `);


// Return abbreviated strings ex.

let abbreviationString = function(sentenceToShorten){
  let sentenceToArray = sentenceToShorten.split(` `);
  let initialsArray = [];
  for (let initials of sentenceToArray){
    initialsArray.push(initials[0]);
  }
  initialsArray = initialsArray.join(``).toUpperCase();
  console.log(`The abbreviation of the sentence "${sentenceToShorten}" is ${initialsArray}`);
}

abbreviationString(`the fox jumped over the fence`);

console.log(` `);
