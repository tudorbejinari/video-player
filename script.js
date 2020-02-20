const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play & pause video
function toggleVideoStatus() {
  video.paused ? video.play() : video.pause();
}
//Update Play/pause icon
function updatePlayIcon() {
  video.paused
    ? (play.innerHTML = '<i class ="fa fa-play fa-2x"></i>')
    : (play.innerHTML = '<i class="fa fa-pause fa-2x"></i>');
}
//update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  //Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }
  timestamp.innerHTML = `${mins}:${secs}`;
}

//set video time to progress
function setVideoProgress(params) {
  video.currentTime = (+progress.value * video.duration) / 100;
}
//Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Even Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
