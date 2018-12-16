let paragraphs = document.querySelectorAll(`p`);
let button = document.querySelector(`button`);
let flag = true;

let toggleParagraphs = function(){

  if (flag === false){
    for (let eachP=0; eachP<paragraphs.length; eachP++){
     paragraphs[eachP].style.transitionDelay = (eachP*0.3)+`s`;
     paragraphs[eachP].style.opacity = `0`;
     paragraphs[eachP].style.width = `0`;
     button.innerHTML = `Click me!`;
   }

  } else {
    button.innerHTML = `Hide!`;
    for (let eachP=0; eachP<paragraphs.length; eachP++){
     paragraphs[eachP].style.transitionDelay = (eachP*0.3)+`s`;
     paragraphs[eachP].style.opacity= `1`;
     paragraphs[eachP].style.width = `100%`;

   }

  }
  flag = !flag
}


button.addEventListener(`click`, toggleParagraphs);
