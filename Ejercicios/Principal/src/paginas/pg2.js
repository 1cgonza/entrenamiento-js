import { iniciarCamara, aleatorio } from '../utilidades/ayudas';
import { searchTag } from '../utilidades/flickr';
import * as coco from '@tensorflow-models/coco-ssd';
import * as cpu from '@tensorflow/tfjs-backend-cpu';
import * as webgl from '@tensorflow/tfjs-backend-webgl';
import Filtros from '../componentes/Filtros';
import diccionario from '../utilidades/diccionario';

const imgsNoCoco = document.querySelectorAll('#imagen-no-coco img');
const imgsFlickr = document.querySelectorAll('#imagen-internet img');
const imgsCoco = document.querySelectorAll('#imagen-coco img');
const numNoCoco = 1;
const numCoco = 1;
let categoriaActual;
let guardeElesMenu = [];

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
  let camara;
  let modelo;

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  async function iniciar() {
    crearLista();
    camara = await iniciarCamara(dims);
    modelo = await coco.load();

    dims = [camara.videoWidth, camara.videoHeight];
    canvas.width = dims[0];
    canvas.height = dims[1];

    ctx.font = '30px Courier New';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'yellow';

    document.querySelector('.cargador').classList.add('esconder');
    predicciones();
  }

  async function predicciones() {
    const resultados = await modelo.detect(camara, 5, 0.5);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const ancho = `${100 / resultados.length}%`;
    if (guardeElesMenu.length) {
      guardeElesMenu.forEach((ele) => ele.classList.remove('activa'));
      guardeElesMenu = [];
    }

    if (resultados.length > 0) {
      resultados.forEach((prediccion, i) => {
        const [x, y, w, h] = prediccion.bbox;
        const categoria = prediccion.class;
        const eleEnCategorias = document.getElementById(`categoria${categoria}`);
        guardeElesMenu.push(eleEnCategorias);
        eleEnCategorias.classList.add('activa');
        if (eleEnCategorias && categoriaActual !== categoria) {
          imgsCoco[i].src = `imgs/${categoria}/coco/${aleatorio(numCoco)}.jpg`;
          imgsCoco[i].style.maxWidth = ancho;
          imgsNoCoco[i].src = `imgs/${categoria}/no-coco/${aleatorio(numNoCoco)}.jpg`;
          imgsNoCoco[i].style.maxWidth = ancho;

          searchTag(categoria).then((src) => {
            imgsFlickr[i].src = src;
            imgsFlickr[i].style.maxWidth = ancho;
          });
          categoriaActual = categoria;
        }

        ctx.strokeRect(x, y, w, h);
        ctx.fillText(`${prediccion.class} - ${prediccion.score}`, x, y - 20);
      });
    }

    for (let i = resultados.length; i < 5; i++) {
      imgsCoco[i].src = '';
      imgsNoCoco[i].src = '';
      imgsFlickr[i].src = '';
    }

    window.requestAnimationFrame(predicciones);
  }

  iniciar();
}
