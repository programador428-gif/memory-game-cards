const reset = document.getElementById("reset");
let cartas = document.querySelectorAll(".cartas");
let lista = Array.from(cartas);
let i = lista.length,
  j,
  temporal;
const game = document.querySelector(".game");
// Funciones
reset.addEventListener("click", () => {
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = lista[j];
    lista[j] = lista[i];
    lista[i] = temp;
  }
  lista.forEach((elemento) => {
    game.appendChild(elemento);
  });
  cartas = 0;
  cartas = document.querySelectorAll(".cartas");
  lista = 0;
  lista = Array.from(cartas);
  ((i = lista.length), j, temporal);
});
