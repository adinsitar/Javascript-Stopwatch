"use strict";

const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;

function increment() {
  miliseconds++;
  if (miliseconds === 100) {
    seconds++;
    miliseconds = 0;
  }
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (miliseconds < 10 || miliseconds === 0) {
    miliseconds = "0" + miliseconds;
  }
  if (seconds < 10 || seconds === 0) {
    seconds = "0" + parseInt(seconds);
  }
  if (minutes < 10 || minutes === 0) {
    minutes = "0" + parseInt(minutes);
  }

  timer.innerHTML = `${minutes}:${seconds}:${miliseconds}`;
}

function startTimer() {
  stopTimer();
  interval = setInterval(increment, 10);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();

  minutes = "00";
  seconds = "00";
  miliseconds = "00";

  timer.innerHTML = `${minutes}:${seconds}:${miliseconds}`;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
