import { preguntas } from "./data";

const pregunta = document.getElementById("pregunta");
const options = document.querySelectorAll(".options");
const siguiente = document.querySelector(".button");
const numero_pregunta = document.getElementById("orden")

pregunta.innerText = preguntas[0].pregunta;

for (let i = 0; i < preguntas[0].opciones.length; i++) {
  options[i].innerHTML = `<input type="radio" name="options" value="op${i}" />
        <label for="op${i}" id="op${i}">${preguntas[0].opciones[i]}</label>`;
}

siguiente.addEventListener("click", () => {
  pregunta.innerText = preguntas[1].pregunta;
  for (let i = 0; i < preguntas[0].opciones.length; i++) {
    options[i].innerHTML = `<input type="radio" name="options" value="op${i}" />
              <label for="op${i}" id="op${i}">${preguntas[1].opciones[i]}</label>`;
  }
  numero_pregunta.innerText = 'Pregunta 2';
});
