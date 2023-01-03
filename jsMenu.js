let audioMenu = document.querySelector('#audioMenu');
let muteBtn = document.querySelector('.muteBtn');
let onBtn = document.querySelector('.onBtn');
let exitBtn = document.querySelector('.exitBtn');
const modalMenu = document.querySelector(".modal");
const playBtn = document.querySelector(".play");
muteBtn.style.display = "none";

muteBtn.addEventListener('click',muteAudio);
onBtn.addEventListener('click',muteAudio);
playBtn.addEventListener('click', openModalMenu);

function close_window() {
  if (confirm("Close Window?")) {
    close();
  }
}

function muteAudio(){
  if(audioMenu.muted){
    audioMenu.muted = false;
    muteBtn.style.display = "none";
    onBtn.style.display = "block";
  }
  else {
    audioMenu.muted = true;
    muteBtn.style.display = "block";
    onBtn.style.display = "none";
  }
}

function openModalMenu(){
modalMenu.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modalMenu) {
      modalMenu.style.display = "none";
    }
}

function handleSubmit(){
  const user = document.getElementById('userInput').value;

  localStorage.setItem("USER", user);

  return;
}
