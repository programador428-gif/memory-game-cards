const reset = document.getElementById("reset");
const pantalla = document.querySelector(".game");
let cartas = document.querySelectorAll(".cartas");
let lista = Array.from(cartas);
let i = lista.length,
  j,
  temporal;
const game = document.querySelector(".game");
let puntaje = 0;
let eleccion = [];
let contador = document.getElementById("contador");
contador = parseInt(contador.textContent);

// Funciones

// Funcion de reseteo
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
  document.getElementById("contador").textContent = 0;
  contador = 0;
  cartas = document.querySelectorAll(".cartas");
  lista = Array.from(cartas);
  ((i = lista.length), j, temporal);
  eleccion = [];
});

// Funcion del contador
pantalla.addEventListener("click", (e) => {
  const carta = e.target.closest(".cartas");
  eleccion.push(carta);
  if (eleccion.length === 2) {
    const [c1, c2] = eleccion;
    if (
      c1.querySelector("img").src === c2.querySelector("img").src &&
      c1.querySelector("img").id !== c2.querySelector("img").id
    ) {
      contador = contador + 1;
      document.getElementById("contador").textContent = contador;
      eleccion = [];
    } else {
      eleccion = [];
    }
    // Esto es por si falla algo y se traba pasandose de muchos valores, reinicie
    if (eleccion.length > 2) {
      eleccion = [];
    }
  }
});
