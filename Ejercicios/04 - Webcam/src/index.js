import './scss/styles.scss';
import { iniciarCamara } from './utilidades/ayudas';

const dims = [320, 240];
let ancho = 0;
let alto = 0;
let camara;
const canvas = document.getElementById('canvas');
const canvasProvisional = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const ctx2 = canvasProvisional.getContext('2d');

canvasProvisional.width = dims[0];
canvasProvisional.height = dims[1];

async function iniciar() {
  camara = await iniciarCamara(dims);

  camara.addEventListener('mousemove', extraerPixeles);
}

actualizarDimensiones();
iniciar();

function extraerPixeles(e) {
  ctx2.drawImage(camara, 0, 0, dims[0], dims[1]);
  const unPixel = ctx2.getImageData(e.clientX, e.clientY, 1, 1).data;
  ctx.fillStyle = `rgba(${unPixel.join(',')})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function actualizarDimensiones() {
  canvas.width = ancho = window.innerWidth;
  canvas.height = alto = window.innerHeight;
}

window.onresize = actualizarDimensiones;
