
let latinInCommon = {
  city: `Hamburg`,
  language: `Spanish`
}

let marcelo = {
  name: `Marcelo`,
  lastName:`Ramirez`
}

let mauro = {
  name: `Mauricio`,
  lastName:`Cifuentes`
}

let daniel = {
  name: `Daniel`,
  lastName:`Cipolla`
}

Object.setPrototypeOf(marcelo, latinInCommon);
Object.setPrototypeOf(mauro, latinInCommon);
Object.setPrototypeOf(daniel, latinInCommon);

console.log(marcelo);
console.log(mauro);
console.log(daniel);



// Currency converter refactored with Function Constructors


let males = {
  gender: 'male',
  hobby: 'Reading',
  convertToLocalCurrency : function() {
    this.bankAccountInLocalCurrency = this.bankAccountInAmericanDollars * this.convertToLocal;
  }
}

let ProfileOfClients = function(firstName, lastName, bankAccountInAmericanDollars, countryOfResidence, convertToLocal){
  this.firstName = firstName;
  this.lastName = lastName;
  this.bankAccountInAmericanDollars = bankAccountInAmericanDollars;
  this.countryOfResidence = countryOfResidence;
  this.convertToLocal = convertToLocal;

}

let jake = new ProfileOfClients(`Konstantinos`, `Diakogiannis`, 1000, `Greece`, 0.86);
let gidday = new ProfileOfClients(`Meuron`, `Gidday`, 2000, `Australia`, 1.38);
let steffan = new ProfileOfClients(`Steffan`, `Effenberg`, 5000, `Switzerland`, 0.96);


Object.setPrototypeOf(jake, males);
Object.setPrototypeOf(gidday, males);
Object.setPrototypeOf(steffan, males);

jake.convertToLocalCurrency();
console.log(jake);
gidday.convertToLocalCurrency();
console.log(gidday);
steffan.convertToLocalCurrency();
console.log(steffan);



// Have I seen this movie? Ex.

let commonInfoOfMovies = {
  releaseToDvd: true,
  candidateOscar: true,
  actorsPayCurrency: `dollar`,
}


let movieGoerProfile = function(movieTittle, movieDirector, movieYearRelease, movieStarringActor, isMovieSeen) {
  this.movieTittle = movieTittle;
  this.movieDirector = movieDirector;
  this.movieYearRelease = movieYearRelease;
  this.movieStarringActor = movieStarringActor;
  this.isMovieSeen = isMovieSeen;
}

let colorPurple = new movieGoerProfile(`The Color Purple`, `Sasha Vause`, 1997, `Oprah Winfrey`, true);
let breadWinner = new movieGoerProfile(`The Bread Winner`, `Salima Indravi`, 2014, `Some Little Girl`, true);
let predator = new movieGoerProfile(`The Predator`, `A looser`, 2018, `Dogs with Afro`, false);
let cajas = new movieGoerProfile(`7 Cajas`, `Masche`, 2014, `Lali Lalali`, true);
let ghostbuster = new movieGoerProfile(`Ghostbusters`, `Spielberg`, 1990, `Ghosts`, false);

let allMovies = {
  colorPurple: colorPurple,
  breadWinner: breadWinner,
  predator: predator,
  cajas: cajas,
  ghostbuster: ghostbuster,
  controlWatchedMovies: function(){
for (let movie in this){
  if (this[movie].isMovieSeen){
    console.log(this[movie].movieTittle);
  }
}
}
}
allMovies.controlWatchedMovies();
