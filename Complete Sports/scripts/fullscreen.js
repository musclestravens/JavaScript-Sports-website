/* Get the element you want displayed in fullscreen */ 
var item = document.documentElement;

/* Function to open fullscreen mode */
function openFullscreen() {
  if (item.requestFullscreen) {
    item.requestFullscreen();
  } else if (item.mozRequestFullScreen) { /* Firefox */
    item.mozRequestFullScreen();
  } else if (item.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    item.webkitRequestFullscreen();
  } else if (item.msRequestFullscreen) { /* IE/Edge */
    item = window.top.document.body; //To break out of frame in IE
    item.msRequestFullscreen();
  }
}

/* Function to close fullscreen mode */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    window.top.document.msExitFullscreen();
  }
}

// Events
var output = document.getElementById("myP");
document.addEventListener("fullscreenchange", function() {
  output.innerHTML = "fullscreenchange event fired!";
});
document.addEventListener("mozfullscreenchange", function() {
  output.innerHTML = "mozfullscreenchange event fired!";
});
document.addEventListener("webkitfullscreenchange", function() {
  output.innerHTML = "webkitfullscreenchange event fired!";
});
document.addEventListener("msfullscreenchange", function() {
  output.innerHTML = "msfullscreenchange event fired!";
});