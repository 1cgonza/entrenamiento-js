export default function colorAleatorio() {
        {
        const r = aleatorio();
        const g = aleatorio();
        const b = aleatorio();
        return `rgb(${r}, ${g}, ${b})`;
      }
}

export default function aleatorio() {
      {
        return Math.floor(Math.random() * 255);
      }
}