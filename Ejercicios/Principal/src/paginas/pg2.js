import { iniciarCamara, aleatorio } from '../utilidades/ayudas';
import { searchTag } from '../utilidades/flickr';
import * as coco from '@tensorflow-models/coco-ssd';
import * as cpu from '@tensorflow/tfjs-backend-cpu';
import * as webgl from '@tensorflow/tfjs-backend-webgl';
import Filtros from '../componentes/Filtros';
import diccionario from '../utilidades/diccionario';

const imgNoCoco = document.querySelector('#imagen-no-coco img');
const imgCoco = document.querySelector('#imagen-coco img');
const imgFlickr = document.querySelector('#imagen-internet img');
const numNoCoco = 1;
const numCoco = 1;
let categoriaActual;

function crearLista() {
  const categorias = document.getElementById('columna-categorias');

  Object.keys(diccionario).forEach((key) => {
    const obj = diccionario[key];
    const ele = document.createElement('span');
    ele.className = 'categoria';
    ele.id = `categoria${obj.displayName}`;
    ele.innerText = obj.displayName;
    categorias.appendChild(ele);
  });
}

export default function iniciarPg2() {
  let dims = [0, 0];
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const filtros = new Filtros(ctx);

  let camara;
  let modelo;

  ctx.font = '30px Courier New';
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'green';
  ctx.fillStyle = 'yellow';

  async function iniciar() {
    crearLista();
    camara = await iniciarCamara(dims);
    modelo = await coco.load();

    dims = [camara.videoWidth, camara.videoHeight];

    canvas.width = dims[0];
    canvas.height = dims[1];
    document.querySelector('.cargador').classList.add('esconder');
    predicciones();
  }

  async function predicciones() {
    const resultados = await modelo.detect(camara);

    ctx.drawImage(camara, 0, 0, dims[0], dims[1]);

    if (resultados.length > 0) {
      resultados.forEach((prediccion) => {
        const [x, y, w, h] = prediccion.bbox;
        const categoria = prediccion.class;
        const eleEnCategorias = document.getElementById(`categoria${categoria}`);

        if (eleEnCategorias && categoriaActual !== categoria) {
          eleEnCategorias.classList.add('activa');
          imgNoCoco.src = `/imgs/${categoria}/no-coco/${aleatorio(numNoCoco)}.jpg`;
          imgCoco.src = `/imgs/${categoria}/coco/${aleatorio(numCoco)}.jpg`;
          searchTag(categoria).then((src) => {
            imgFlickr.src = src;
          });
          categoriaActual = categoria;        
        }
        else {
          eleEnCategorias.classList.remove('activa');      
        }

        ctx.strokeRect(x, y, w, h);
        ctx.fillText(`${prediccion.class} - ${prediccion.score}`, x, y - 20);
      });
    }

    window.requestAnimationFrame(predicciones);
  }

  iniciar();
}
