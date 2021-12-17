const play = document.getElementById("play");
const prev = document.getElementById("prev");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const img = document.querySelector("img");
const music = document.querySelector("audio");
const Next = document.querySelector("#next");
const progress = document.getElementById("progress");
const currenttime = document.getElementById("current_time");
const total_Duration = document.getElementById("duration");
const proggressbarDiv = document.getElementById("progressbar_div");

const songs = [{
    name:"kgf-1",
    title:"Awesome tune",
    artist:"Shiv",
    pic:"bulb",
},
{
    name:"kgf-2",
    title:"Awesome song",
    artist:"Shivanand",
    pic:"deer",
},
{
    name:"kgf-3",
    title:"Nice tune",
    artist:"Shivanad Verma",
    pic:"lake",
},
];

let isPlyback = "false";
const  playMusic = () => {
    isPlyback = "true";
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};
const pauseMusic =  () => {
    isPlyback = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
  };
  play.addEventListener("click", () => {
      isPlyback ? pauseMusic() : playMusic(); 

  });

 const loadSong = (songs) => {
     title.textContent = songs.title;
     artist.textContent = songs.artist;
     music.src = "kgf/"+songs.name+".mp3";
     img.src = "images/"+songs.pic+".jpg";
 };
  songIndex = 0;
   const nextSong = () => {
       songIndex = (songIndex + 1 ) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
   };
   const  prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
 loadSong(songs[songIndex]);
 playMusic();
};
// progress work js
music.addEventListener("timeupdate", (shiv) =>{
    const { currentTime , duration } = shiv.target;
    let progress_time = (currentTime/duration)*100;
    progress.style.width = `${progress_time}%`;

    // duration work js
    let minute_duration = Math.floor(duration/60);
    let sec_duration = Math.floor(duration%60);
    let tot_duration = `${ minute_duration} : ${sec_duration}`; 
   if (duration) {
    total_Duration.textContent = `${tot_duration}`;
   };
//    current duration work js
     let minute_currentTime = Math.floor(currentTime/60);
    let sec_currentTime = Math.floor(currentTime%60);
    if (sec_currentTime<10) {
        sec_currentTime = `0${sec_currentTime}`;
    };
    let tot_currentTime = `${ minute_currentTime} : ${sec_currentTime}`; 
   currenttime.textContent = `${tot_currentTime}`;
});
proggressbarDiv.addEventListener("click", (shiva) =>{
  const {duration} = music;
  let move_progress = (shiva.offsetX / shiva.target.clientWidth)*duration;
  music.currentTime = move_progress;
});

music.addEventListener("ended", nextSong );

  Next.addEventListener("click", nextSong);
  prev.addEventListener("click", prevSong);