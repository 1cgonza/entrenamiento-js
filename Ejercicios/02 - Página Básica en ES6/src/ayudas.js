export function colorAleatorio() {
  const r = aleatorio();
  const g = aleatorio();
  const b = aleatorio();
  // return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  return `rgb(${r}, ${g}, ${b})`;
}

export function aleatorio() {
  return Math.floor(Math.random() * 255);
}
