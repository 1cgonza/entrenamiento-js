export async function iniciarCamara(dims) {
  let fuente = null;

  try {
    fuente = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { width: dims[0], height: dims[1] },
    });
    const camara = document.getElementById('webcam');
    camara.srcObject = fuente;
    camara.onloadedmetadata = () => {
      camara.play();
    };
    return camara;
  } catch (err) {
    console.log(`Tipo de error: ${err.name}\nExplicación del error: ${err.message}`);
    return;
  }
}
