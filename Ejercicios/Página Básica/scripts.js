var n = 0;//declara una variable que inicia en 0
var l = document.getElementById("number"); //declara otra variable que apunta al HTML por id
window.setInterval(function(){ //declara un intervalo que se renueva cada 1000 milisegundos
  l.innerHTML = n; //le dice que dentro de "number" publique el contenido de n
  n++; // n = n + 1
},1000); // la cantidad de segundos en el que se delimita el intervalo



var x = setInterval(function() { //se declara un intervalo. Dentro de este intervalo de define una función y luego el tiempo del intervalo
   var x = document.getElementById("number");// la variable x contiene el espacio donde se encuentra la información que se quiere cambiar
        x.style.background = "black";//aquñi se dice que lo que se quiere cambiar es el color de fondo del div "number"
        if ((n - 1) % 5 == 0){//si n es múltiplo de 5, entonces...
        x.style.background = "yellow";//cambiar el color del fonde de "number"
        }
    }, 1000);//El tiempo del intervalo en milisegundos