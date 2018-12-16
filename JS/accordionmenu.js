let headers = document.querySelectorAll(`h3`);
let text = document.querySelectorAll(`div`);

let accordionToggle = function(arrayOfElements, classToToggle){
  for (let toggler=0; toggler<arrayOfElements.length; toggler++){
    if(arrayOfElements[toggler].classList.contains(classToToggle)){
      arrayOfElements[toggler].classList.remove(classToToggle);
      return;
    }
  }
}

for (let i=0; i<text.length; i++){
  headers[i].addEventListener(`click`, function(ev){
    ev.stopPropagation();
    accordionToggle(text, `active`);
    text[i].classList.add(`active`);
  })
}

document.body.addEventListener(`click`, function(){
accordionToggle(text, `active`);
});
