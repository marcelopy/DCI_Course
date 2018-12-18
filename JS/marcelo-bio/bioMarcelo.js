$().ready(ev=>{

        wheel1 = new wheelnav('wheelDiv');
        wheel1.initWheel(["imgsrc:images/home.png", "imgsrc:images/bio.png", "imgsrc:images/pics.png", "imgsrc:images/about.png"]);

        wheel1.slicePathFunction = slicePath().CogSlice;
        wheel1.navItems[0].titleHeight=160;
        wheel1.navItems[1].titleHeight=150;
        wheel1.navItems[2].titleHeight=130;
        wheel1.navItems[3].titleHeight=170;
        wheel1.navItems[0].fillAttr = "#00000000";
        wheel1.navItems[1].fillAttr = "#00000000";
        wheel1.navItems[2].fillAttr = "#00000000";
        wheel1.navItems[3].fillAttr = "#00000000";
        wheel1.wheelRadius = 140;
        wheel1.centerX = 140;
        wheel1.centerY = 130;
        wheel1.navAngle = 45;
        wheel1.spreaderEnable = true;
        wheel1.spreaderRadius = 10;
        wheel1.animatetime = 1800;
        wheel1.animateeffect = 'easeIn';
        wheel1.sliceTransformFunction = sliceTransform().RotateTitleTransform;
        wheel1.slicePathFunction = slicePath().CogBasePieSlice;
        wheel1.sliceSelectedPathFunction = slicePath().CogSlice;

        wheel1.spreaderInTitle = "imgsrc:images/powerbutton.gif";
        wheel1.spreaderOutTitleHeight = "120";
        wheel1.spreaderOutTitle = "imgsrc:images/powerbutton.gif";
        wheel1.maxPercent = 0;
        wheel1.minPercent = 1;
        wheel1.createWheel();



        wheel2 = new wheelnav('wheelDiv2', wheel1.raphael);
        wheel2.initWheel(["Home", "Bio", "Pictures", "Resources"]);
        wheel2.navItems[0].fillAttr = "180-#dfb48c-#905a28";
        wheel2.navItems[1].fillAttr = "10-#dfb48c-#905a28";
        wheel2.navItems[2].fillAttr = "30-#dfb48c-#905a28";
        wheel2.navItems[3].fillAttr = "140-#dfb48c-#905a28";
        // wheel2.spreaderEnable = true;
        wheel2.minPercent = 0;
        wheel2.wheelRadius = 180;
        wheel2.centerX = 280;
        wheel2.centerY = 360;
        wheel2.navAngle = 236.25;
        wheel2.clockwise = false;
        wheel2.animatetime = 1800;
        wheel2.animateeffect = 'easeIn';
        wheel2.slicePathFunction = slicePath().CogSlice;
        wheel2.sliceSelectedPathFunction = slicePath().CogSlice;

        wheel2.maxPercent = 0;
        wheel2.minPercent = 1;

        // wheel2.sliceHoverTransformFunction = sliceTransform().ScaleTitleTransform;

        wheel2.createWheel();



        wheel2.slicePathAttr = { stroke: '#2e1d0d', 'stroke-width': 6 };
        wheel2.titleAttr = { fill: '#e1f4e1', stroke: 8 };

        wheel2.sliceHoverAttr = { stroke: '#2e1d0d', 'stroke-width': 6 };
        wheel2.titleHoverAttr = { fill: '#66AF66', stroke: 8 };

        wheel2.sliceSelectedAttr = { stroke: '#2e1d0d', 'stroke-width': 6 };
        wheel2.titleSelectedAttr = { fill: '#14ff16' };

        wheel2.refreshWheel();

        var wheelspreader = document.getElementById("wheelnav-wheelDiv-spreader");
        var wheelspreadertitle = document.getElementById("wheelnav-wheelDiv-spreadertitle");

        wheelspreader.onmouseup = function() {
          wheel2.spreadWheel();
        }
        wheelspreadertitle.onmouseup = function() {
          wheel2.spreadWheel();
          $(`.infoText1`).slideUp(1700);
          $(`.infoText2`).slideUp(1700);
          $(`.infoText3`).slideUp(1700);
          $(`.infoText0`).slideDown(1700);
          $(`.infoText0 span`).delay(1000).fadeIn(300);
          }


        for (var i = 0; i < wheel1.navItems.length; i++) {
          wheel1.navItems[i].navigateFunction = function () {
            wheel2.navigateWheel(Math.abs(this.itemIndex));
          }
          wheel1.navItems[0].navItem.mousedown(function (ev) {
               $(`.infoText1`).slideUp(1700);
               $(`.infoText2`).slideUp(1700);
               $(`.infoText3`).slideUp(1700);
               $(`.infoText0`).slideDown(1700);
               $(`.infoText0 span`).delay(1000).fadeIn(300);
              });
          wheel1.navItems[1].navItem.mousedown(function (ev) {
               $(`.infoText0 span`).fadeOut(300);
               $(`.infoText0`).slideUp(1700);
               $(`.infoText2`).slideUp(1700);
               $(`.infoText3`).slideUp(1700);
               $(`.infoText1`).slideDown(1700);
              });
          wheel1.navItems[2].navItem.mousedown(function (ev) {
               $(`.infoText0 span`).fadeOut(300);
               $(`.infoText1`).slideUp(1700);
               $(`.infoText0`).slideUp(1700);
               $(`.infoText3`).slideUp(1700);
               $(`.infoText2`).slideDown(1700);
             });
          wheel1.navItems[3].navItem.mousedown(function (ev) {
               $(`.infoText0 span`).fadeOut(300);
               $(`.infoText1`).slideUp(1700);
               $(`.infoText2`).slideUp(1700);
               $(`.infoText0`).slideUp(1700);
               $(`.infoText3`).slideDown(1700);
             });

          }

        for (var i = 0; i < wheel2.navItems.length; i++) {
          wheel2.navItems[i].navigateFunction = function () {
            wheel1.navigateWheel(Math.abs(this.itemIndex));
          }
          wheel2.navItems[0].navItem.mousedown(function (ev) {
               $(`.infoText1`).slideUp(1700);
               $(`.infoText2`).slideUp(1700);
               $(`.infoText3`).slideUp(1700);
               $(`.infoText0`).slideDown(1700);
               $(`.infoText0 span`).delay(1000).fadeIn(300);
              });
          wheel2.navItems[1].navItem.mousedown(function (ev) {
               $(`.infoText0 span`).fadeOut(300);
               $(`.infoText0`).slideUp(1700);
               $(`.infoText2`).slideUp(1700);
               $(`.infoText3`).slideUp(1700);
               $(`.infoText1`).slideDown(1700);
              });
          wheel2.navItems[2].navItem.mousedown(function (ev) {
               $(`.infoText0 span`).fadeOut(300);
               $(`.infoText1`).slideUp(1700);
               $(`.infoText0`).slideUp(1700);
               $(`.infoText3`).slideUp(1700);
               $(`.infoText2`).slideDown(1700);
             });
          wheel2.navItems[3].navItem.mousedown(function (ev) {
               $(`.infoText0 span`).fadeOut(300);
               $(`.infoText1`).slideUp(1700);
               $(`.infoText2`).slideUp(1700);
               $(`.infoText0`).slideUp(1700);
               $(`.infoText3`).slideDown(1700);
             });
        }


        let photos = document.querySelectorAll(`.container img`);
        let leftBtn = document.querySelector(`span.left`);
        let rightBtn = document.querySelector(`span.right`);
        let counter = 0;

        rightBtn.addEventListener(`click`, function () {
            counter++;
            if (counter === photos.length) {
              counter = 0;
              }
            for (let i=0; i<photos.length; i++){
            photos[i].style.transform = `translate(${counter * (-100)}%,0)`;
          };

        })

        leftBtn.addEventListener(`click`, function () {
            counter--;
            if (counter< 0) {
              counter = photos.length - 1;
            }
            for (let i=0; i<photos.length; i++){
            photos[i].style.transform = `translate(${counter * (-100)}%,0)`;
          };

        })

        function GetClock(){
        var d=new Date();
        var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
        var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

        if(nhour==0){ap=" AM";nhour=12;}
        else if(nhour<12){ap=" AM";}
        else if(nhour==12){ap=" PM";}
        else if(nhour>12){ap=" PM";nhour-=12;}

        if(nmin<=9) nmin="0"+nmin;
        if(nsec<=9) nsec="0"+nsec;

        var clocktext=""+ndate+"/"+(nmonth+1)+"/"+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
        document.querySelector('.clockbox').innerHTML=clocktext;
        }

        GetClock();
        setInterval(GetClock,1000);

})
