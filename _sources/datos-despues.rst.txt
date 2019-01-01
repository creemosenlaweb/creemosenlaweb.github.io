Datos por favor, pero despues
=============================

En el capítulo anterior vimos como pedirle datos al usuario, pero en el momento
de validar los datos, lo hicimos simple con lógica fija en el código.

En una aplicación real, le preguntaríamos a un servicio que tiene registradas
las cuentas si el usuario y la contraseña son validas.

Este tipo de servicios suelen llamarse APIs (interfaz de programación de
aplicaciones en ingles).

Las APIs son como funciones pero que corren en otras computadoras, razón por la
cual al llamarlas no devuelven instantáneamente si no que demoran un buen rato,
así que tenemos que aprender a esperar y manejar distintos casos.

Por ejemplo cuando la solicitud funciona correctamente y cuando falla, ya sea
por problemas de red, porque mandamos parámetros inválidos, porque el servicio
no esta funcionando correctamente o una gran variedad de causas normalmente
resumidas con "se cayo el sistema".

Empecemos cargando datos y mostrandolos, arrancamos con todo el HTML ya que no
hay nada nuevo:

.. code-block:: html

    <!doctype html>
    <html>
      <head>
        <!-- para que muestre bien tildes y caracteres especiales -->
        <meta charset="utf-8">

        <!-- para que se vea bien en Internet Explorer -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <!-- para que se vea bien en telefonos mobiles -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Cargando Datos</title>

        <!-- importamos vue para poder crear aplicaciones con javascript https://vuejs.org/ -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.21/vue.min.js"></script>
        <!-- importamos las hojas de estilo base bootstrap https://getbootstrap.com/ -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

        <!-- importamos nuestro estilo especifico -->
        <link rel="stylesheet" href="/style.css">

        <!-- importamos nuestro javascript -->
        <script src="/client.js" defer></script>
      </head>
      <body class="m-3">

        <!-- la raíz de nuestra aplicación -->
        <div id="app">
          <div v-if="cargando">
            <div class="alert alert-info">
              Cargando
            </div>
          </div>
          <div v-else="">
            <table class="table table-bordered table-stripped table-hover">
              <tbody>
                <tr><td>Fecha</td><td>{{datos.fecha}}</td></tr>
                <tr><td>Numero</td><td>{{datos.numero}}</td></tr>
                <tr><td>Nombre</td><td>{{datos.nombre}}</td></tr>
              </tbody>
            </table>

            <div class="text-center">
              <div @click="recargar()" class="btn btn-primary">
                Recargar
              </div>
            </div>
          </div>
        </div>

      </body>
    </html>

Notaras que hice copy/paste del capitulo anterior, lo único que cambio es lo
que esta dentro del `div` app, pero tampoco es algo nuevo, veamoslo en detalle:

El primer div solo se muestra si el atributo `cargando` es `true`, mostrando
el mensaje "Cargando".

.. code-block:: html

          <div v-if="cargando">
            <div class="alert alert-info">
              Cargando
            </div>
          </div>

Sino (con `v-else` que es como el else del if en javascript) significa que ya
cargamos los datos, osea que los podemos mostrar, asumimos que los datos tienen
al menos 3 campos: fecha, numero y nombre.

.. code-block:: html

          <div v-else="">
            <table class="table table-bordered table-stripped table-hover">
              <tbody>
                <tr><td>Fecha</td><td>{{datos.fecha}}</td></tr>
                <tr><td>Numero</td><td>{{datos.numero}}</td></tr>
                <tr><td>Nombre</td><td>{{datos.nombre}}</td></tr>
              </tbody>
            </table>

Finalmente ponemos un botón que permite recargar los datos.

.. code-block:: html

            <div class="text-center">
              <div @click="recargar()" class="btn btn-primary">
                Recargar
              </div>
            </div>

La lógica de nuestra aplicación esta en el archivo `client.js`, empecemos
con una base que ya conocemos:

.. code-block:: js

    /*globals Vue*/

    function main() {
      let app = new Vue({
        el: '#app',
        methods: {
          recargar: function () {
            // cargar aca
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

El código no hace nada nuevo, y de hecho no esta terminado, pero repasemos.


.. code-block:: js

    window.addEventListener('load', main);

Cuando la pagina termine de cargar llamamos a la función `main`.

La función `main` crea un nuevo objeto `Vue`, que va a funcionar en el tag
con id `"app"`, la aplicacion tiene dos atributos:

cargando
    indica si la aplicación esta cargando datos

datos
    los datos cargados, inicialmente vacíos

Nuestra aplicación también tiene un método, `recargar`, que por ahora no hace
nada, osea que si probas esto la pagina se va a quedar en "Cargando" por
siempre.

En el método `recargar` podríamos hacer algo como:

.. code-block:: js

      recargar: function () {
        this.datos = {nombre: "bob", numero: 42, fecha: "una fecha"};
        this.cargando = false;
      }

Pero eso setearia datos instantáneamente, nunca veríamos el mensaje "Cargando",
si solo hubiera una forma de pedirle al navegador que llame a una función "después"...

Obviamente dicha funcionalidad existe y suele ser muy útil, por ejemplo para
mostrar o esconder mensajes después de un tiempo prudente.

Esta funcionalidad esta disponible en el objeto `window` y se llama
`setTimeout`, el método recibe dos argumentos, el primero es la función a
llamar, el segundo es cuanto tiene que pasar entre el momento en el que
llamamos al método y cuando se va a llamar a nuestra función, en milisegundos
(1 segundo son 1000 milisegundos).


.. code-block:: js

      recargar: function () {
        let app = this;

        function cargarFalso() {
            app.datos = {nombre: "bob", numero: 42, fecha: "una fecha"};
            app.cargando = false;
        }

        app.cargando = true;

        window.setTimeout(cargarFalso, 3000);
      }

Hay un par de detalles importantes en ese código, vamos por partes:

Primero creamos una variable llamada app que tiene el mismo valor que `this`,
porque haríamos eso? lo vamos a ver en un par de lineas.

.. code-block:: js

        let app = this;

Luego creamos una función llamada `cargarFalso`, que se llama así porque va a
simular que estamos cargando los datos de un servicio esperando un poco y
seteando los datos.

Lo primero para notar es que podemos crear una función dentro de otra función
o método, esto lo hacemos acá por dos razones.

La primera razón es porque a esta función solo la necesitamos en el método
recargar, así que hacerla "visible" al resto del código es innecesario y puede
llegar a hacernos pensar después que es una función que tiene algún tipo de
utilidad general cuando en realidad no la tiene fuera del método `recargar`.

La segunda es que queremos tener acceso a la variable `app` que esta disponible
en los métodos de nuestra aplicación vue, las funciones "ven" las variables
declaradas en su "cuerpo" (body en ingles, lo que esta entre llaves), entonces
al declararla dentro del método `recargar` tenemos acceso a la variable sin
necesidad de hacer cosas raras, ya que `window.setTimeout` llama a una función
pero no le pasa ningún argumento.

En el cuerpo de la función `cargarFalso` podemos ver que seteamos el atributo
`datos` de la variable `app` y aquí revelamos el misterio de la linea `let app
= this;`, como vimos en el capitulo anterior, cada variable tiene un `this`
implícito, su valor depende del "valor antes del punto" al llamarla, osea que
cada función puede tener un valor distinto de `this` o ninguno si llamamos a la
función directamente y no como un método.

Para asegurarnos de setear `datos` en el objeto adecuado, asignamos el valor de
`this` en el método de nuestra aplicación a otra variable para que no se confunda
con el `this` de la función `cargarFalso`.

No te preocupes, esta es una de las cosas mas confusas de javascript y te puede
llevar una buena cantidad de tropiezos terminar de entenderlo por completo.

.. code-block:: js

    function cargarFalso() {
        app.datos = {nombre: "bob", numero: 42, fecha: "una fecha"};
        app.cargando = false;
    }

Seteamos el atributo `cargando` de nuestra aplicación a true así la pagina
cambia y muestra el mensaje "Cargando" hasta que la función `cargarFalso` sea
llamada.

.. code-block:: js

        app.cargando = true;

Finalmente llamamos al método `setTimeout` del objeto `window` y le pasamos
nuestra función a llamar y cuando la tiene que llamar (en 3000 milisegundos, es
decir 3 segundos).

.. code-block:: js

    window.setTimeout(cargarFalso, 3000);

Si probas esto vas a ver que la pagina va a cargar, mostrar el mensaje "Cargando"
y 3 segundos después va a mostrar los datos.

Si apretamos el botón "Recargar" va a mostrar el mensaje y 3 segundos después
los datos.

Hagamos una pequeña modificación para que el cambio se note al hacer click en
"Recargar" hagamos que el valor del campo fecha cambie.

Para obtener la fecha y hora actual existe un tipo de objeto llamado "Date"
(fecha en ingles).

Cuando creamos un nuevo objeto del tipo `Date` el objeto que nos devuelve contiene
la fecha y hora actual según el reloj de tu computadora, probemos un poco:

Creamos un nuevo objeto de tipo `Date` usando `new`:

.. code-block:: js

    let date1 = new Date();

Llamamos al método `toString` que devuelve una representación de la fecha
como texto:

.. code-block:: js

    date1.toString();

.. code-block:: js

    < 'Tue Jan 01 2019 17:41:01 GMT-0300 (-03)'

Llamamos al método `toLocaleString` que devuelve una representación de la fecha
como texto adaptada al idioma y configuración de tu computadora, en tu caso
probablemente aparezca distinto al mio, que tengo un lio de configuraciones de
ingles, español y alemán:

.. code-block:: js

    date1.toLocaleString();

.. code-block:: js

    < '2019-1-1 17:41:01'

El método `toLocaleDateString` devuelve una representación de la fecha, sin
la parte del tiempo, como texto adaptada al idioma y configuración de tu
computadora:

.. code-block:: js

    date1.toLocaleDateString();

.. code-block:: js

    < '2019-1-1'

El método `toLocaleTimeString` devuelve una representación de la fecha, solo
la parte del tiempo, como texto adaptada al idioma y configuración de tu
computadora:

.. code-block:: js

    date1.toLocaleTimeString();

.. code-block:: js

    < '17:41:01'

El método `getDate` Devuelve el día del mes.

No confundirlo con `getDay` que devuelve el día de la semana.

.. code-block:: js

    date1.getDate();

.. code-block:: js

    < 1

El método `getMonth` devuelve el numero de mes, para complicarnos la existencia
enero es 0 en lugar de 1:

.. code-block:: js

    date1.getMonth();

.. code-block:: js

    < 0

El método `getFullYear` devuelve el año.

No confundirlo con `getYear` que devuelve el año menos 1900, osea que 2019 es
119`, si, no tiene sentido, como muchas cosas que vamos a aprender.

.. code-block:: js

    date1.getFullYear();

.. code-block:: js

    < 2019

El método `getHours` devuelve la hora.

.. code-block:: js

    date1.getHours();

.. code-block:: js

    < 17

El método `getMinutes` devuelve los minutos.

.. code-block:: js

    date1.getMinutes();

.. code-block:: js

    < 41

El método `getSeconds` devuelve los segundos.

.. code-block:: js

    date1.getSeconds();

.. code-block:: js

    < 1

Esos son los principales métodos, y luego de este breve tour alternativo
volvemos a lo que nos compete, usar `new Date()` para mostrar la hora del
momento en el que cargaron los datos:

Cambiamos `cargarFalso` para que en el campo `fecha` tenga la fecha actual en
texto:

.. code-block:: js

    function cargarFalso() {
        let fecha = new Date(),
            fechaTexto = fecha.toLocaleString();

        app.datos = {nombre: "bob", numero: 42, fecha: fechaTexto};
        app.cargando = false;
    }

Ahora al apretar "Recargar" la fecha debería cambiar indicandonos que cargo de
nuevo.

Ya aprendimos mucho, como "llamar funciones después", como declarar funciones
dentro de otras para tener acceso a las variables del cuerpo de la función,
como no confundir el `this` de distintas funciones creando variables y sobre el
tipo de dato `Date` y alguno de sus métodos, pero lo mejor esta por llegar, en
la próxima vamos a usar todo esto que aprendimos para cargar los datos de un
servicio/servidor/API.

El resultado esta en https://marianoguerra.github.io/creemos-en-la-web/paginas/datos-despues/2/

Podes explorar el código con las herramientas de desarrollo.
