document.addEventListener(`DOMContentLoaded`, function(ev){
  let input = document.querySelector(`input`);
  let button = document.querySelector(`button`);

  button.addEventListener(`click`, function(ev){
    let text = input.value;
    let newTask= document.createElement(`P`);
     newTask.innerHTML = `${text} <span>Close this task</span>`;
     document.body.appendChild(newTask);
     input.value=``;

     let span = document.querySelectorAll(`span`);
     console.log(span);

     for (i=0; i<span.length; i++){
     span[i].addEventListener(`click`, function(ev){
       let clickTarget = ev.currentTarget;
       let parentOfClickTarget = clickTarget.parentElement;

       document.body.removeChild(parentOfClickTarget);

     })
   }
  })









})
