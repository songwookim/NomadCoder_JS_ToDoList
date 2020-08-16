const a = document.querySelector("#if");
const CLOOCK_NUM = 8;

const keyframes =[
{
    transform: `skew(${Math.random() * 90})`,
}]


let clockContainer = new Array();
let clockTitle = new Array();

function arr() {
    for (let i = 1; i <= CLOOCK_NUM; i++) {
        clockContainer[i - 1] = document.querySelector(`.js-clock${i}`);
        clockTitle[i - 1] = clockContainer[i - 1].querySelector("h1");
    }
}
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    arr();
    const rdn = Math.random()*360;
    a.style.cssText = `transform: rotate(${rdn}deg)`;
    for (let i = 1; i <= CLOOCK_NUM; i++) {
        clockTitle[i - 1].innerText = `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`
    }
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
