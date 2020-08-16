const body = document.querySelector("body");

const IMGAE_NUMBER = 3;

function handleImgLoaded() {
    console.log("well");
}
function setBgImg(imgNumber) {
    const img = new Image();
    img.src = `images/${imgNumber + 1}.jpg`;
    img.addEventListener("load", handleImgLoaded);
    img.classList.add("bgImg")
    body.prepend(img);
}
function getRandom() {
    const number = Math.floor(Math.random() * IMGAE_NUMBER);
    return number;
    //floor:바닥, ceiling:천장 
}

function init(){
    const randomNumber = getRandom();
    setBgImg(randomNumber);
}
init();



