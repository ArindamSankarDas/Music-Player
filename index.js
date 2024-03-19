let bodyContainer = document.querySelector(".body-container");

// track details
let nowPlaying = document.querySelector(".now-playing");
let trackArt = document.querySelector(".track-art");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");

// controller
let prevBtn = document.querySelector(".prev-track");
let playBtn = document.querySelector(".play-track");
let nextBtn = document.querySelector(".next-track");

// timeline slider
let initialTime = document.querySelector(".initial-time");
let seekSlider = document.querySelector(".sleek-slider");
let totalTime = document.querySelector(".total-time");

// volume slider
let volumeSlider = document.querySelector(".volume-slider");

// gobal variables that can be updated
let trackIndex = 0;
let isPlaying = false;
let updateTimer;

// audio element
let currAudio = document.createElement("audio");

// music array
let musicData = [
  {
    name: "Memory Reboot",
    artist: "V0J, Narvent",
    image: "./assets/images/memory-reboot.jpg",
    path: "./assets/audio/memory-reboot.mp3",
  },
  {
    name: "The Lost Soul Down",
    artist: "NBSPLV",
    image: "./assets/images/lost-soul.jpeg",
    path: "./assets/audio/the-lost-soul-down.mp3",
  },
  {
    name: "Metamorphosis",
    artist: "Interworld",
    image: "./assets/images/metamorphosis.jpg",
    path: "./assets/audio/metamorphosis.mp3",
  },
];

//the logic
function loadTrack(track_index) {
  const trackInfo = musicData[track_index];

  clearInterval(updateTimer);
  resetAll();

  currAudio.src = trackInfo.path;
  currAudio.load();

  trackArt.src = trackInfo.image;
  nowPlaying.innerText = `Playing ${trackInfo.name} by ${trackInfo.artist}`;
  trackName.innerText = trackInfo.name;
  trackArtist.innerText = trackInfo.artist;

  updateTimer = setInterval(() => {
    seekUpdate();
  }, 1000);

  currAudio.addEventListener("ended", nextTrack);
  randomBgColor();
}

function randomBgColor() {
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  let bgColor = `rgb(${red}, ${green}, ${blue})`;
  bodyContainer.style.background = bgColor;
}

function resetAll() {
  seekSlider.value = 0;
  initialTime.innerText = "00:00";
  totalTime.innerText = "00:00";
}

function playAndPauseTrack() {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function playTrack() {
  currAudio.play();

  isPlaying = true;

  playBtn.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
}

function pauseTrack() {
  currAudio.pause();

  isPlaying = false;

  playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
}

function nextTrack() {
  if (trackIndex < musicData.length - 1) {
    trackIndex += 1;
  } else {
    trackIndex = 0;
  }

  loadTrack(trackIndex);
  playTrack();
}

function prevTrack() {
  if (trackIndex > 0) {
    trackIndex -= 1;
  } else {
    trackIndex = trackIndex.length - 1;
  }

  loadTrack(trackIndex);
  playTrack();
}

function seekTo() {
  let seekTime = currAudio.duration * (seekSlider.value / 100);
  currAudio.currentTime = seekTime;
}

function setVolume() {
  currAudio.volume = volumeSlider.value / 100;
}

function seekUpdate() {
  let seekPostion = 0;

  if (!isNaN(currAudio.duration)) {
    seekPostion = currAudio.currentTime * (100 / currAudio.duration);
    seekSlider.value = seekPostion;

    let currentMinutes = Math.floor(currAudio.currentTime / 60);
    let currentSeconds = Math.floor(
      currAudio.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(currAudio.duration / 60);
    let durationSeconds = Math.floor(currAudio.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    initialTime.textContent = currentMinutes + ":" + currentSeconds;
    totalTime.textContent = durationMinutes + ":" + durationSeconds;
  }
}

loadTrack(0);
