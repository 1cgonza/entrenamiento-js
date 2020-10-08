import './scss/styles.scss';
import Ojos from './componentes/Ojos';//Importa la clase ojos de Ojos.js

const contenedor = document.getElementById('main');//Declara una variable constante que apunta al div main
const canvas = document.getElementById('canvas');//Declara una variable constante que apunta al div canvas
const ctx = canvas.getContext('2d');//declara la variable constante ctx. El método getContext, que sólo funciona junto al objeto canvas, permite crear un contexto dentro del cual hacer un dibujo. El argumento 2d se refiere a la creación de un objeto en 2 dimensiones gracias a la interfaz CanvasRenderingContext2D, que es la que brinda el contexto de renderizado
const ojos = new Ojos(ctx);//Se crea una variable constante con la que se construye un objeto Ojos
let ancho = 0;//Se crea una variable con el ancho de cada ojo
let alto = 0;//Se crea una variable con el alto de cada ojo
let x = 0;//se crea una variable con la posición x de cada ojo
let y = 0;//Se crea una variable con la posición y de cada ojo

actualizarDimensiones();//Se declara una función vacía

contenedor.addEventListener('mousemove', (e) => {//Dentro del div main se activa un evento cuando el mouse se mueve. la 'e' denota el evento y así podemos llamar el movimiento del mouse por medio de la 'e'
  const _x = e.clientX - x;//Se declara una variable constante en la que el evento de mover el mouse determina el valor horizontal de _x
  const _y = e.clientY - y;//Se declara una variable constante en la que el evento de mover el mouse determina el valor vertical de _y

  ctx.clearRect(0, 0, canvas.width, canvas.height);//ctx es la variable constante que permite dibujar objetos 2d dentro del canvas. El método clearRect impide que los lugares por donde pasen los ojos queden dibujados.
  ojos.pintar(_x, _y);//Se crea un nuevo objeto a partir de la clase Ojos, que se importa del archivo Ojos.js, a partir de la función pintar. Los valos _x, _y, determinan la posición de los rectángulos que funcionan como representación de los ojos
});

function actualizarDimensiones() {//De declara una función que actualiza las dimensiones del canvas
  const dimensiones = contenedor.getBoundingClientRect();//Se declara una variable constante en la que se determinan las dimensiones a partir del método getBoundingClientRect, que permite saber el tamaño del elemento y su posición relativa dentro del div main

  x = dimensiones.x | 0;
  y = dimensiones.y | 0;
  canvas.width = ancho = dimensiones.width | 0;
  canvas.height = alto = dimensiones.height | 0;
}

window.addEventListener('resize', actualizarDimensiones);//Cuando se cambia el tamaño de la ventana del navegador se recalculan las dimensiones
