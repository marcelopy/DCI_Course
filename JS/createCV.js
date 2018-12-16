let fullForm = document.querySelector(`form`);
let userData = document.querySelector(`.name`);
let birthdayDate = document.querySelector(`.date`);
let userPhoto = document.querySelector(`.photo`);
let backgroundColor = document.querySelector(`#primaryColor`);
let textColor = document.querySelector(`#secondaryColor`);
let userBio = document.querySelector(`textarea`);
let userProgrammingSkills = document.querySelectorAll(`li>input`);
let sendButton = document.querySelector(`button`);
let actualDate = new Date();
let wordCounter = document.querySelector(`.wordCounter`);
let paragraphError = document.querySelectorAll(`p.errorMessage`);







if (localStorage.length>0){
  for (let k=0; k<localStorage.length; k=k+7){
  let userProfile = document.createElement(`SECTION`);
  let userHeading = document.createElement(`H3`);
  let userImage = document.createElement(`IMG`);
  let userBirthday = document.createElement(`P`);
  let userDescription = document.createElement(`ARTICLE`);
  let userSkills = document.createElement(`P`);
  let buttonToClose = document.createElement(`SPAN`);

  userProfile.style.background = localStorage.getItem(`backgroundColor-${k}`);
  userProfile.style.color = localStorage.getItem(`textColor-${k}`);
  userHeading.innerText = `Hello! I'm ${localStorage.getItem(`userData-${k}`)}`;
  userBirthday.innerText = `I was born in ${localStorage.getItem(`birthdayDate-${k}`)}`;
  userDescription.innerText = localStorage.getItem(`userBio-${k}`);
  userSkills.innerText = `My programming languages are: ${localStorage.getItem(`programmingSkillsJoined-${k}`)}`;
  buttonToClose.innerHTML = `&#215;`;
  userImage.src = localStorage.getItem(`userPhoto-${k}`);

  userProfile.appendChild(buttonToClose);
  userProfile.appendChild(userHeading);
  userProfile.appendChild(userImage);
  userProfile.appendChild(userBirthday);
  userProfile.appendChild(userDescription);
  userProfile.appendChild(userSkills);
  document.body.appendChild(userProfile);


    buttonToClose.addEventListener(`click`, function(ev){
      document.body.removeChild(userProfile);
    })

  }
}


fullForm.addEventListener(`submit`, function(ev){
  ev.preventDefault();
  let userProfile = document.createElement(`SECTION`);
  let userHeading = document.createElement(`H3`);
  let userImage = document.createElement(`IMG`);
  let userBirthday = document.createElement(`P`);
  let userDescription = document.createElement(`ARTICLE`);
  let userSkills = document.createElement(`P`);
  let buttonToClose = document.createElement(`SPAN`);
  let userProgrammingSkillsChecked = [];
  let uniqueUserId = localStorage.length;

  let actualDate= new Date();
  let actualYear = actualDate.getFullYear();

  let userDate = new Date(birthdayDate.value);
  let userYear = userDate.getFullYear();

  let userAge = actualYear-userYear;



  for (let i=0; i<userProgrammingSkills.length; i++){
    if (userProgrammingSkills[i].checked === true){
      userProgrammingSkillsChecked.push(userProgrammingSkills[i].parentElement.innerText);
    }
  }
  let programmingSkillsJoined = userProgrammingSkillsChecked.join(", ");

  let fakeURL = userPhoto.value;
  let onlyImageName = fakeURL.lastIndexOf("\\");
  let imageFinalName = fakeURL.slice(onlyImageName+1);


  userProfile.style.background = backgroundColor.value;
  userProfile.style.color = textColor.value;
  userHeading.innerText = `Hello! I'm ${userData.value}`;
  userBirthday.innerText = `I was born in ${birthdayDate.value}`;
  userDescription.innerText = userBio.value;
  userSkills.innerText = `My programming languages are: ${programmingSkillsJoined}`;
  buttonToClose.innerHTML = `&#215;`;
  userImage.src = imageFinalName;

  userProfile.appendChild(buttonToClose);
  userProfile.appendChild(userHeading);
  userProfile.appendChild(userImage);
  userProfile.appendChild(userBirthday);
  userProfile.appendChild(userDescription);
  userProfile.appendChild(userSkills);
  document.body.appendChild(userProfile);

  localStorage.setItem(`userData-${uniqueUserId}`, userData.value);
  localStorage.setItem(`birthdayDate-${uniqueUserId}`, birthdayDate.value);
  localStorage.setItem(`userPhoto-${uniqueUserId}`, imageFinalName);
  localStorage.setItem(`backgroundColor-${uniqueUserId}`, backgroundColor.value);
  localStorage.setItem(`textColor-${uniqueUserId}`, textColor.value);
  localStorage.setItem(`userBio-${uniqueUserId}`, userBio.value);
  localStorage.setItem(`programmingSkillsJoined-${uniqueUserId}`, programmingSkillsJoined);

  console.log(localStorage);



  buttonToClose.addEventListener(`click`, function(ev){
    document.body.removeChild(userProfile);


  })

})

userData.addEventListener(`invalid`, function(ev){
  ev.preventDefault();
  userData.setCustomValidity(`Please write your name`);
  paragraphError[0].innerText=userData.validationMessage;
  userData.setCustomValidity(``);

})

userData.addEventListener(`keyup`, function(){
  userData.checkValidity();
})

birthdayDate.addEventListener(`invalid`, function(ev){
  ev.preventDefault();
  birthdayDate.setCustomValidity(`Please return when you are older than 18`);
  paragraphError[1].innerText=birthdayDate.validationMessage;
  birthdayDate.setCustomValidity(``);
})

birthdayDate.addEventListener(`change`, function(){
  birthdayDate.checkValidity();
})

userBio.addEventListener(`keyup`, function(ev){
wordCounter.innerText = `${40-userBio.value.length} characters remain`;
  if(userBio.value.length>40){
    userBio.style.background = `red`;
    userBio.validity.tooLong.value = true;
  }
})

userBio.addEventListener(`invalid`, function(ev){
  ev.preventDefault();
  userBio.setCustomValidity(`Please keep your message under 40 characters`);
  paragraphError[2].innerText=userBio.validationMessage;
  userBio.setCustomValidity(``);
})
