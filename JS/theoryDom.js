let link = document.querySelector(`a`);
let option = document.querySelector(`select`);

option.addEventListener(`change`, function(ev){
  link.href = `https://www.${option.value}.com`;
  link.innerText = `Go to ${option.value}!`
  console.log(link.href);
});
