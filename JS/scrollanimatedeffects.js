// Create Scroll animated effects
//
// Create 3 boxes (div elements) and place them way down (more than 1000 px offsetTop) to your web page.
//
// Then while you scroll and the browser pageYOffset reaches the offsetTop of each element an event should occur.
//
// The first element should fade in (opacity from 0 to 1).
//
// The second should slide from the left side position (out of the page) and get into the page.
//
// And the third one should rotate from -45deg to 45deg 6 times fast like a ring bell. (further explain).
//
// Don't forget that these things should happen only once, so remove the event listener after executing each event.

let divs= document.querySelectorAll(`div`);
let yAxisOfDivs = [];

for (i=0; i<divs.length; i++){
  yAxisOfDivs.push(divs[i].offsetTop);
};
