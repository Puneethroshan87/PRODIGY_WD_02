let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let isRunning = false;
let lapTimes = [];

const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapTimesList = document.getElementById('lap-times');

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', addLapTime);

function startStopwatch() {
  if (!isRunning) {
    intervalId = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

function pauseStopwatch() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
}

function resetStopwatch() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  lapTimes = [];
  display.textContent = `00:00:00`;
  lapTimesList.innerHTML = '';
  isRunning = false;
  clearInterval(intervalId);
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return (number < 10? '0' : '') + number;
}

function addLapTime() {
  const lapTime = display.textContent;
  lapTimes.push(lapTime);
  const lapTimeListItem = document.createElement('li');
  lapTimeListItem.textContent = lapTime;
  lapTimesList.appendChild(lapTimeListItem);
}