let hourHand=document.querySelector(".hourHand");
let minuteHand=document.querySelector(".minuteHand");
let secondsHand=document.querySelector(".secondsHand");

function setDate(){

  //date object 
    let date=new Date();

    let presentHour=date.getHours();
    let presentMinute=date.getMinutes();
    let presentSeconds=date.getSeconds();
   
   //hour-hand rotation 
    let hourDeg=((presentHour/12)*360)+((presentMinute/60)*30)+90;
    hourHand.style.transform=`rotate(${hourDeg}deg)`;

   //minute-hand rotation 
    let minuteDeg=((presentMinute/60)*360)+((presentSeconds/60)*6)+90;
    minuteHand.style.transform=`rotate(${minuteDeg}deg)`;

  //seconds-hand rotation 
    let secondsDeg=((presentSeconds/60)*360)+90;
    secondsHand.style.transform=`rotate(${secondsDeg}deg)`;

    console.log(presentSeconds);

}
setInterval(setDate,1000);