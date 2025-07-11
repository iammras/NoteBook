const audio = document.getElementById("audio");
const playpausebtn = document.getElementById("playpause");
const progress = document.getElementById("progress");


// Set max value when metadata is loaded
audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
});

// Play / Pause toggle button
playpausebtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playpausebtn.textContent = "Pause";
    } else {
        audio.pause();
        playpausebtn.textContent = "Play";
    }
});

// Update progress bar as song plays
audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
});

// Seek functionality when user changes slider
progress.addEventListener("change", () => {
    audio.currentTime = progress.value;
});


document.getElementById('hide').addEventListener('click',()=>{
  if(document.querySelector('#hide').innerHTML==='Hide'){  
  document.querySelector('.lovebox').style.display='none';
  document.getElementById('hide').innerHTML='Show';
  document
  }else{
    document.querySelector('.lovebox').style.display='block';
    document.getElementById('hide').innerHTML='Hide';
  }
});