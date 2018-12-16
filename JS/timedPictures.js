const button = document.querySelector('button');
const container = document.querySelector('#container');
const imageNames = ['et', 'heroes', 'temptation', 'hercules'];
let allPicsPromised = [];

let allRequests = allPics=>{

  for(pic of allPics){
    let url = `${pic}.jpg`;
    let promisePic = new Promise((resolve,reject)=>{
      resolve(fetch(url));
    })
    allPicsPromised.push(promisePic);
  }
  console.log(allPicsPromised);
  return Promise.all(allPicsPromised);
}

let finallyThePics = async ev=>{
  let collection = await promisePic(allPicsPromised);
  for(eachPic of collection){
    let newImage = document.createElement('IMG');
    newImage.src = eachPic.url;
    container.appendChild(newImage);
  }
}

button.addEventListener('click', function jens(ev) {
  ev.currentTarget.removeEventListener('click', jens);
  allRequests(imageNames);

});
