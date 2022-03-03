const body = document.querySelector("body");

const IMGAE_NUMBER = 3;

function setBgImg(imgNumber) {
    const img = new Image();
    img.src = `images/${imgNumber + 1}.jpg`;
    img.classList.add("bgImg")
    body.prepend(img);
}
function getRandom() {
    const number = Math.floor(Math.random() * IMGAE_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    setBgImg(randomNumber);
}
init();



