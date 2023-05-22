// Напиши скрипт, який під час набору тексту
// в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name -
//     output.Якщо інпут порожній, у спані
//          повинен відображатися рядок "Anonymous".
let inputEl = document.querySelector("#name-input");
inputEl.addEventListener("input", onInputChange);

let outputEl = document.querySelector("#name-output");

function onInputChange(event) {
  inputEl = event.currentTarget.value;
  inputEl !== " " ? (outputEl.innerText = inputEl) : "Anonymous";
}
