// Create a random color ex.


let rColor = Math.floor(Math.random()*256);
let gColor = Math.floor(Math.random()*256);
let bColor = Math.floor(Math.random()*256);

let rgbColor = [rColor, gColor, bColor];

// document.body.style.background = `rgb(${[...rgbColor]})`;


console.log(rgbColor);

console.log(` `);

let hexaColorArray = [`#`];
let hexaColorGenerator = function(){
  for (i=1; i<=6; i++){
    let oneValue = Math.floor(Math.random()*16)
    if(oneValue<=9){
      oneValue = oneValue;
    } else {
      switch(oneValue){
        case 10:
        oneValue=`A`;
        break;
        case 11:
        oneValue=`B`;
        break;
        case 12:
        oneValue=`C`;
        break;
        case 13:
        oneValue=`D`;
        break;
        case 14:
        oneValue=`E`;
        break;
        case 15:
        oneValue=`F`;
        break;
      }
    }
    hexaColorArray.push(oneValue);
  }
}

hexaColorGenerator();
console.log(hexaColorArray);
let hexaColor = hexaColorArray.join('');
console.log(hexaColor);

document.body.style.background = hexaColor;

console.log(` `);
