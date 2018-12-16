let form = document.querySelector(`form`);
let age = document.querySelector(`input[type="date"]`);
let name = document.querySelector(`input[type="text"]`);
let paragraph = document.querySelector(`p`);

form.addEventListener(`submit`, function(ev){
  ev.preventDefault();
  paragraph.style.display = `none`;

  console.log(`Submit pressed`);
});

age.addEventListener(`invalid`, function(ev){
  ev.preventDefault();

  let customErrorMessage;
  paragraph.style.display = `block`;
  console.log(`Your age is wrong`);
  age.validity.rangeOverflow ? age.setCustomValidity(`Drink your milk`) : age.setCustomValidity(`Get out weirdo`);

  paragraph.innerText = setCustomValidity;

  // let paragraphError = document.createElement(`P`);
  //
  // paragraphError.innerText = customErrorMessage;
  //
  // age.insertAdjacentElement(`beforebegin`, paragraphError);

  age.setCustomValidity(``);

})

// name.addEventListener(`invalid`, function(ev){
//   ev.preventDefault();
//
//
//   console.log(`Your name is wrong`);
//
//
//
// })
