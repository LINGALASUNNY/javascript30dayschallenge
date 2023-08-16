const audio=new Audio("clock.mp3");
let [hours,minutes,seconds]=[0,0,0];
let displayTimer=document.querySelector(".displayTimer");
let timer=null;

function stopwatch(){

      seconds++;
      if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
      }

      h=hours<10?"0"+hours:hours;
      m=minutes<10?"0"+minutes:minutes;
      s=seconds<10?"0"+seconds:seconds;
     displayTimer.innerHTML=h+":"+m+":"+s;

     audio.play();
}

function watchstart(){
    if(timer!=null){
      clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
   
}
function watchstop(){
    clearInterval(timer);
    audio.pause();
}
function watchreset(){
    clearInterval(timer);
    [hours,minutes,seconds]=[0,0,0];
    displayTimer.innerHTML="00:00:00";
    audio.pause();
    audio.currentTime=0;
}






