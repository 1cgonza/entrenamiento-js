import './scss/styles.scss';
import pg2 from './paginas/pg2';

const inicio = document.getElementById('inicio');
const intro = document.getElementById('intro');
const pg2Div = document.getElementById('pg2');
let contarCategorias = [];

inicio.addEventListener('click', () => {
  intro.classList.add('hidden');
  pg2Div.classList.remove('hidden');
  pg2();
});


//Cargar FancyBox al inicio

window.onload= function () {
  $.fancybox.open({ 
    src: '#introFancyBox', 
    modal: true
});
}

function limiteCategorias() {
  if (categoria.contarCategorias != categoria.contarCategorias) {
    categoria.push(contarCategorias)
    if (contarCategorias.length === 2) {
      intro.classList.add('hidden');
      pg2Div.classList.add('hidden');
      pg3Div.classList.remove('hidden');
    }
  }
}
console.log(contarCategorias)
limiteCategorias();

