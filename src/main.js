import { preguntas } from "./data";

const choice = document.querySelectorAll("input");
const button = document.querySelector("button");
const span = document.querySelector("span")

const choices = [];
const answers = [];

var corrects = 0;

for (let i = 0; i < preguntas.length; i++) {
  answers.push(preguntas[i].respuesta);
}

button.addEventListener("click", () => {
  for (let i = 0; i < choice.length; i++) {
    if (choice[i].checked) {
      choices.push(choice[i].value);
    }
  }

  for (let i = 0; i < choices.length; i++) {
    if (choices[i] === answers[i]) {
      corrects++;
    }
  }
  
  span.innerText = `Total respuetas correctas: ${corrects}`
});
