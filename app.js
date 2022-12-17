var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickHandler() {
    outputDiv.innerText = "asjsjasjjj " + txtInput.value;

};

btnTranslate.addEventListener("click", clickHandler)