const play = document.getElementById("play");
const prev = document.getElementById("prev");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const img = document.querySelector("img");
const music = document.querySelector("audio");
const Next = document.querySelector("#next");

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

  Next.addEventListener("click", nextSong);
  prev.addEventListener("click", prevSong);