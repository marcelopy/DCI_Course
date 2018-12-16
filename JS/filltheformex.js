
let userProfile = function(userName, course, satisfactionLevel){
  this.userName= userName;
  this.course= course;
  this.satisfactionLevel= satisfactionLevel;
}

let marcelo = new userProfile(`Marcelo Ramirez`, `PHP`, 90);
let alvino = new userProfile(`Alvino Calvo`, `PHP`, 95);
let juan = new userProfile(`Juan de los Palotes`, `PHP`, 70);
let lizl = new userProfile(`Lizl Schmidt`, `JS`, 34);
let linshu = new userProfile(`Linshu Xo`, `JS`, 56);
let aitor = new userProfile(`Aitor Atreides`, `Ruby`, 90);
let gimena = new userProfile(`Gimena Perla`, `Ruby`, 90);
let xavi = new userProfile(`Xavi Iniesta`, `PHP`, 83);
let daenerys = new userProfile(`Daenerys Rohan`, `Ruby`, 20);
let geralt = new userProfile(`Geralt Rivia`, `JS`, 90);


let clients = {
  marcelo: marcelo,
  alvino: alvino,
  juan: juan,
  lizl: lizl,
  linshu: linshu,
  aitor: aitor,
  gimena: gimena,
  xavi: xavi,
  daenerys: daenerys,
  geralt: geralt,

  userSatisfaction: function(){
    let phpCounter=0;
    let phpUserCounter=0;
    let phpSatisfactionLevel=[];
    let jsCounter=0;
    let jsUserCounter=0;
    let jsSatisfactionLevel=[];
    let rubyCounter=0;
    let rubyUserCounter=0;
    let rubySatisfactionLevel=[];

  for (let checker in this){
    if (typeof this[checker] != `object`){
      continue;
    }
      else if (this[checker].satisfactionLevel>80) {
                this[checker].happinessCondition  = `Found the course perfect`;
              } else if (this[checker].satisfactionLevel>=50){
                this[checker].happinessCondition = `Content Overall`;
              }else {
                this[checker].happinessCondition = `Customer is complaining, potential refund is to be asked`;
      }
      if (typeof this[checker] != `object`){
        continue;
      }
      else switch(this[checker].course){
        case `PHP`:
        phpSatisfactionLevel.push(this[checker].satisfactionLevel)
        phpCounter = phpCounter + this[checker].satisfactionLevel;
        phpUserCounter++;
        break;

        case `JS`:
        jsSatisfactionLevel.push(this[checker].satisfactionLevel)
        jsCounter = jsCounter + this[checker].satisfactionLevel;
        jsUserCounter++;
        break;

        case `Ruby`:
        rubySatisfactionLevel.push(this[checker].satisfactionLevel)
        rubyCounter = rubyCounter + this[checker].satisfactionLevel;
        rubyUserCounter++;
        break;
      }
    }
    let phpAverage=phpCounter/phpUserCounter;
    let jsAverage=jsCounter/jsUserCounter;
    let rubyAverage=rubyCounter/rubyUserCounter;
    let bestCourse=0;

    if (phpAverage>jsAverage && phpAverage>rubyAverage){
      bestCourse=`PHP`;
    } else if (jsAverage>phpAverage && jsAverage>rubyAverage){
      bestCourse=`JS`;
    } else if (rubyAverage>phpAverage && rubyAverage>jsAverage){
      bestCourse=`Ruby`;
    } else if (phpAverage === jsAverage){
      console.log(`We have a tie! The two most popular courses are PHP and JS, so`);
    }else if (phpAverage === rubyAverage){
      console.log(`We have a tie! The two most popular courses are PHP and Ruby, so`);
    }else if (jsAverage === rubyAverage){
    console.log(`We have a tie! The two most popular courses are JS and Ruby, so`);
  }
    console.log(`The most popular course is ${bestCourse}`);
    console.log(``);
    console.log(`The PHP student satisfaction average is ${phpAverage}`);
    console.log(phpSatisfactionLevel);
    console.log(``);
    console.log(`The JS student satisfaction average is ${jsAverage}`);
    console.log(jsSatisfactionLevel);
    console.log(``);
    console.log(`The Ruby student satisfaction average is ${rubyAverage}`);
    console.log(rubySatisfactionLevel);
  }
}

console.log(`Thank you for using our services ｡◕‿◕｡`);
console.log(``);
clients.userSatisfaction();
// console.log(clients);
