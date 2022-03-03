const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")
    

const TODOS_LS = "toDos"

let toDos = [];
function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function delBtnEvent(event) {
    const btn = event.target;
    const id = btn.innerText;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDoS) {
        return toDoS.id !== parseInt(li.id);
        //true값만 모아서 리턴
    });
    toDos = cleanToDos;
    saveToDos()
}

function paintToDo(text) {
    const newId = toDos.length + 1;
    const li = document.createElement("li");
    li.id = newId;
    const delBtn = document.createElement("h1");
    delBtn.innerText = "x"
    delBtn.style = "color:hotpink;"
    const div = document.createElement("div");
    div.innerText = text;

    delBtn.addEventListener("click", delBtnEvent);

    li.appendChild(delBtn);
    li.appendChild(div);
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
function init() {
    LoadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();