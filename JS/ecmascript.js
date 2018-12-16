let factorNumber = (num=10) => {
  if (num === 0)
    console.log(1);
    else{
          for (let i = num - 1; i >= 1; i--) {
              num *= i;
              }

  console.log(num);}
}
factorNumber();


let squareRoot = baseNum=>console.log(Math.sqrt(baseNum));

squareRoot(9);


let multipleNumbers = (num1, num2)=>(num2%num1==0)?console.log(`true`):console.log(`false`);

multipleNumbers(7,21);



let button = document.querySelector(`button`);

button.addEventListener(`click`, ev =>{
  console.log(ev.type);
})
