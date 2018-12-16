let div1 = document.querySelector('div');


document.body.addEventListener(`mousemove`, function(ev){
if (ev.clientY<50){
div1.style.opacity = `1`;
document.body.style.background = `green`;
ev.currentTarget.removeEventListener(`mousemove`, ev);
}
})


window.addEventListener(`scroll`, function(ev){
  console.log(`${window.pageYOffset}`);
})
