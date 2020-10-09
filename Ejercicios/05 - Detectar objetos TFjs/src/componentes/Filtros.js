export default class Filtros {
  constructor(ctx) {
    this.ctx = ctx;
  }

  brillo(pixeles, ajuste) {
    const d = pixeles.data;
    const len = d.length;

    for (let i = 0; i < len; i += 4) {
      d[i] += ajuste;
      d[i + 1] += ajuste;
      d[i + 2] += ajuste;
    }
    return pixeles;
  }

  blancoNegro(pixeles) {
    const d = pixeles.data;
    const len = d.length;

    for (let i = 0; i < len; i += 4) {
      const [r, g, b] = [d[i], d[i + 1], d[i + 2]];
      const gris = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      d[i] = d[i + 1] = d[i + 2] = gris;
    }

    return pixeles;
  }

  limitar(pixeles, limite, oscuro = 255, claro = 0) {
    const d = pixeles.data;
    const len = d.length;

    for (let i = 0; i < len; i += 4) {
      const [r, g, b] = [d[i], d[i + 1], d[i + 2]];
      const gris = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const color = gris >= limite ? oscuro : claro;
      d[i] = d[i + 1] = d[i + 2] = color;
    }

    return pixeles;
  }
}
