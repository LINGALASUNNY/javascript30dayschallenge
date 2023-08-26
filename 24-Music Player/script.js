let playPauseBtn=document.getElementById("playPauseBtn");
let progressBar=document.getElementById("progressbar");

const song=new Audio("Yenno Yenno.mp3");

//play and pause the song.

playPauseBtn.addEventListener("click",function(){
    if(playPauseBtn.classList=="fa-solid fa-play"){
        song.play();
        playPauseBtn.classList="fa-solid fa-pause";

        //progress bar increasing with song time

        setInterval(()=>{
            progressBar.max=song.duration;
            progressBar.value=song.currentTime;
            document.getElementById("song-currenttime").innerHTML=(song.currentTime/60).toFixed(2);
        },500);

        //display song current time and song end time

        document.getElementById("song-currenttime").innerHTML=(song.currentTime/60).toFixed(2);
        document.getElementById("song-duration").innerHTML=(song.duration/60).toFixed(2);
        
    }
    else if(playPauseBtn.classList=="fa-solid fa-pause"){
        song.pause();
        playPauseBtn.classList="fa-solid fa-play";
    }
});

// click on progress bar and song will play that point.

progressBar.onchange=function(){
            song.currentTime=progressBar.value;
}