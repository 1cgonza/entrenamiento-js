import './scss/styles.scss';
//import {colorAleatorio} from 'ayuda.js';
//import {aleatorio} from 'ayuda.js';


let contador = 0;
const fondo = document.getElementById('main');
const numero = document.getElementById('number');
const pausa = document.getElementById("botonpausa").addEventListener("click", botonPausa);
//const play = document.getElementById("botonplay").addEventListener("click", botonPlay);
const color = document.getElementById("botoncolor").addEventListener("click", botonColor);

const intervalo = setInterval(() => {
  numero.innerText = contador;

  if (contador > 0 && contador % 5 === 0) {
    fondo.style.backgroundColor = colorAleatorio();
  }

  contador++;
}, 1000);

function botonColor(){
  fondo.style.backgroundColor = colorAleatorio();
}

function botonPausa(){
  if (clearTimeout(contador) == true ){
    setInterval(contador, 1000);
  }
  else{
    clearTimeout(contador);
  }
}




function colorAleatorio() {
  const r = aleatorio();
  const g = aleatorio();
  const b = aleatorio();
  return `rgb(${r}, ${g}, ${b})`;
}

function aleatorio() {
  return Math.floor(Math.random() * 255);
}
