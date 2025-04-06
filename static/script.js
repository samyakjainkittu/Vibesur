console.log("Welcome ");
let songIndex = 0;
let audioElement = new Audio('/static/song/1.mp3');
let gif = document.getElementById('gif');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let masterSongName = document.getElementById('masterSongName');
let q;
let songs = [
    { songName: "Kesariya-Arijit Singh"},
    { songName: "Desh Mere-Arijit Singh"},
    { songName: "Tujhe Kitna Chahne Lage-Arijit Singh" },
    { songName: "Ae Dil Hai Mushkil-Arijit Singh" },
    { songName: "Deva Deva-Arijit Singh " },
    { songName: "Bandeya Rey Bandeya-Arijit Singh" },
    { songName: "Tum Hi Ho-Arijit Singh" },
    { songName: "Ban Ja Tu Meri Rani-Ghru Randhava" },
    { songName: "Mehendi Wale Haath-Ghru Randhava"},
    { songName: "Ishare Tere-Ghru Randhava" },
    { songName: "Lahore-Ghru Randhava" },
    { songName: "High Rated Gabru-Ghru Randhava"},
    { songName: "Morni Banke-Ghru Randhava" },
    { songName: "Suit Suit-Ghru Randhava"},
    { songName: "Vaaste-Dhvani Bhanushali" },
    { songName: "Mile Ho Tum-Tony Kakkar" },
    { songName: "Raataan Lambiyan-Asees Kaur and Jubin Nautiyal"},
    { songName: "Laung Laachi-Mannat Noor" },
    { songName: "Pasoori-Ali Sethi and Shae Gill" },
]

//handae play or pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        console.log("play ");
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

        q = document.getElementById(`${songIndex}`);

        q.classList.remove('fa-play-circle');
        q.classList.add('fa-pause-circle');



    }
    else {
        console.log("Pause");
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

        q = document.getElementById(`${songIndex}`);

        q.classList.remove('fa-pause-circle');
        q.classList.add('fa-play-circle');
    }

});






//listen to Events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    progressbar.value = progress;
})

progressbar.addEventListener('change', () => {
    audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;

})



audioElement.addEventListener('ended', function () {
    console.log("complet");
    if (songIndex >=18) {
        songIndex = 0

    }
    else {
        songIndex += 1;
    }
    audioElement.src = `/static/song/${songIndex + 1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    q = document.getElementById(`${songIndex}`);
    q.classList.remove('fa-play-circle');
    q.classList.add('fa-pause-circle');


    if (songIndex == 7) {
        document.getElementById('gu').scrollIntoView();
    }
    else if (songIndex == 0) {
        // document.getElementById('arjit').scrollIntoView();
        scrollTo(top);
    }
    else if(songIndex == 14){
        document.getElementById('hp').scrollIntoView();
    }




});




const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        // console.log(songIndex);
        audioElement.src = `/static/song/${songIndex + 1}.mp3`
        audioElement.currentTime = 0;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongName.innerHTML = songs[songIndex].songName;
    })

});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 18) {
        songIndex = 0

    }
    else {
        songIndex += 1;
    }
    audioElement.src = `/static/song/${songIndex + 1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    q = document.getElementById(`${songIndex}`);
    q.classList.remove('fa-play-circle');
    q.classList.add('fa-pause-circle');

    if (songIndex == 7) {
        document.getElementById('gu').scrollIntoView();
    }
    else if (songIndex == 0) {
        // document.getElementById('arjit').scrollIntoView();
        scrollTo(top);
    }

    else if(songIndex == 14){
        document.getElementById('hp').scrollIntoView();
    }



});
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 18;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `/static/song/${songIndex + 1}.mp3`
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    q = document.getElementById(`${songIndex}`);
    q.classList.remove('fa-play-circle');
    q.classList.add('fa-pause-circle');

    if (songIndex == 6) {
        // document.getElementById('arjit').scrollIntoView();
        scrollTo(top);

    }
    else if(songIndex == 13){
        document.getElementById('gu').scrollIntoView();
    }

    else if (songIndex == 18) {
        document.getElementById('hp').scrollIntoView();

    }

});


document.getElementById('a').addEventListener('click' ,() => {
    scrollTo(top);

})

document.getElementById('g').addEventListener('click' ,(element) => {
    document.getElementById('gu').scrollIntoView();
    // element.scroll(200, 1000);
})