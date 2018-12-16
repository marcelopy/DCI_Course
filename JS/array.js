let hobbiesOfMarcelo = [`sleeping`, `Netflix`, `Ps4`];
let hobbiesOfDaniel = [`tocar los huevos`, `faltar a clase`, `llegar tarde`, `no hacer los ejercicios`];

hobbyComparator = function(){
  if (hobbiesOfMarcelo.length===hobbiesOfDaniel.length) {
    console.log(`Both people are equally interesting`);
  } else if(hobbiesOfMarcelo.length>hobbiesOfDaniel.length){
    console.log(`Marcelo is more interesting than Daniel`);
  } else if(hobbiesOfMarcelo.length<hobbiesOfDaniel.length){
    console.log(`Daniel is more interesting than Marcelo`);
  }
}

hobbyComparator();

// Compare polyglots ex.

let schoolTeachers = {
  mathematics: `Mauro Cifuentes`,
  science: `Carmine Tantalizia`,
  history: `Meir Overfest`,
  geography: `Marcelo Ramirez`
}

let kostas = [`Kostas Diakogannis`, `Php`, `Java`, `Java Script`, `C++`, `Ruby`, `Python`];
let sue = [`Sue Schutt`, `Css`, `Html`, `Java Script`];

let chooseNewTeacher = function(candidate1, candidate2){
  candidate1.length>candidate2.length ? chosenPerson = candidate1[0] : chosenPerson = candidate2[0];
  schoolTeachers.programming=chosenPerson;
  console.log(schoolTeachers);
}

chooseNewTeacher(kostas, sue);
