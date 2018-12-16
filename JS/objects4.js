
let studentProfile = function(firstName, lastName, age, nationality, hoursProgrammingExperience, favoriteProgrammingLanguage){
  this.firstName= firstName;
  this.lastName= lastName;
  this.age= age;
  this.nationality= nationality;
  this.hoursProgrammingExperience= hoursProgrammingExperience;
  this.favoriteProgrammingLanguage= favoriteProgrammingLanguage;
}

let marcelo = new studentProfile(`Marcelo`, `Ramirez`, 43, `Paraguayan`, 534, `JS`);
let jens = new studentProfile(`Jens`, `Soltwel`, 45, `German`, 207, `C++`);
let eugen = new studentProfile(`Jewgeny`, `Barishnikov`, 28, `Russian`, 245, `Ruby`);
let meir = new studentProfile(`Meir`, `Merhaba`, 33, `Israelian`, 125, `Java`);
let nour = new studentProfile(`Nour`, `Sherik`, 28, `Syrian`, 78, `JS`);

jens.hobby = `Fishing`;
eugen.hobby = `Cycling`;
meir.hobby = `Movies`;

let studentsDci = {
  marcelo: marcelo,
  jens: jens,
  eugen: eugen,
  meir: meir,
  nour: nour,
  hasAHobby: function(){
  for (let checker in this){
    if (typeof this[checker] != `object`){
      continue;
    }else if(this[checker].hobby){
      console.log(`The kid ${this[checker].firstName} has a life.`)
    }else {console.log(`The kid ${this[checker].firstName} is doomed for life.`)}
  }

}
}

studentsDci.hasAHobby();
