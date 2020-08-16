const CLOCK_NUM = 8;
let clock = [];

function arr() {
    for (let i = 1; i <= CLOCK_NUM; i++) {
        clock[i - 1] = document.querySelector(`.js-clock${i}`);
    }
}

function position() {
    arr();
    for (let a = 0; a < CLOCK_NUM; a++) {
        let RDN = Math.random() * 600;
        RDN = Math.floor(Math.random() * 600);
        clock[a].style.cssText= `top: ${Math.floor(Math.random() * 600)}; left: ${Math.floor(Math.random() * 600)}; transform: rotate(${Math.floor(Math.random() * 90)}deg); transform: skew(${Math.floor(Math.random() * 90)}deg, ${Math.floor(Math.random() * 90)}deg); font-size(${Math.floor(Math.random() * 20)+10}px)`;
    }
}
function init() {
    position();

}
init();