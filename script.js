// Global constants
// length of time for clue light/sound
const cluePauseTime = 333; // length of pause between clues
const nextClueWaitTime = 1000; // time to wait before next sequence plays

// Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var strike = 0;

function startGame() {
  // for loop to populate random array
  for (let i = 0; i <= 6; i++) {
    pattern[i] = Math.ceil(Math.random() * 6);
  }
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  strike = 0;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  // timer
  count = 45;
  update = setInterval("timer()", 1000);
  // reset timer and mistakes innerHTML on game start
  strikes.innerHTML = strike;
  timeLeft.innerHTML = count;
}

function stopGame() {
  gamePlaying = false;
  // swap the Start and Stop buttons back
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  // resets the clueHoldTime back to 1000 when game is stopped
  clueHoldTime = 1000;
  // clears interval when game is stopped
  clearInterval(update);
}

// light and clear buttons
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

// playing single clue
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// playing clue sequence
function playClueSequence() {
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    guessCounter = 0;
    console.log("play single clue: " + pattern[i] + "in " + delay + " ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
    // speeds up clueHoldTime after each turn
    clueHoldTime /= 1.12;
  }
}

// lose and win functions
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You Won!");
}

// guess function
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  // increment strike count if guess wrong, updates #strikes span in html
  if (pattern[guessCounter] != btn) {
    strike++;
    strikes.innerHTML = strike;
  }
  // check for guesses, loses game if player makes 3 mistakes
  if (pattern[guessCounter] == btn) {
    // correct guess
    if (guessCounter == progress) {
      if (guessCounter == pattern.length - 1) {
        // Game Over. Win
        winGame();
      } else {
        // Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      // check the next guess
      guessCounter++;
    }
  } else if (strike > 2) {
    //incorrect guess
    // Game Over. Lose
    loseGame();
  }
}

// timer function
function timer() {
  count -= 1;
  if (count < 45) {
    timeLeft.innerHTML = count;
  }
  if (count < 1) {
    loseGame();
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 622.3,
  6: 740,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
