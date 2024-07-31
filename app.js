var IncreaseBt = document.getElementById("increase1");
var DecreaseBt = document.getElementById("decrease1")
var ResetBt = document.getElementById("reset1")
var Value = document.getElementById("valueI");



var v = 0;
function newV() {
    Value.innerText = v;
}

function changeValueadd() {
    v++;
    newV();
}


IncreaseBt.addEventListener("click", changeValueadd);


function changeValuesub() {
    v--;
    newV();
}


DecreaseBt.addEventListener("click", changeValuesub);


function ResValue() {
    v = 0;
    newV();
}

ResetBt.addEventListener("click", ResValue);


