export default class Ojos {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
  }

  pintar(x, y) {
    const margenX = 20;
    const margenY = 10;
    const ancho = 15;
    const alto = 15;

    const ctx = this.ctx;
    const ojoIzX = x - margenX - margenX / 2;
    const ojoIzY = y - margenY;
    const ojoDeX = x + margenX;
    const ojoDeY = ojoIzY;

    ctx.fillRect(ojoIzX, ojoIzY, ancho, alto);
    ctx.fillRect(ojoDeX, ojoDeY, ancho, alto);
  }
}
