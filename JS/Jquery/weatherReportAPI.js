$().ready(ev=>{
const apiKey = `f5511a910763fa45c1efff6f0b0f1e0f`;
const tempColors=[`white`,`grey`,`purple`,`blue`,`yellow`,`orange`,`red`];
const tempNumbers = [-100,0,10,20,30,35,40];
let city = document.querySelector(`input`);
let btn = document.querySelector(`button`);
let form = document.querySelector(`form`);
let container = document.querySelector(`.container`);


let produceTemperature = async function(ev,cities, time){
  for (oneCity of cities){
   let data = await $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${oneCity}&APPID=${apiKey}`);
      console.log(data);
      let h3 = document.createElement(`H3`);
      let paragraph = document.createElement(`P`);
      let section = document.createElement(`SECTION`);
      let actualTemp=Math.round(data.main.temp-273.15);
      h3.innerText = `${data.name}`;
      paragraph.innerHTML = `<span>${actualTemp}° Celsius</span>
       <br><br>with ${data.weather[0].description}`;
       let colorIndex= (tempNumbers.findIndex(each=>actualTemp<each)-1);

      section.append(h3);
      section.append(paragraph);
      container.append(section);

      section.style.backgroundImage="url(http://openweathermap.org/img/w/"+`${data.weather[0].icon}`+".png)"
      section.style.backgroundColor=tempColors[colorIndex];

            city.value=``;
    }


  }

form.addEventListener(`submit`, function anyName(ev){
  ev.preventDefault();
  // ev.currentTarget.removeEventListener(`submit`,anyName);
  let city2 = city.value.split("-");
  produceTemperature(ev, city2, 800);
})



})
