Datos por favor, pero validos
=============================

Ya sabemos suficiente HTML, CSS y Javascript para hacer una aplicación
completa, así que empecemos y aprendamos lo que falta a medida que lo vayamos
necesitando.

Gran parte de las aplicaciones implica mostrar y solicitar datos, así que
probemos solicitar datos, mas conocidos como "formularios" o "forms" para los
amigos.

El primero que nos vamos a encontrar en cualquier aplicación es el de
autenticación, donde pedimos usuario y contraseña y lo validamos, si es valido
pasamos a la siguiente pagina, si no, mostramos un mensaje de error.

Empecemos con un "esqueleto de aplicación vue", es decir, los componentes necesarios
pero sin que haga algo en particular.

Para eso necesitamos un archivo html, llamemoslo index.html:

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

        <title>Login</title>

        <!-- importamos vue para poder crear aplicaciones con javascript https://vuejs.org/ -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.21/vue.min.js"></script>
        <!-- importamos las hojas de estilo base bootstrap https://getbootstrap.com/ -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

        <!-- importamos nuestro estilo especifico -->
        <link rel="stylesheet" href="/style.css">

        <!-- importamos nuestro javascript -->
        <script src="/script.js" defer></script>
      </head>
      <body class="m-3">

        <!-- la raíz de nuestra aplicación -->
        <div id="app">
          <h1>Soy una aplicación vue.js basica</h1>
        </div>

      </body>
    </html>


Si no te acordás algunos de los elementos podes repasarlos de capítulos
anteriores o enterarte que yo no los escribí de memoria sino que los fui a
buscar a un capitulo anterior y lo copie acá ;)

Para darle "vida" a esta aplicación vamos a necesitar un poco de Javascript,
indicado por la presencia del tag `<script src="/script.js"></script>` en el html.

Ahora creemos un archivo llamado `script.js`:

.. code-block:: javascript

    /*globals Vue*/

    function main(event) {
      let app = new Vue({
        el: '#app',
        data: {}
      });
    }

    window.addEventListener('load', main);

El código define una función llamada main (principal en ingles) que va a ser
el "punto de entrada" de nuestra aplicación.

Pero cuando la llamamos?

Necesitamos llamarla cuando la pagina termine de cargar, para saber eso le
podemos decir al objeto `window` que cuando termine de cargar llame a la
función `main`.

En HTML/Javascript distintos elementos pueden emitir eventos para notificar de
cosas que suceden, uno de ellos es la ventana que nos puede avisar cuando termino
de cargar.

Para poder reaccionar a estos eventos, tenemos que "escuchar" (listen en ingles).

Los objetos que emiten eventos tienen un método llamado `addEventListener`
(recordemos que un método es una función asociada a un objeto que podemos
llamar con `objeto.metodo()`).

El método addEventListener ("añadir oyente de evento" en ingles) recibe dos
argumentos, el primero es el nombre del evento que queremos escuchar, en este
caso es el evento `'load'`. El segundo argumento es la función a llamar cuando
ese evento suceda. La función va a ser llamada con un argumento que contiene
información sobre el evento que acaba de suceder, en nuestro caso no nos hace
falta.

Cuando la pagina cargue, el objeto `window` (ventana) va a emitir el evento
`'load'` y va a buscar todas las funciones que escuchan ese evento y las va a
llamar pasandoles un objeto evento con la información del evento.

En ese momento nuestra función `main` sera llamada, la cual va a crear un nuevo
objeto de tipo `Vue` pasandole opciones de inicialización en un objeto, las
opciones de inicialización por ahora son:

el
    id del tag donde la aplicación va a correr, en nuestro caso es el id `app`,
    para indicarle que es un id le ponemos el # adelante (después vamos a ver
    otras formas de indicarle el tag raiz.

data
    los datos iniciales de nuestra aplicación, por ahora un objeto vacio.

Por si te dio curiosidad que es el `/*globals Vue*/`, es para indicarle al
programa que chequea errores que la variable Vue existe porque otro script la
definió, así no nos dice que estamos refiriéndonos a una variable inexistente.

Acá tenes el proyecto base en `glitch.com <https://glitch.com>`_, hace click en
`Remix to Edit` arriba a la derecha para hacerle cambios, hace click en `Edit`
abajo a la derecha para abrir este ejemplo en una pagina completa para
editarlo.

Abajo a la izquierda podes cambiar entre ver el código (Code), la aplicación
(App) o ambas (Both).

.. raw:: html

    <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
    <iframe allow="geolocation; microphone; camera; midi; encrypted-media" src="https://glitch.com/embed/#!/embed/cew-vue-base?path=README.md&previewSize=0" alt="cew-vue-base on Glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
    </div>

Muy lindo todo pero esta aplicación no hace nada, empecemos por agregar los
campos de usuario y contraseña, para eso los definimos en el estado inicial
de nuestra aplicación (el campo `data`):

.. code-block:: javascript

    /*globals Vue*/

    function main(event) {
      let app = new Vue({
        el: '#app',
        data: {
            username: '',
            password: ''
        }
      });
    }

    window.addEventListener('load', main);

Luego, como personas eficientes que somos, vamos a un ejemplo de bootstrap de
pagina de login https://getbootstrap.com/docs/4.1/examples/sign-in/ apretamos
el botón derecho sobre la pagina y elegimos la opción que dice algo así como
"Ver Código Fuente" o "View Page Source" (puede variar en tu navegador), copiamos
la parte del HTML que nos interesa, la pegamos en nuestro proyecto y la adaptamos
a nuestras necesidades, a mi me quedo así:

.. code-block:: HTML

    <div id="app">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>

        <label for="inputUser">Usuario</label>
        <input v-model="username" type="text" id="inputUser" class="form-control" required autofocus>

        <label for="inputPassword" class="mt-3">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" required>

        <button class="btn btn-primary btn-block mt-3" type="submit">Enviar</button>
    </div>

Usando el atributo `v-model` en los tags `input` conectamos los valores de
nuestra aplicación al HTML.

Ahora necesitamos que cuando se haga click en el botón comprobemos los valores,
para eso vamos a usar el atributo `@click` en el tag `button`:

.. code-block:: HTML

        <button @click="login()" class="btn btn-primary btn-block mt-3" type="submit">Enviar</button>

Pero a que función o método `login` llama?  al método login de nuestra aplicación,
razón por la cual tenemos que definirlo en el atributo `methods`:

.. code-block:: javascript

    /*globals Vue*/

    function main(event) {
      let app = new Vue({
        el: '#app',
        methods: {
          login: function () {
            if (this.username === 'bob' && this.password === 'secreto') {
              alert("Éxito");
            } else {
              alert("Error");
            }
          }
        },
        data: {
          username: '',
          password: ''
        }
      });
    }

    window.addEventListener('load', main);

Lo que login hace por ahora es comprobar si el usuario es `'bob'` y la
contraseña es `'secreto'`, si es así muestra un dialogo con el mensaje "Éxito",
sino muestra un dialogo con el mensaje "Error".

Fijate que para acceder a los campos `username` y `password` dentro del método
`login` de nuestro objeto `app`, usamos `this.username` y `this.password`.

La variable `this` es una variable que esta disponible en métodos (osea, funciones
de objetos), y su valor es el objeto al que el método pertenece, `this` significa
"este" en ingles, por lo que podemos acceder a los atributos y otros métodos
del objeto actual usando `this`.

Dicho de otra forma, si tenemos dos aplicaciones vue app1 y app2 y llamamos
a login en ambas, `this` se va a referir a la aplicación correcta.

.. code-block:: javascript

    app1.login(); // this es app1
    app2.login(); // this es app2

Dicho de otra otra forma, this es el valor a la izquierda del punto cuando
llamamos a un método.

Proba login con distintos usuarios y contraseñas.

Lo que podemos hacer ahora es, si el usuario y contraseña son correctos, ir
a otra pagina.

Para eso necesitamos saber en que pagina estamos, si en login
o la pagina principal y según eso mostrar una pagina o la otra. Para eso
vamos a agregar un atributo mas a nuestra aplicación, llamado `view` (vista
e ingles), si `view` es `'login'`, mostramos lo que veníamos mostrando hasta ahora,
si `view` es `'main'` (principal en ingles), mostramos una pagina donde le
damos la bienvenida.

Ya que estamos, vamos a mostrar un mensaje mas agradable si el login es invalido,
para eso vamos a agregar otro atributo, llamado `error`, que si no es vacio
va a mostrar un mensaje de error en la pantalla:

.. code-block:: javascript

    function main(event) {
      let app = new Vue({
        el: '#app',
        methods: {
          login: function () {
            if (this.username === 'bob' && this.password === 'secreto') {
              this.view = 'main';
            } else {
              this.error = 'Usuario o contraseña incorrecta';
            }
          }
        },
        data: {
          view: 'login',
          error: '',
          username: '',
          password: ''
        }
      });
    }

El HTML queda así:

.. code-block:: HTML

    <div id="app">
      
      <div v-if="view === 'login'">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <label for="inputUser">Usuario</label>
        <input v-model="username" type="text" id="inputUser" class="form-control" required autofocus>
        <label for="inputPassword" class="mt-3">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" required>

        <div v-if="error !== ''" class="alert alert-danger mt-3">
          {{error}}
        </div>
        
        <button @click="login()" class="btn btn-primary btn-block mt-3">Enviar</button>
      </div>
      
      <div v-if="view === 'main'">
        <h1>Hola {{username}}!</h1>
      </div>

    </div>

Fijate que la estructura base es:

.. code-block:: HTML

    <div id="app">
      
      <div v-if="view === 'login'">
        <!-- pagina de login acá -->
      </div>
      
      <div v-if="view === 'main'">
        <!-- pagina principal acá -->
      </div>

    </div>

Usamos `v-if` para incluir o no distintos tags (y sus descendientes) según el valor
del atributo `view`, lo mismo hacemos con el mensaje de error:

.. code-block:: HTML

        <div v-if="error !== ''" class="alert alert-danger mt-3">
          {{error}}
        </div>

Para cerrar el ciclo, vamos a permitir volver a la pagina de login, osea que
vamos a agregar un botón "logout" que permita ir de la pagina principal al login:

Cambiamos la sección principal para que quede:

.. code-block:: HTML

    <div v-if="view === 'main'">
        <h1>Hola {{username}}!</h1>
        <a href="#" @click="logout()" class="float-right">logout</a>
    </div>

Y agregamos el método `logout` a la lista de métodos de la aplicación, donde
seteamos `view` a `'login'` y por las dudas limpiamos el mensaje de error,
usuario y password.

.. code-block:: javascript

    function main(event) {
      let app = new Vue({
        el: '#app',
        methods: {
          login: function () {
            if (this.username === 'bob' && this.password === 'secreto') {
              this.view = 'main';
            } else {
              this.error = 'Usuario o contraseña incorrecta';
            }
          },
          logout: function () {
            this.view = 'login';
            this.error = '';
            this.username = '';
            this.password = '';
          }
        },
        data: {
          view: 'login',
          error: '',
          username: '',
          password: ''
        }
      });
    }


El resultado final para explorarlo:

.. raw:: html

    <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
      <iframe
        allow="geolocation; microphone; camera; midi; encrypted-media"
        src="https://glitch.com/embed/#!/embed/vue-login?path=script.js&previewSize=0"
        alt="vue-login on Glitch"
        style="height: 100%; width: 100%; border: 0;">
      </iframe>
    </div>
