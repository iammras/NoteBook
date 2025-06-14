/*const audio=document.getElementById("audio");
const playpausebtn=document.getElementById("playpause");
const progress=document.getElementById("progress");

playpausebtn.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
         playpausebtn.textContent="pause";
    }else{
        audio.pause();
         playpausebtn.textContent="play";
    }
});
audio.addEventListener("timeupdate",()=>{
  progress.value=audio.currentTime;
  progress.max=audio.duration;
});
progress.addEventListener("input",()=>{
  audio.currentTime=progress.value;
});
*/
const audio=document.getElementById("audio");
const playpausebtn=document.getElementById("playpause");
const progress=document.getElementById("progress");

playpausebtn.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
        playpausebtn.textContent="pause";
    }else{
        audio.pause();
        playpausebtn.textContent="play";
    }
});

audio.addEventListener("timeupdate",()=>{
    progress.value=audio.currentTime;
    progress.max=audio.duration;
});

progress.addEventListener("input",()=>{
  audio.currentTime=progress.value;
});