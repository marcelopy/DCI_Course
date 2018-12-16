let lis = document.querySelectorAll('li');
let container = document.querySelector('#container');
let arraySections =[];



let grap = async dataJson =>{
  let res = await fetch(dataJson);
  let finalData = await res.json();

  for(let i=0; i<finalData.length;i++){
      let section = document.createElement('section');

      let image = document.createElement('img');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let imgStringPath = finalData[i].address;
      image.src = imgStringPath;
      h3.innerText = finalData[i].title;
      p.innerText = finalData[i].description;
      section.addEventListener('click', ev =>{
                    let showSection = document.createElement('section');
                    let imageBig = document.createElement('img');
                    imageBig.src = imgStringPath;
                    imageBig.classList.add("bigImage");
                    showSection.classList.add("showSection");

                    showSection.appendChild(imageBig);
                    document.body.appendChild(showSection);
      })

      section.appendChild(image);
      section.appendChild(h3);
      section.appendChild(p);
      container.appendChild(section);
      arraySections.push(section);

  }

}

lis[1].addEventListener('click',(ev)=>{
  let data = 'createInfo.json';
  grap(data);

})



console.log(arraySections);
