let photos = document.querySelectorAll(`img`);
let leftBtn = document.querySelector(`button.left`);
let rightBtn = document.querySelector(`button.right`);
let counter = 0;

rightBtn.addEventListener(`click`, function () {
    counter++;
    for (let i=0; i<photos.length; i++){
    photos[i].style.transform = `translate(${counter * (-100)}%,0)`;
  };
    console.log(counter);

})

leftBtn.addEventListener(`click`, function () {
    counter--;
    for (let i=0; i<photos.length; i++){
    photos[i].style.transform = `translate(${counter * (-100)}%,0)`;
  };
    console.log(counter);

})
