let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.current;
}

function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
    }
    else{
        song.play();
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
}

song.addEventListener('play', function(){
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
});

song.addEventListener('pause', function(){
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
});

song.addEventListener('ended', function(){  
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
});

function favorite()
{
    let fav = document.getElementById('fav');
    if(fav.classList.contains('fa-regular')){
        fav.classList.remove('fa-regular');
        fav.classList.add('fa-solid');
        fav.style.color = '#ff7bcf';
    }
    else{
        fav.classList.remove('fa-solid');
        fav.classList.add('fa-regular');
        fav.style.color = '#888';
    }
}