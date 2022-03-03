const weather = document.querySelector(".js-weather");

const API_KEYS = "6fc9803c5657641a29b05c3d7a1bcc2a",
    COORDS = "coords";

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`)
    //네트워크로 받아오는 중에 에러가 생길 수도 있어서 then을 붙여줘야 해요 
    .then(function(response) {
        //<pending>은 json이 대기중인 상태를 의미해요 response.json()을 실행해야 데이터를 받아와요
        return response.json();
    }).then(function(json) {
        const tempertature = Math.floor(json.main.temp);
        const city = json.name;
        weather.innerText = `${tempertature}℃ @ ${city}`
    });
}
function saveCoords(coordsObj) {
    localStorage.setItem("coords", JSON.stringify(coordsObj));
}
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}
function handleGeoError() {
    console.log("we did not get coords");
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords == null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        //데이터를 읽어오는 것은 parse분해해줘야하고, 저장시키는 것은 Stringify
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}
function init() {
    loadCoords();
}

init();