"use strict";

const data = [
  "¿Te gusta entrar en bucle con tus mierdas eh? Pues vete a practicar unos for que igual es ese el problema.",
  "¡Claro que sí guapi! De ilusión también se vive.",
  "La que no recorre no se… pues eso ¡a por los arrays!",
  "Una buena invocación a tus funciones y a la diosa de las frontends desesperadas y ¡todo arreglado!",
  "Harás click cuando tengas que hacerlo, ni ++ ni +-",
  "Tranqui, tú haz push, pop, slice, splice, length, fetch o handler. No tiene pérdida.",
  "No sé a lo que te refieres pero una cosa te voy a decir, se dice /hidn/ y no /haiden/. De nada.",
  "¡Error fatal! ¿Quieres ser una #adalaber o una #adalerder? Practica, practica, practica.",
  "Llorar es normal, cagarte en la madre del console y el debugger no tanto.",
  "¿Cuánto sabías hace un mes? Pues eso."
];

console.log(data.length);

const section = document.querySelector(".container__section");

function paintPhrase(phrase) {
  const h2 = document.createElement("h2");
  h2.classList.add("container__section__text");
  h2.innerHTML = phrase;
  section.appendChild(h2);
}

function deletePhrase() {
  section.innerHTML = "";
}

//paintPhrase(data[3]);

//función que retorna un número que puede ser los índices de mi array

function getRandomPhrase() {
  const index = getRandomInt(data.length);
  const phrase = data[index];
  return phrase;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(10));

const button = document.querySelector(".container__form__button");

const input = document.querySelector(".container__form__input");

function clickButtonHandler(event) {
  event.preventDefault();
  deletePhrase();
  if (input.value !== "") {
    const phrase = getRandomPhrase();
    paintPhrase(phrase);
    input.value = "";
  } else {
    alert("No seas tímida ¡cuéntanos qué te aflige!");
  }
}

button.addEventListener("click", clickButtonHandler);
