import { preguntas } from "./data";

const choice = document.querySelectorAll("input");
const button = document.querySelector("button");
const totalCorrects = document.querySelector(".corrects")
const totalIncorrects = document.querySelector(".incorrects")
const totalNoMarked = document.querySelector(".nomarked")

const choices = [];
const answers = [];
var corrects = 0;
var incorrects = 0;

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
    }else{
      incorrects++;
    }
  }
  
  totalCorrects.innerText = `Correctas: ${corrects}`  
  totalIncorrects.innerText = `Incorrectas: ${incorrects}`
  totalNoMarked.innerText = `Sin responder: ${answers.length - choices.length}`
});
