var n = 0;//declara una variable que inicia en 0
var l = document.getElementById("number"); //declara otra variable que apunta al HTML por id
var m = document.getElementById("main"); // declara otra variable que apunta al elemento 'main'

const intervalo = setInterval(function () { //declara un intervalo que se renueva cada 1000 milisegundos
  l.innerHTML = n; //le dice que dentro de "number" publique el contenido de n
  m.style.backgroundColor = "black"; //determina el color de fondo inicial de number
  if (n > 0 && n % 5 == 0) {//si n es mayor a cero y es múltiplo de 5, entonces...
    m.style.backgroundColor = "yellow";//cambiar el color del fondo de "number"
  }
  n++; // n = n + 1
}, 1000); // la cantidad de segundos en el que se delimita el intervalo



