// let button = document.querySelector(`button`);
// let paragraph = document.querySelector(`p`);
//
//
// console.log(button);
// console.log(paragraph);
//
// button.addEventListener(`click`, function(){
// paragraph.classList.toggle(`styleParagraph`);
// });

let button = document.querySelectorAll(`nav>li`);
let paragraph = document.querySelectorAll(`section`);
let list = document.querySelectorAll(`ul`);

let toggleActive = function(arrayOfElements, classToDeal){
  for (let toggler = 0; toggler<arrayOfElements.length; toggler++){
  if (arrayOfElements[toggler].classList.contains(classToDeal)){
    arrayOfElements[toggler].classList.remove(classToDeal)
    return;
}
}

}

for (let i=0; i<button.length; i++){
    button[i].addEventListener(`click`, function(ev){
      ev.stopPropagation();
      toggleActive(list, `active`);
      list[i].classList.add(`active`);

  }

)}

document.body.addEventListener('click', function() {
    toggleActive(list, `active`);
})
