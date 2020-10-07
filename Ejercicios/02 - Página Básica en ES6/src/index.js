import './scss/styles.scss'; //importa los estilos scss
//import colorAleatorio from 'ayuda.js'; //importa la función color Aleatorio de ayuda.js
//import aleatorio from 'ayuda.js';// importa la función aleatorio de ayuda.js

let contador = 0; //crea la variable contador
const fondo = document.getElementById('main');//se declara la variable constante fondo que apunta al div main
const numero = document.getElementById('number');//se declara la variable constante numero que apunta al div number
const pausa = document.getElementById('Pausa-').addEventListener('click', botonPausa);//se declara la variable constante pausa que activa la función botonPausa al hacer click sobre el botón
const inicio = document.getElementById('Inicio-').addEventListener('click', botonInicio);//se declara la variable constante inicio que activa la función botonInicio al hacer click sobre el botón
const color = document.getElementById('boton-color').addEventListener('click', botonColor);//se declara la variable constante color que activa la función botonColor al hacer click sobre el botón
const timer_is_on = 0;//se declara la variable constante timer_is_on


const intervalo = setInterval(() => {//se crea la variable constante intervalo, que contiene la función que permite el funcionamiento del contador
  numero.innerText = contador;//el contador se pone como texto interno del div number

  if (contador > 0 && contador % 5 === 0) {//se busca el múltiplo de 5 sin contar el 0
    fondo.style.backgroundColor = colorAleatorio();//cuando se cumple la condición anterior, el color del fondo de main cambia, activando la función colorAleatorio
  }

  contador++;//contador = contador + 1
}, 1000);// milisegusgos del intervalo

function botonColor(){//función que se activa al hacer click en el botón que cambia el color de main
  fondo.style.backgroundColor = colorAleatorio();//cambia el color de main a partir de la función colorAleatorio
}

function botonPausa(){//función que se activa al hacer click al botón de pausa
  clearTimeout(contador);//suspende el intervalo de tiempo del contador
  timer_is_on = 0;
}

function botonInicio(){//función que se activa al hacer click al botón de inicio
  if (!timer_is_on) {
    timer_is_on = 1;
    setTimeout(contador);
  }
}



function colorAleatorio() {//función a partir de la cual se cambia aleatoriamente el color de fondo de main
  const r = aleatorio();//se crea una variable constante r
  const g = aleatorio();//se crea una variable constante g
  const b = aleatorio();//se crea una variable constante b
  return `rgb(${r}, ${g}, ${b})`;//la función retorna un color rgb de forma aleatoria a partir de la función aleatorio
}

function aleatorio() {//se crea la función aleatorio
  return Math.floor(Math.random() * 255);//retorna los resultados de la operación realiazada por el objeto Math. Primero, con Math.floor se devuelve el número máximo entero; segundo, con Math.random se retorna una punto flotante dentro del rango (0, 1)
}
