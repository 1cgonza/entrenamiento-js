import './scss/styles.scss';
import { iniciarCamara } from './utilidades/ayudas';
import * as coco from '@tensorflow-models/coco-ssd';
import * as cpu from '@tensorflow/tfjs-backend-cpu';
import * as webgl from '@tensorflow/tfjs-backend-webgl';
import Filtros from './componentes/Filtros';

const dims = [800, 450];
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const filtros = new Filtros(ctx);
let camara;
let modelo;

canvas.width = dims[0];
canvas.height = dims[1];
ctx.font = '30px Courier New';
ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'yellow';

async function iniciar() {
  camara = await iniciarCamara(dims);
  modelo = await coco.load();
  document.querySelector('.cargador').classList.add('esconder');
  predicciones();
}

async function predicciones() {
  const resultados = await modelo.detect(camara);

  ctx.drawImage(camara, 0, 0, dims[0], dims[1]);

  if (resultados.length > 0) {
    resultados.forEach((prediccion) => {
      const [x, y, w, h] = prediccion.bbox;
      const pixeles = ctx.getImageData(x, y, w, h);

      if (prediccion.class === 'person') {
        // filtros.brillo(pixeles, 80);
        // filtros.blancoNegro(pixeles);
        filtros.limitar(pixeles, 90);
      } else {
        filtros.brillo(pixeles, 80);
      }

      ctx.putImageData(pixeles, x, y);
      // ctx.strokeRect(x, y, w, h);
      ctx.fillText(`${prediccion.class} - ${prediccion.score}`, x, y - 20);
    });
  }

  window.requestAnimationFrame(predicciones);
}

iniciar();
