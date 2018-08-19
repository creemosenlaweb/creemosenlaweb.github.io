Un poco de lógica a la vista
============================

Hasta el momento las paginas que creamos carecen de interactividad, el
contenido se muestra, pero no responde a ninguna acción de nuestra parte.

También sucede que son estáticas, todo el contenido de la pagina esta en el
HTML, no hay forma de usar el mismo HTML para mostrar información que varíe en
el tiempo o según contexto.

Para agregar dinamicidad y que la pagina muestre contenido distinto según el
contexto vamos a hacer uso de una herramienta llamada plantillas (template en
ingles) o también vistas (view en ingles).

Estas plantillas nos permiten describir el HTML con "huecos" indicando donde
van los datos que necesitamos, pero los datos provienen de otro lugar, la
plantilla toma los datos y los reemplaza en los "huecos".

Esto nos permite también ahorrarnos trabajo cuando tenemos que mostrar muchos
datos que tienen la misma estructura, definimos la plantilla para un elemento y
le indicamos a la plantilla que lo muestre tantas veces como elementos haya en
una lista.

Para agregar interactividad, es decir, que la pagina reaccione a acciones del
usuario, vamos a usar un nuevo lenguaje llamado javascript, que nos permite
indicar rutinas que modifican los datos en respuesta a acciones iniciadas por
el usuario. Nuestras plantillas son notificadas de los cambios en los datos y
actualizan su contenido.

Contemos
--------

El primer ejemplo va a empezar simple, nuestro dato va a ser un numero, que
indica cuantas veces se apretó un botón, es decir, un contador.

Cuando el usuario hace click en el botón, incrementamos en 1 el contador.

Empecemos con el HTML que ya conocemos:

.. code-block:: html

    <div>
        <p>Contador: <span>0</span></p>
        <button>Incrementar</button>
    </div>

Que resulta en:

.. raw:: html

    <div>
        <p>Contador: <span>0</span></p>
        <button>Incrementar</button>
    </div>

Lo único nuevo es el tag `button` que no habíamos visto hasta ahora porque
no sirve de mucho si no sabemos como hacerlo interactivo.

Muy linda aplicación, pero notaras que si hacemos click en el botón no pasa nada...

Es porque no le indicamos dos cosas:

* Que sucede cuando se hace click en el botón
* De donde saca el valor del contador y donde lo muestra

Para lo primero necesitamos indicarle al botón "cuando esto sucede, hace esto otro",
Para lo segundo necesitamos indicarle:

* El estado inicial de nuestros datos

  + En este caso, un contador inicialmente en cero

* Donde mostrar ese contador en nuestro HTML

Para eso vamos a usar un proyecto llamado `vuejs <https://vuejs.org/>`_, que
nos permite hacer esto y mucho mas.

Primero tenemos que incluir vuejs en nuestra pagina, así su funcionalidad esta
disponible, esto lo hacemos con un tag `script` dentro del `head` de nuestra pagina:

.. code-block:: html

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js"></script>

.. raw:: html

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js"></script>

Lo segundo que necesitamos hacer, es indicarle a vuejs, que parte de nuestro HTML
es su responsabilidad, ya que podemos tener distintas partes de la pagina manejadas
por distintas aplicaciones. Esto se lo indicamos agregando un identificador al tag
raíz de nuestra aplicación e indicando ese identificador cuando inicializamos la
aplicación.

.. code-block:: html

    <div id="mi-app-1">
        <!-- nuestra aplicación va acá -->
    </div>

Luego necesitamos inicializar nuestra app, para esto le indicamos cual es su
estado inicial y cual es el id de la raíz del HTML de nuestra app.

Esta parte va a requerir bastante explicación ya que vamos a usar un nuevo
lenguaje que quizás hayas oído mencionar: javascript.

.. code-block:: html

    <script>
      new Vue({
        el: '#mi-app-1',
        data: {count: 0}
      });
    </script>

El tag `script` te parecerá conocido ya que lo usamos para incluir aplicaciones
de otros, como vuejs o a-frame en capítulos anteriores. Ahora vamos a escribir
nuestros propios programas. Empezando con uno corto.

Al incluir vue.min.js lo que hicimos fue cargar un archivo con código
javascript adentro, que lo que hace es registrar un identificador llamado `Vue`
en nuestra pagina.

Este identificador es lo que se llama un `constructor`, un constructor es una
función especial que al invocarla con la instrucción `new` nos devuelve un nuevo
`objecto`. No te preocupes, son muchos conceptos que vamos a ir explorando en
breve, pero por ahora sabe que para crear una nueva app usando vuejs, tenemos
que crear un nuevo objeto de tipo `Vue`, el cual esta disponible porque incluimos
el script `vue.min.js`.

El `constructor` `Vue` necesita información para crear una aplicación,
mínimamente necesita saber:

* Cual es el id del tag raíz donde la app va a correr

En nuestro caso el id es mi-app-1, como hay muchas formas de indicar el tag
raíz, para que vue sepa que es un id le ponemos # al principio.

* Cual es el estado inicial de nuestra aplicación

En nuestro caso un solo campo, llamado `count` inicializado a `0`.

No te preocupes por ahora con los detalles de javascript, para las siguientes
apps vas a poder copiar el código y solo cambiar el id y los datos iniciales.

Ok, inicializamos nuestra app, pero el HTML esta vacío, como le decimos "mostrá el valor de `count` acá"?

Como habrás visto hasta ahora, cuando un programador necesita decirle algo a
una computadora, en lugar de usar un formato existente, inventa un lenguaje
nuevo, hasta ahora aprendimos HTML, CSS y javascript, todos con formatos
distintos, con nuestro lenguaje de plantillas no iba a ser la excepción, pero
por suerte es bastante simple.

También vale la pena aclarar que con estos 4 lenguajes (HTML, CSS, javascript y
un lenguaje de plantillas) es suficiente para hacer cualquier tipo de
aplicación como las que usas día a día en internet.

Para indicar los "huecos" donde van los datos, usamos el siguiente formato:

.. code-block:: html

    <div id="mi-app-1">
        <p>Contador: <span>{{count}}</span></p>
        <button>Incrementar</button>
    </div>

Como veras dentro del tag `span` escribimos `{{count}}` lo que significa "pone el valor del campo `count` acá".

El resultado es:

.. raw:: html

    <div id="mi-app-1">
        <p>Contador: <span>{{count}}</span></p>
        <button>Incrementar</button>
    </div>

.. raw:: html

    <script>
      new Vue({
        el: '#mi-app-1',
        data: {count: 0}
      });
    </script>

Un avance, pero el botón aun no hace nada...

Lo que le queremos indicar es "cuando el usuario haga click, hace esto",
lo cual se logra agregando un atributo especial al botón, especial porque
lo entiende vuejs, ese atributo se llama `@click`:

.. code-block:: html

    <div id="mi-app-1">
        <p>Contador: <span>{{count}}</span></p>
        <button @click="count = count + 1">Incrementar</button>
    </div>

.. raw:: html

    <div id="mi-app-2">
      <p>Contador: <span>{{count}}</span></p>
      <button v-on:click="count = count + 1">Incrementar</button>
    </div>
    <script>
      new Vue({
        el: '#mi-app-2',
        data: {count: 0}
      })
    </script>

La magia esta acá:

.. code-block:: html

    <button @click="count = count + 1">Incrementar</button>

Le decimos "cuando el usuario haga click en este botón, corre el código
`count = count + 1`, es decir, el nuevo valor de count es igual al viejo valor de
count mas 1.

Probalo haciendo click, debería incrementarse.

Una Lista (de tareas)
---------------------

Hasta ahora mostramos un valor y agregamos interactividad a nuestra pagina,
pero de la introducción aun falta una cosa: evitar repetición.

Eso vamos a ver ahora haciendo una aplicación para listar tareas.

Como siempre necesitamos tener un tag raíz para nuestra aplicación, un estado
inicial, mostrar los datos y agregar interactividad.

Nuestro estado inicial va a ser una lista con 0 o mas datos de tipo texto
indicando la tarea a realizar, empecemos con un par de tareas iniciales así
podemos practicar repetición antes de agregar interactividad:

.. code-block:: html

    <script>
      new Vue({
        el: '#todo-app',
        data: {
            tareas: [
                'Conquistar el mundo',
                'Abolir el patriarcado',
                'Comprar pan'
            ]
        }
      })
    </script>

Nuestro estado inicial contiene un campo llamado `tareas` que es una lista de
tres valores, los tres son de tipo texto (otro tipo que vimos es el tipo
numérico para el contador)

Ahora con nuestra lista de tareas inicializada, podemos mostrarla en la pantalla,
si fuéramos a hacerlo a la vieja usanza, haríamos algo así:

.. code-block:: html

    <ul>
        <li>Conquistar el mundo</li>
        <li>Abolir el patriarcado</li>
        <li>Comprar pan</li>
    </ul>

Que se vería así:

.. raw:: html

    <ul>
        <li>Conquistar el mundo</li>
        <li>Abolir el patriarcado</li>
        <li>Comprar pan</li>
    </ul>

Pero obviamente esto no nos sirve, queremos listar las tareas de nuestra lista
de datos, con lo que aprendimos hasta ahora podríamos intentar:

.. code-block:: html

    <ul>
        <li>{{tarea}}</li>
    </ul>

Pero esto no funciona porque no tenemos una sola tarea, sino muchas, y el
identificador tarea no esta definido, tenemos el identificador tareas, sin embargo, estamos bastante cerca..., para repetir un fragmento de HTML cuyo contenido
se encuentra en una lista tenemos que indicarle a vue algo así como "para cada tarea en la lista de tareas, mostrá este HTML", veamos como se hace:

.. code-block:: html

    <div id="todo-app">
        <ul>
            <li v-for="tarea in tareas">{{tarea}}</li>
        </ul>
    </div>

Lo que resulta en:

.. raw:: html

    <div id="todo-app-1">
        <ul>
            <li v-for="tarea in tareas">{{tarea}}</li>
        </ul>
    </div>
    <script>
      new Vue({
        el: '#todo-app-1',
        data: {
            tareas: [
                'Conquistar el mundo',
                'Abolir el patriarcado',
                'Comprar pan'
            ]
        }
      })
    </script>

Si entendés un poco de ingles veras que nuestra idea "para cada tarea en la
lista de tareas, mostrá este HTML" se traduce bastante similar.

Usamos el atributo `v-for` (la v es de vue, `v-for` es un atributo que vue
entiende, como `@click` antes), dentro del valor del atributo le decimos,
"tarea in tareas", lo cual completo `v-for="tarea in tareas"` leído de corrido
casi se lee "for tarea in tareas" que se traduce "para tarea en tareas".

El tag con el atributo `v-for` y sus tags hijos se van a repetir tantas veces
como elementos haya en la lista `tareas`, en nuestro caso 3 veces.

Agregando nuevas tareas
.......................

Como agregamos nuevas tareas a nuestra lista? para eso vamos a necesitar un
lugar donde podamos escribir la descripción de la nueva tarea y un botón para
agregar la tarea a la lista.

El campo de texto lo creamos con el tag `input`, el botón como ya vimos antes,
con el tag `button`, probemos un poco el HTML:

.. code-block:: html

    <input>
    <button>Crear nueva tarea</button>

.. raw:: html

    <input>
    <button>Crear nueva tarea</button>

Muy bonito pero eso no hace nada, como "conecto" el contenido del tag `input`
a un campo en mis datos?

primero necesitamos crear un nuevo campo en nuestros datos iniciales para
el contenido de la tarea a agregar, luego necesitamos indicarle al tag `input`
que su contenido es el valor del campo, llamemoslo `tituloNuevo`:

.. code-block:: html

    <div id="todo-app">
      <input v-model="tituloNuevo">
      <button @click="tareas.push(tituloNuevo); tituloNuevo = '';">Crear nueva tarea</button>

      <ul>
        <li v-for="tarea in tareas">{{tarea}}</li>
      </ul>
    </div>
    <script>
      new Vue({
        el: '#todo-app',
        data: {
            tituloNuevo: '',
            tareas: [
                'Conquistar el mundo',
                'Abolir el patriarcado',
                'Comprar pan'
            ]
        }
      })
    </script>

Probemos:

.. raw:: html

    <div id="todo-app-2">
      <input v-model="tituloNuevo">
      <button v-on:click="tareas.push(tituloNuevo); tituloNuevo = '';">Crear nueva tarea</button>

      <ul>
        <li v-for="tarea in tareas">{{tarea}}</li>
      </ul>
    </div>
    <script>
      new Vue({
        el: '#todo-app-2',
        data: {
            tituloNuevo: '',
            tareas: [
                'Conquistar el mundo',
                'Abolir el patriarcado',
                'Comprar pan'
            ]
        }
      })
    </script>

Vamos por partes:

.. code-block:: html

        <input v-model="tituloNuevo">

Agregamos el atributo `v-model` para indicarle a vue "el contenido de este tag
esta conectado al valor de `tituloNuevo` en nuestros datos.

.. code-block:: html

        <button @click="tareas.push(tituloNuevo); tituloNuevo = '';">Crear nueva tarea</button>

Nuestro viejo amigo `@click` en el botón hace dos cosas, primero agrega un
elemento al final de la lista `tareas`, usando el método `push`, que agrega un
elemento al final de la lista que esta antes del punto, el elemento a agregar
se lo indicamos entre paréntesis, en este caso queremos agregar el valor
contenido en `tituloNuevo`.

Pero eso no es todo, también queremos limpiar el contenido del tag `input` así
el usuario puede escribir una tarea nueva sin tener que borrar el contenido
que ya se agrego a la lista.

Para eso necesitamos indicar una instrucción nueva, y como ya tenemos una, necesitamos separarla, en javascript las instrucciones se separan con punto y coma.

La segunda instrucción actualiza el valor de `tituloNuevo` a el texto vacío,
indicado con dos comillas juntas `''`.

Borrando tareas
...............

Agregar tareas sin poderlas eliminar no suena a una buena experiencia de
usuario, necesitamos poder borrar tareas, para eso al lado de cada tarea vamos
a agregar un botón que al ser clickeado va a borrar dicha tarea.

Pero para poder borrar la tarea necesitamos saber su posición en la lista
para poder decir "borra el elemento numero 2 de la lista `tareas`", para
eso vamos a hacer uso de una variación del atributo `v-for` que nos permite
obtener la posición (indice) del valor que estamos mostrando, el formato es:

.. code-block:: html

    <li v-for="(tarea, pos) in tareas">
        <span>{{pos}}: {{tarea}}</span>
        <button @click="$delete(tareas, pos)" style="float: right">X</button>
    </li>

Vamos por partes, primero usamos el formato `(tarea, pos) in tareas` para que vue
nos devuelva no solo cada elemento en la lista sino si posición (indice), el cual
vamos a nombrar `pos`.

.. code-block:: html

    <li v-for="(tarea, pos) in tareas">

Luego para ver que estamos haciendo las cosas bien, mostramos el valor de `pos`
antes de la descripción de cada tarea:

.. code-block:: html

        <span>{{pos}}: {{tarea}}</span>

Finalmente agregamos un botón, que al ser clickeado llama a la función
`$delete` de vuejs, que recibe dos parámetros, el primero es la lista a la que
le queremos remover un elemento, el segundo parámetro es la posición o indice
que queremos remover.

.. code-block:: html

        <button @click="$delete(tareas, pos)" style="float: right">X</button>

El resultado con un poco mas de formato:

.. raw:: html

	<div id="todo-app-3">
	  <input v-model="tituloNuevo" type="text" class="form-control" id="tareaDesc" placeholder="Descripción de tarea">
	  
	  <div class="my-2 text-center">
		<button v-on:click="tareas.push(tituloNuevo); tituloNuevo = '';"
				class="btn btn-primary">Crear nueva tarea</button>
	  </div>

	  <table class="table table-bordered table-striped table-hover">
		<tbody>
		  <tr v-for="(tarea, pos) in tareas">
			<td>{{pos}}</td>
			<td>{{tarea}}</td>
			<td class="text-center">
			  <button v-on:click="$delete(tareas, pos)" class="btn btn-danger btn-sm">X</button>
			</td>
		  </tr>
		</tbody>
	  </table>
	</div>
	<script>
	  new Vue({
		el: '#todo-app-3',
		data: {
		  tituloNuevo: '',
		  tareas: [
			'Conquistar el mundo',
			'Abolir el patriarcado',
			'Comprar pan'
		  ]
		}
	  })
	</script>


Código completo:

.. code-block:: html

	<!doctype html>
	<html>
	  <head>
		<meta charset="utf-8">
		<title>Vue: Lista de Tareas</title>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js"></script>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	  </head>
	  <body class="m-3">
		<div id="todo-app">
		  <input v-model="tituloNuevo" type="text" class="form-control" id="tareaDesc" placeholder="Descripción de tarea">

		  <div class="my-2 text-center">
			<button @click="tareas.push(tituloNuevo); tituloNuevo = '';"
					class="btn btn-primary">Crear nueva tarea</button>
		  </div>

		  <table class="table table-bordered table-striped table-hover">
			<tbody>
			  <tr v-for="(tarea, pos) in tareas">
				<td>{{pos}}</td>
				<td>{{tarea}}</td>
				<td class="text-center">
				  <button @click="$delete(tareas, pos)" class="btn btn-danger btn-sm">X</button>
				</td>
			  </tr>
			</tbody>
		  </table>
		</div>
		<script>
		  new Vue({
			el: '#todo-app',
			data: {
			  tituloNuevo: '',
			  tareas: [
				'Conquistar el mundo',
				'Abolir el patriarcado',
				'Comprar pan'
			  ]
			}
		  })
		</script>
	  </body>
	</html>

