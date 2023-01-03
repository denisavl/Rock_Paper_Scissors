let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let playerWin = 0;
let computerWin = 0;
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
let playerScoreT = document.querySelector('.playerScore');
let computerScoreT = document.querySelector('.computerScore');
const resultRound = document.querySelector('.result-round');
const round = document.querySelector('.round');
const choise = document.querySelector('.choise');
const resultPlayer = document.querySelector('.resultPlayer'); 
const resultComputer = document.querySelector('.resultComputer');
const yesBtn = document.querySelector('.yes');
yesBtn.style.display="none";
const yes1Btn = document.querySelector('.yes1');
yes1Btn.style.display="none";
const noBtn = document.querySelector('.no');
noBtn.style.display="none";
let playerWinT = document.querySelector('.user');
let computerWinT = document.querySelector('.computer');
const modalPlayer =document.querySelector('.modalPlayer');
const modalComputer =document.querySelector('.modalComputer');
const winSound = document.querySelector('.win');
const loseSound = document.querySelector('.lose');
let audio = document.querySelector('#audio');
let muteBtn = document.querySelector('.muteBtn');
let onBtn = document.querySelector('.onBtn');
muteBtn.style.display = "none";
let player = document.getElementById('player');

rockBtn.addEventListener('click', buttonRockClicked);
paperBtn.addEventListener('click', buttonPaperClicked);
scissorsBtn.addEventListener('click', buttonScissorsClicked);
yesBtn.addEventListener('click',reloadGame);
yes1Btn.addEventListener('click',reloadGame);
muteBtn.addEventListener('click',muteAudio);
onBtn.addEventListener('click',muteAudio);


function getComputerSelection(){
    let choise = Math.random();
    if(choise < 0.33){
        choise = "ROCK";
    }
    else if(choise < 0.67){
        choise = "PAPER";
    }
    else choise = "SCISSORS";
    return choise;
}

function buttonRockClicked(){
    playerSelection = 'ROCK';
    computerSelection = getComputerSelection();
    playGame();
    choise.style.display = "none";
}

function buttonPaperClicked(){
    playerSelection = 'PAPER';
    computerSelection = getComputerSelection();
    playGame();
    choise.style.display = "none";
}

function buttonScissorsClicked(){
    playerSelection = 'SCISSORS';
    computerSelection = getComputerSelection();
    playGame();
    choise.style.display = "none";

}

function playGame(){
    if(playerSelection ==="ROCK" && computerSelection ==="SCISSORS" ||
    playerSelection === "SCISSORS" && computerSelection === "PAPER" ||
    playerSelection === "PAPER" && computerSelection === "ROCK"){
    playerScore++;
    round.innerHTML = "You won 🎉. " + playerSelection + " beats " + computerSelection;
    playerScoreT.innerHTML = playerScore;
    

    if(playerScore == 5){
        openModalPlayer();
        winSongPlay();
        resultPlayer.innerHTML = "CONGRATS. YOU WON THE GAME";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        playerWin++;
        playerWinT.innerHTML = playerWin;
        
        yesBtn.style.display="inline-block";
        noBtn.style.display="inline-block";
        
    }
    }
    else if( playerSelection ==="SCISSORS" && computerSelection ==="ROCK" ||
    playerSelection ==="PAPER" && computerSelection ==="SCISSORS" ||
    playerSelection === "ROCK" && computerSelection ==="PAPER"){
    computerScore++;
    round.innerHTML = `Computer won 😔. ${computerSelection} beats ${playerSelection}. `
    computerScoreT.innerHTML = computerScore;
    
    if(computerScore == 5){
        openModalComputer();
        loseSongPlay();
        resultComputer.innerHTML = "GAME OVER. COMPUTER WON.";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        computerWin++;
        computerWinT.innerHTML = computerWin;

        yes1Btn.style.display="inline-block";
        noBtn.style.display="inline-block";
        
        
    }
}
    else round.innerHTML = `Tie. You both choose ${playerSelection}`;
    
}


function reloadGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreT.innerHTML = "0";
    computerScoreT.innerHTML = "0";
    round.innerHTML = "";
    resultPlayer.innerHTML = "";
    resultComputer.innerHTML = "";
    yesBtn.style.display="none";
    yes1Btn.style.display="none";
    noBtn.style.display="none";
    modalPlayer.classList.remove('active');
    modalComputer.classList.remove('active');
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    winSound.pause();
    loseSound.pause();
    choise.style.display = "inline-block";
    audio.muted = false;
}

function openModalPlayer(){
    modalPlayer.classList.add('active');
}


function openModalComputer(){
    modalComputer.classList.add('active');

}

window.onload=function(){
    audio.play();
  }

function winSongPlay(){
    audio.muted = true;
    winSound.play();
}

function loseSongPlay(){
    audio.muted = true;
    loseSound.play();
}

function muteAudio(){
    if(audio.muted){
      audio.muted = false;
      muteBtn.style.display = "none";
      onBtn.style.display = "block";
    }
    else {
      audio.muted = true;
      muteBtn.style.display = "block";
      onBtn.style.display = "none";
    }
  }

window.addEventListener('load', () => {

    const user = localStorage.getItem('USER');
    document.getElementById('result-user').innerHTML = user;
})

function close_window() {
    if (confirm("Close Window?")) {
      close();
    }
  }
