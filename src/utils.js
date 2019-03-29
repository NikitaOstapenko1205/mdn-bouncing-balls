const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
const checkTimeLength = num => (+num <= 9 ? `0${num}` : num);

const timerElem = document.querySelector('.timer');
let actualTime = '';
let minutes = 0;
let seconds = 0;
let interval;

const endTimer = () => {
  clearInterval(interval);
  if ((minutes * 60 + seconds < sessionStorage['minutes'] * 60 + sessionStorage['seconds']) || !sessionStorage['minutes']) {
    sessionStorage['minutes'] = minutes;
    sessionStorage['seconds'] = seconds;
  }
  document.querySelector('.best-time').textContent = `Your best time: 
    ${checkTimeLength(sessionStorage['minutes'])} : 
    ${checkTimeLength(sessionStorage['seconds'])}`;
  document.querySelector('span').textContent = actualTime;

  minutes = 0;
  seconds = 0;
  timerElem.textContent = '00 : 00';
};

const startTimer = () => {
  interval = setInterval(() => {
    seconds += 1;
    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }
    if (minutes === 60) {
      console.log('YOU DIED');
      endTimer();
    }
    const strMin = checkTimeLength(minutes);
    const strSec = checkTimeLength(seconds);

    actualTime = `${strMin} : ${strSec}`;
    timerElem.textContent = actualTime;
  }, 1000);
};


export { getRandomInt, startTimer, endTimer };
