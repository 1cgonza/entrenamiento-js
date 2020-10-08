export default class Ojos {//Se exporta la clase Ojos para que sea utilizada por index.js
  constructor(ctx) {//se crea una función llamada constructor con una valor de ctx
    this.ctx = ctx;//el valor de ctx es igual al valor ctx que pertenece al objeto al que se está refiriendo la función
    this.x = 0;//el valor de x dentro del objeto al que hace referencia la función es 0
    this.y = 0;//el valor de y dentro del objeto al que hace referencia la función es 0
  }

  pintar(x, y) {//Se crea la función pintar con los valores x, y, definidos en la función anterior
    const margenX = 20;//Se crea una variable constante que determina el margen de x
    const margenY = 10;//Se crea una variable constante que determina el margen de y
    const ancho = 15;//Se crea una variable constante que determina el ancho del rectángulo
    const alto = 15;//Se crea una variable constante que determina el alto del rectángulo
    const radio = 15;

    const ctx = this.ctx;//Se crea una variable constante en donde se declara que el valor de ctx es aquél que proviene del valor de la funcion constructor
    const ojoIzX = x - margenX - margenX / 2;//Se crea una variable constante que define que el valor de x para ojo izquierdo, que es el resultado de 0 - margen x y de nuevo - margen x; todo ello dividido en 2
    const ojoIzY = y - margenY;//Se crea una variable constante que define que el valor de y para ojo izquierdo, que es el resultado de 0 - margen y
    const ojoDeX = x + margenX;//Se crea una variable constante que define que el valor de x para ojo derecho, que es el resultado de 0 + margen x
    const ojoDeY = ojoIzY;//Se crea una variable constante que define que el valor de y en ojo derecho es igual al valor de y en ojo izquierdo


    ctx.beginPath();//Crea una nueva ruta del objeto eliminando las sub-rutas anteriores
    ctx.arc(ojoIzX, ojoIzY, radio, 0, 2 * Math.PI);//Determina el tamaño del arco del ojo izquierdo
    ctx.arc(ojoDeX, ojoDeY, radio, 0, 2 * Math.PI);//Determina el tamaño del arco del ojo derecho
    ctx.fill();
    //ctx.fillRect(ojoIzX, ojoIzY, ancho, alto);//se determina el tamaño y posición del ojo izquierdo          
    //ctx.fillRect(ojoDeX, ojoDeY, ancho, alto);//se determina el tamaño y posición del ojo derecho

    ctx.fillStyle = 'green';//se determina el color de ambos ojos
    ctx.lineWidth = 2;//se establece el ancho de la línea del contorno
    ctx.strokeStyle = '#ffffff';//color de la línea del contorno
    ctx.stroke();//Se determina que hay un contorno
  }
}
