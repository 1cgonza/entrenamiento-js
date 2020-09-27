import './scss/styles.scss';
import Ojos from './componentes/Ojos';

const contenedor = document.getElementById('main');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const ojos = new Ojos(ctx);
let ancho = 0;
let alto = 0;
let x = 0;
let y = 0;

actualizarDimensiones();

contenedor.addEventListener('mousemove', (e) => {
  const _x = e.clientX - x;
  const _y = e.clientY - y;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ojos.pintar(_x, _y);
});

function actualizarDimensiones() {
  const dimensiones = contenedor.getBoundingClientRect();

  x = dimensiones.x | 0;
  y = dimensiones.y | 0;
  canvas.width = ancho = dimensiones.width | 0;
  canvas.height = alto = dimensiones.height | 0;
}

window.addEventListener('resize', actualizarDimensiones);
