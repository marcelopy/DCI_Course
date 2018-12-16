// let exampleUrl='https://reqres.in/api/users';
// let btn = document.querySelector(`button`);
// let section = document.querySelector(`section`);
//
// btn.addEventListener(`click`,ev=>{
//   fetch(exampleUrl)
//   .then(response=>response.json())
//   .then(obj=>{
//     console.log(obj);
//     for (user of obj.data){
//       let firstHeading = document.createElement(`H3`);
//       let secondHeading = document.createElement(`H3`);
//       let image = document.createElement(`IMG`);
//
//       firstHeading.innerText = user.first_name;
//       secondHeading.innerText = user.last_name;
//       image.src= user.avatar;
//
//       section.appendChild(firstHeading);
//       section.appendChild(secondHeading);
//       section.appendChild(image);
//       // document.body.appendChild(section);
//
//
//     }
//
//   })
// })



// second try

// let commentUrl = `http://35.156.88.18:3050/comments`;
// let btn = document.querySelector(`button`);
//
// btn.addEventListener(`click`, ev=>{
// fetch(commentUrl)
//     .then(response =>response.json())
//     .then(data =>{
//
//           for (let user of data){
//             let section = document.createElement(`SECTION`);
//             let name = document.createElement(`H3`);
//             let email = document.createElement(`P`);
//             let body = document.createElement(`TEXTAREA`);
//
//             name.innerText = user.name;
//             email.innerText= user.email;
//             body.innerText= user.body;
//
//             section.appendChild(name);
//             section.appendChild(email);
//             section.appendChild(body);
//             document.body.appendChild(section);
//           }
//     })
//     .catch(errorMessage=>{
//       console.warn(`This is bad`);
//     })
//     })


let apiKey = `f5511a910763fa45c1efff6f0b0f1e0f`;
let tempColors=[`white`,`grey`,`purple`,`blue`,`yellow`,`orange`,`red`];
let tempNumbers = [-100,0,10,20,30,35,40];
let city = document.querySelector(`input`);
let btn = document.querySelector(`button`);
// let img = document.querySelector(`img`);
// let h3 = document.querySelector(`h3`);
// let paragraph = document.querySelector(`p`);
let form = document.querySelector(`form`);
let container = document.querySelector(`.container`);

// let timeOutputs = (theOutput, theTime)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(fetch(theOutput))}, theTime)
//     })
//   }
//
// form.addEventListener(`submit`, (ev)=>{
//   ev.preventDefault();
// let city2 = city.value.split("-");
//
// for (oneCity of city2){
// let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${oneCity}&APPID=${apiKey}`;
// let produceTemperature = async(apiAddress, time)=>{
//    let response = await timeOutputs(apiAddress,time);
//    let data = await response.json();
//
//       console.log(data);
//       let h3 = document.createElement(`H3`);
//       let paragraph = document.createElement(`P`);
//       let section = document.createElement(`SECTION`);
//       let actualTemp=Math.round(data.main.temp-273.15);
//       h3.innerText = `${data.name}`;
//       paragraph.innerHTML = `<span>${actualTemp}° Celsius</span>
//        <br><br>with ${data.weather[0].description}`;
//        let colorIndex= (tempNumbers.findIndex(each=>actualTemp<each)-1);
//
//       section.appendChild(h3);
//       section.appendChild(paragraph);
//       container.appendChild(section);
//
//       section.style.backgroundImage="url(http://openweathermap.org/img/w/"+`${data.weather[0].icon}`+".png)"
//       section.style.backgroundColor=tempColors[colorIndex];
//
//             city.value=``;
//     }
//
//   produceTemperature(weatherUrl, 1000);
//   }
// })


let timeOutputs = (theOutput, theTime)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(fetch(`https://api.openweathermap.org/data/2.5/weather?q=${oneCity}&APPID=${apiKey}`))}, theTime)
    })
  }

let produceTemperature = async(ev,cities, time)=>{
  for (oneCity of cities){
   let response = await timeOutputs(oneCity,time);
   let data = await response.json();

      console.log(data);
      let h3 = document.createElement(`H3`);
      let paragraph = document.createElement(`P`);
      let section = document.createElement(`SECTION`);
      let actualTemp=Math.round(data.main.temp-273.15);
      h3.innerText = `${data.name}`;
      paragraph.innerHTML = `<span>${actualTemp}° Celsius</span>
       <br><br>with ${data.weather[0].description}`;
       let colorIndex= (tempNumbers.findIndex(each=>actualTemp<each)-1);

      section.appendChild(h3);
      section.appendChild(paragraph);
      container.appendChild(section);

      section.style.backgroundImage="url(http://openweathermap.org/img/w/"+`${data.weather[0].icon}`+".png)"
      section.style.backgroundColor=tempColors[colorIndex];

            city.value=``;
    }


  }

form.addEventListener(`submit`, function anyName(ev){
  ev.preventDefault();
  ev.currentTarget.removeEventListener(`submit`,anyName);
  let city2 = city.value.split("-");
  produceTemperature(ev, city2, 1500);
})
