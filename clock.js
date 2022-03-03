const clock = document.querySelector(".js-clock");
const CLOOCK_NUM = 8;

const keyframes = [
  {
    transform: `skew(${Math.random() * 90})`,
  },
];

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clock.innerText = `${hours > 9 ? hours : `0${hours}`}:${
    minutes > 9 ? minutes : `0${minutes}`
  }:${seconds > 9 ? seconds : `0${seconds}`}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
