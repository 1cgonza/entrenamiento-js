import './scss/styles.scss';

let contador = 0;
const fondo = document.getElementById('main');
const numero = document.getElementById('number');

const intervalo = setInterval(() => {
  numero.innerText = contador;

  if (contador > 0 && contador % 5 === 0) {
    fondo.style.backgroundColor = colorAleatorio();
  }

  contador++;
}, 1000);

function colorAleatorio() {
  const r = aleatorio();
  const g = aleatorio();
  const b = aleatorio();
  return `rgb(${r}, ${g}, ${b})`;
}

function aleatorio() {
  return Math.floor(Math.random() * 255);
}
