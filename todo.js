const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    ifSpan = toDoForm.querySelector("#if");

const TODOS_LS = "toDos",
    CHECK = "IF YOU HAVE";

let toDos = [];
function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}
function delBtnEvent(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDoS) {
        return toDoS.id !== parseInt(li.id);
        //true값만 모아서 리턴
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text) {
    const newId = toDos.length + 1;
    const li = document.createElement("li");
    li.id = newId;
    const delBtn = document.createElement("img");
    delBtn.src = "https://img.favpng.com/10/25/7/x-mark-check-mark-cross-sign-clip-art-png-favpng-sF5GnUQmM4x0ruAsv67aZjDK1.jpg"
    const span = document.createElement("span");
    span.innerText = text;

    delBtn.addEventListener("click", delBtnEvent);

    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

    toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function LoadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    //refresh했을 때 js내에서 저장된 toDos는 무시하고 오로지 data값만으로 참조해서 다시 만든다.
    if (loadedToDos !== null) {
        const parsedToDo = JSON.parse(loadedToDos);
        //JavaScript Object Notation : 데이터를 읽을 때 String으로 오는 값들을 object로 변환시켜준다.
        //forEach는 배열을 위한 함수
        parsedToDo.forEach(function (toDos) {
            paintToDo(toDos.text);
        })
    }
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;

    paintToDo(currentValue);
    toDoInput.value = "";
}
function checkInput() {
    const currentValue = toDoInput.value;
    ifSpan.innerHTML = "ded";
    if (currentValue !== "") {
        ifSpan.innerHTML = ""
    } else {
        ifSpan.innerHTML = CHECK;
    }
}
function init() {
    LoadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    setInterval(checkInput, 10);
}
init();