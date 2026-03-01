const btnReset = document.getElementById("reset");
const tablero = document.querySelector(".game");
const contadorTxt = document.getElementById("contador");
const todasLasCartas = Array.from(document.querySelectorAll(".cartas"));

let eleccion = [];
let contador = 0;
let parejas = 0;
let bloqueado = false;

const mezclarCartas = (lista) => {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
};

const ocultarCarta = (carta) => {
  const img = carta.querySelector("img");
  img.classList.replace("visible", "oculto");
};

const mostrarCarta = (carta) => {
  const img = carta.querySelector("img");
  img.classList.replace("oculto", "visible");
};

btnReset.addEventListener("click", () => {
  contador = 0;
  contadorTxt.textContent = 0;
  eleccion = [];
  bloqueado = false;

  const cartasMezcladas = mezclarCartas(todasLasCartas);

  cartasMezcladas.forEach((carta) => {
    carta.classList.remove("acertada");
    ocultarCarta(carta);
    tablero.appendChild(carta);
  });
});

tablero.addEventListener("click", (e) => {
  const carta = e.target.closest(".cartas");
  if (
    !carta ||
    bloqueado ||
    eleccion.includes(carta) ||
    carta.classList.contains("acertada")
  ) {
    return;
  }

  mostrarCarta(carta);
  eleccion.push(carta);

  if (eleccion.length === 2) {
    bloqueado = true;
    const [c1, c2] = eleccion;
    const esPareja =
      c1.querySelector("img").src === c2.querySelector("img").src;

    if (esPareja) {
      parejas++;
      c1.classList.add("acertada");
      c2.classList.add("acertada");
      eleccion = [];
      bloqueado = false;

      if (parejas === todasLasCartas.length / 2) {
        setTimeout(
          () => alert(`¡Felicidades lo lograstes en ${contador} intentos!`),
          200,
        );
      }
    } else {
      contador++;
      contadorTxt.textContent = contador;
      setTimeout(() => {
        ocultarCarta(c1);
        ocultarCarta(c2);
        eleccion = [];
        bloqueado = false;
      }, 1000);
    }
  }
});
