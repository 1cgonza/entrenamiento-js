import './scss/styles.scss';
import pg2 from './paginas/pg2';

const inicio = document.getElementById('inicio');
const intro = document.getElementById('intro');
const pg2Div = document.getElementById('pg2');

inicio.addEventListener('click', () => {
  intro.classList.add('hidden');
  pg2Div.classList.remove('hidden');
  pg2();
});
