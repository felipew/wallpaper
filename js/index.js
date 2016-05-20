document.addEventListener('DOMContentLoaded', bootstrapApp);

var btn,refresh,ifr,close, waiting;

function bootstrapApp (event) {
  btn = document.getElementById("generator");
  btn.addEventListener("click", btnClick)
  
  refresh = document.getElementById('refresh');
  refresh.addEventListener("click", btnClick);
  
  ifr = document.getElementById('ifr')
  ifr.addEventListener("load",ok);
  
  close = document.getElementById("close");
  close.addEventListener("click", closeHandler);
  
  waiting = document.getElementById("waiting");
}

function btnClick() {
  closeHandler();
  showWaiting();
  var unsplash = "https://source.unsplash.com/random/";
  var x = screen.width;
  var y = screen.height;
  var finalURL = unsplash+x+"x"+y;
  
  // window.open(finalURL); // be happy :)
  
  ifr.src = finalURL;
}

function ok() {   
  ifr.style.display =  "block";
  refresh.style.display = "block";
  close.style.display = "block"
  waiting.style.display = "none";
}
  
function closeHandler() {
  ifr.style.display = "none";
  refresh.style.display = "none";
  close.style.display = "none"
}

function showWaiting() {
  waiting.style.display = "block";
}