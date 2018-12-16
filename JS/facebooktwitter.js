let textArea = document.querySelector(`textarea`);
let spans = document.querySelectorAll(`span`);
let fbSpan= spans[0];
let twSpan= spans[1];
let fbCounter;
let twCounter;

let fbRegex = /\bf(ace)?b(ook)?\b/ig;
let twRegex = /\btw(itter)?\b/ig;



let checkText = function(regex, counter, span, companyName){
  let textArray =  textArea.value;
 if (regex.test(textArray)){
  counter = textArray.match(regex).length;
  span.innerText= `You have mentioned ${companyName} ${counter} times`;
} else {span.innerText=` `};
}
textArea.addEventListener(`keyup`, function(ev){
checkText(fbRegex, fbCounter, fbSpan, `Facebook`);
})

textArea.addEventListener(`keyup`, function(ev){
  checkText(twRegex, twCounter, twSpan, `Twitter`);
})
