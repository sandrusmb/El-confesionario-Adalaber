"use strict";

const data = [
  "¿Te gusta entrar en bucle con tus mierdas eh? Pues vete a practicar unos for que igual es ese el problema.",
  "¡Claro que sí guapi! De ilusión también se vive.",
  "La que no recorre no se… pues eso ¡a por los arrays!",
  "Una buena invocación a tus funciones y a la diosa de las frontends desesperadas y ¡todo arreglado!",
  "Harás click cuando tengas que hacerlo, ni ++ ni +-",
  "Tranqui, tú haz push, pop, slice, splice, length, fetch o handler. No tiene pérdida.",
  "No sé a lo que te refieres pero una cosa te voy a decir, no se dice /haiden/ se dice /hidn/. De nada.",
  "¡Error fatal! ¿Quieres ser una #adalaber o una #adalerder? Practica, practica, practica.",
  "Llorar el normal, cagarte en la madre del console y el debugger no tanto.",
  "¿Cuánto sabías hace un mes? Pues eso."
];

const button = document.querySelector(".container__form__button");
const section = document.querySelector(".container__section");

function paintAdvice(data) {}

function clickButtonHandler(data) {
  for (let i = 0; i < data.length; i++) {
    data[i];
  }
  if ((text.hidden = false)) {
    section.classList.add("js-text");
  } else {
    section.classList.remove("js-text");
  }
}

button.addEventListener("click", clickButtonHandler);
