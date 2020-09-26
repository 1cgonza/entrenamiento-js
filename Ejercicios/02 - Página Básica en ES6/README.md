# Básica ES6

Pasamos a utilizar una nueva versión de JavaScript llamada versión 2015 o ES6. No todos los exploradores tienen esta versión implementada y es por eso que toca compilar el código antes de publicar en un servidor. Para eso usamos Webpack y Babel. Adicionalmente vamos a usar un lenguaje expandido de CSS llamado SCSS que también compilamos con Webpack.

Este ejemplo es una base simple de un proyecto que usa Webpack, Babel y SCSS para crear una página que puede aprovechar las más recientes tecnologías web. Los beneficios de esto los vamos a ir identificando poco a poco. Al principio parece demasiado, pero al crear aplicaciones más complejas se hacen evidentes los beneficios.

## Ejercicio 02

### Instalación

En el terminal primero ir a la carpeta "02 - Página Básica en ES6" e instalar las dependencias con el comando:

```bash
yarn
```

Cuando termine de instalar ya se puede iniciar el servidor local:

```bash
yarn start
```

Esto debe iniciar un servidor local y la página se puede ver en: `localhost:8080`

### Ejercicio

- En ES6 podemos importar y exportar bloques de código. Primero crear un archivo llamado `ayudas.js` y allí movemos los métodos "colorAleatorio" y "aleatorio". `ayudas.js` debe exportar estos métodos.
- Importar las ayudas en `index.js` para que el código funcione de nuevo.
- Crear un botón que permita pausar y reproducir el contador.
- Crear un botón que permita cambiar el color del fondo cuando le damos clic.
