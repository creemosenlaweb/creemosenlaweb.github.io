/*globals Vue*/

function main() {
  let app = new Vue({
    el: '#app',
    methods: {
      recargar: function () {
        let app = this;

        function cargarFalso() {
          let fecha = new Date(),
            fechaTexto = fecha.toLocaleString();

          app.datos = {nombre: "bob", numero: 42, fecha: fechaTexto};
          app.cargando = false;
        }

        app.cargando = true;

        window.setTimeout(cargarFalso, 3000);
      }
    },
    data: {
      cargando: true,
      datos: {
      }
    }
  });

  app.recargar();
}

window.addEventListener('load', main);
