
const songs = [
    { title: "Wild Flower", artist: "Billie ELLIES", album: "HIT ME HARD AND SOFT", src: "/music/Billie Eilish - WILDFLOWER (Official Lyric Video).mp3", cover: "/image/bilii.jpg",backgroundvideo:"video/0dfba749289b0650010b80f72d15ed20.mp4" },
    { title: "Jhol", artist: "Annural & Maanu", album: "Jhol | Coke Studio Pakistan | Season 15 | Maanu x Annural Khalid", src: "/music/Jhol _ Coke Studio Pakistan _ Season 15 _ Maanu x Annural Khalid.mp3", cover: "/image/Jhol-Punjabi.jpg",backgroundvideo:"/video/videoplayback.mp4" },
    { title: "TITANIC", artist: "Jackson Wang", album: "‘jackson wang’", src: "music/TITANIC (feat. Rich Brian).mp3", cover: "image/titanic.cover.jpg" ,backgroundvideo:"video/352fb803d1a7dc09a95177992bd446c8 (1).mp4" },
    { title: "Hangover love", artist: "JENNIE", album: "‘Ruby’", src: "/music/JENNIE & Dominic Fike - Love Hangover (Official Lyric Video).mp3", cover: "image/LOVE-HANGOVER.jpg" ,backgroundvideo:"/video/84aaf755e95d45b3b2e0459ac4fbc451.mp4" },
]

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const seekBar = document.getElementById("seek-bar");
const repeatButton = document.getElementById("repeat");
const infiniteButton = document.getElementById("infinite");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const songTitle = document.getElementById("song-title");
const artist = document.getElementById("artist");
const album = document.getElementById("album");
const albumArt = document.getElementById("album-art");


function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    album.textContent = song.album;
    audio.src = song.src;
    albumArt.src = song.cover;
    //change in background
    const bgvideo = document.getElementById("bgvideo");
    bgvideo.src = song.backgroundvideo;
    bgvideo.load();
    
    // Mute the video and set it to autoplay
    bgvideo.muted = true;
    bgvideo.autoplay = true;
    bgvideo.loop = true; // 
}

playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = "&#10074;&#10074;";
    } else {
        audio.pause();
        playPauseButton.innerHTML = "&#9654;";
    }
});

nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseButton.innerHTML = "&#10074;&#10074;";
});

prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseButton.innerHTML = "&#10074;&#10074;";
});

audio.addEventListener("timeupdate", () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
});

seekBar.addEventListener("input", () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
});

repeatButton.addEventListener("click", () => {
    audio.loop = !audio.loop;
    repeatButton.style.color = audio.loop ? "green" : "white";
});

infiniteButton.addEventListener("click", () => {
    audio.addEventListener("ended", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audio.play();
    });
    infiniteButton.style.color = "green";
});
document.querySelector(".exit-btn").addEventListener("click", () => {
window.history.back(); // Takes the user to the previous page
});


loadSong(currentSongIndex);

 
