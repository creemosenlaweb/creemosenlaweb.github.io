Ver o no ver, también es una cuestión
=====================================

En el capítulo anterior vimos como calcular o no según el resultado de una
condición, ahora vamos a ver como cambiar que mostramos en HTML según
el valor de condiciones.

Vamos a hacerlo dándole una cara a nuestro despertador.

Empecemos con la versión mas simple, inicializando un despertador con una sola
alarma y mostrando si esta prendido o no y a que hora esta configurada la
alarma.

.. raw:: html

    <script src="jslibs/vue-2.5.17.min.js"></script>


.. code-block:: html

    <div id="despertador-app-1">
      <p class="alert alert-info">Despertador Prendido? <strong>{{despertadorPrendido}}</strong></p>
      <p class="alert alert-info">Hora Despertador: {{horaDespertador}}</p>
    </div>
    <script>
      new Vue({
        el: '#despertador-app-1',
        data: {
          despertadorPrendido: false,
          horaDespertador: 8
        }
      })
    </script>

El resultado:

.. raw:: html

    <div id="despertador-app-1">
      <p class="alert alert-info">Despertador Prendido? <strong>{{despertadorPrendido}}</strong></p>
      <p class="alert alert-info">Hora Despertador: {{horaDespertador}}</p>
    </div>

    <script>
      new Vue({
        el: '#despertador-app-1',
        data: {
          despertadorPrendido: false,
          horaDespertador: 8
        }
      })
    </script>

Repasando un poco `vue.js <https://vuejs.org/>`_, tenemos un div raíz de
nuestra aplicación, el cual tiene que tener un atributo `id` así le podemos
indicar a vue.

Dentro del div tenemos dos párrafos, el primero muestra el valor de la variable
`despertadorPrendido` usando el formato de vue `{{variable}}` para indicar
que queremos que ahí ponga el valor de `variable`, el segundo muestra el valor
de la variable `horaDespertador`.

Luego en un tag script inicializamos nuestra aplicación con `new Vue(...)`
donde en `...` indicamos usando un objeto javascript dos atributos:

el
    Id del tag raíz de esta aplicación, para indicarle que es un id tenemos
    que prefijarlo con un `#`.

data
    Los datos de nuestra aplicación, por ahora las dos variables que usamos
    en el HTML arriba y que usamos en el capitulo anterior.

Con esto ya mostramos el estado actual de nuestro simple despertador, pero no
podemos prenderlo ni cambiar la hora, veamos como hacer eso:

.. code-block:: html

    <div id="despertador-app-2">
      <p v-if="despertadorPrendido" class="alert alert-success">Despertador Prendido</p>
      <p v-else class="alert alert-danger">Despertador Apagado</p>

      <p class="alert alert-info">Hora Despertador: {{horaDespertador}}</p>

      <input v-model.number="horaDespertador" type="number" class="form-control" placeholder="Hora Despertador">

      <div class="mt-3 text-center">
        <button v-if="despertadorPrendido" v-on:click="despertadorPrendido = false" class="btn btn-danger">Apagar</button>
        <button v-else v-on:click="despertadorPrendido = true" class="btn btn-success">Prender</button>
      </div>
    </div>

    <script>
      new Vue({
        el: '#despertador-app-2',
        data: {
          despertadorPrendido: false,
          horaDespertador: 8
        }
      })
    </script>

El resultado, proba cambiando la hora y haciendo click en el botón:

.. raw:: html

    <div id="despertador-app-2">
      <p v-if ="despertadorPrendido" class="alert alert-success">Despertador Prendido</p>
      <p v-else class="alert alert-danger">Despertador Apagado</p>

      <p class="alert alert-info">Hora Despertador: {{horaDespertador}}</p>

      <input v-model.number="horaDespertador" type="number" class="form-control" placeholder="Hora Despertador">

      <div class="mt-3 text-center">
        <button v-if="despertadorPrendido"
            v-on:click="despertadorPrendido = false"
            class="btn btn-danger">Apagar</button>

        <button v-else
            v-on:click="despertadorPrendido = true"
            class="btn btn-success">Prender</button>
      </div>
    </div>

    <script>
      new Vue({
        el: '#despertador-app-2',
        data: {
          despertadorPrendido: false,
          horaDespertador: 8
        }
      })
    </script>

Algunos cambios con respecto a la versión anterior, notaras que vue tiene su
propio `if` como javascript, en este caso se escribe `v-if="condicion"` lo usamos para decidir que párrafo mostramos, si `despertadorPrendido` es `true`, mostramos:

.. code-block:: html

      <p v-if="despertadorPrendido" class="alert alert-success">Despertador Prendido</p>

Sino:

.. code-block:: html

      <p v-else class="alert alert-danger">Despertador Apagado</p>

`v-else` tiene que estar después de un tag con un atributo `v-if` o `v-else-if`.

A la hora la seguimos mostrando de la misma forma pero ahora tenemos un campo
de texto para poder cambiarlo:

.. code-block:: html

      <input v-model.number="horaDespertador" type="number" class="form-control" placeholder="Hora Despertador">

Con `v-model` le indicamos a vue que queremos que el contenido de este input
refleje el valor del campo `horaDespertador`, es decir que va a mostrar su valor
y cuando lo cambiemos va a actualizar su valor.

Como el campo es un numero y no queremos tener un valor de tipo texto con un
numero dentro, le indicamos a vue que nos lo convierta a numero con `v-model.number`.

El resto es HTML estándar.

Finalmente usamos `v-if` y `v-else` de nuevo para mostrar el botón Prender o Apagar
según el valor de `despertadorPrendido`:

.. code-block:: html

        <button v-if="despertadorPrendido"
            v-on:click="despertadorPrendido = false"
            class="btn btn-danger">Apagar</button>

        <button v-else
            v-on:click="despertadorPrendido = true"
            class="btn btn-success">Prender</button>

En cada botón le indicamos a vue con `v-on:click` que cuando el botón sea
clickeado queremos cambiar el valor de `despertadorPrendido`.

Con esto ya tenemos una aplicación para prender/apagar un despertador y cambiar
la hora de la alarma, pero en el capítulo anterior teníamos una alarma con día,
veamos como replicar eso en HTML.

Lo primero que vamos a tener que hacer es tener por cada día de la semana
un campo para `despertadorPrendido` y uno para `horaDespertador`.

Podemos elegir mostrar todos los días o podemos hacerlo mas simple con un
selector del día que queremos ver y manipular.

El resto debería ser como hasta ahora.

Veamos como seria eso:

.. code-block:: html

    <div id="despertador-app-3">
      <p v-if="dias[diaSeleccionado].despertadorPrendido"
         class="alert alert-success">Despertador Prendido</p>
      <p v-else
         class="alert alert-danger">Despertador Apagado</p>

      <p class="alert alert-info">Hora Despertador:
        {{dias[diaSeleccionado].horaDespertador}}</p>

      <input v-model.number="dias[diaSeleccionado].horaDespertador"
         type="number" class="form-control" placeholder="Hora Despertador">

      <select v-model="diaSeleccionado" class="custom-select mt-3">
        <option value="lunes">Lunes</option>
        <option value="martes">Martes</option>
        <option value="miercoles">Miércoles</option>
        <option value="jueves">Jueves</option>
        <option value="viernes">Viernes</option>
        <option value="sabado">Sábado</option>
        <option value="domingo">Domingo</option>
      </select>

      <div class="mt-3 text-center">
        <button v-if="despertadorPrendido"
            v-on:click="despertadorPrendido = false"
            class="btn btn-danger">Apagar</button>

        <button v-else
            v-on:click="despertadorPrendido = true"
            class="btn btn-success">Prender</button>
      </div>
    </div>

    <script>
      new Vue({
        el: '#despertador-app-3',
        data: {
          diaSeleccionado: 'lunes',
          dias: {
            lunes: {
              despertadorPrendido: true,
              horaDespertador: 8
            },
            martes: {
              despertadorPrendido: true,
              horaDespertador: 7
            },
            miercoles: {
              despertadorPrendido: true,
              horaDespertador: 8
            },
            jueves: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
            viernes: {
              despertadorPrendido: true,
              horaDespertador: 7
            },
            sabado: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
            domingo: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
          }
        }
      })
    </script>

Resultado:

.. raw:: html

    <div id="despertador-app-3">
      <p v-if="dias[diaSeleccionado].despertadorPrendido"
         class="alert alert-success">Despertador Prendido</p>
      <p v-else
         class="alert alert-danger">Despertador Apagado</p>

      <p class="alert alert-info">Hora Despertador:
        {{dias[diaSeleccionado].horaDespertador}}</p>

      <input v-model.number="dias[diaSeleccionado].horaDespertador"
         type="number" class="form-control" placeholder="Hora Despertador">

      <select v-model="diaSeleccionado" class="custom-select mt-3">
        <option value="lunes">Lunes</option>
        <option value="martes">Martes</option>
        <option value="miercoles">Miércoles</option>
        <option value="jueves">Jueves</option>
        <option value="viernes">Viernes</option>
        <option value="sabado">Sábado</option>
        <option value="domingo">Domingo</option>
      </select>

      <div class="mt-3 text-center">
        <button v-if="dias[diaSeleccionado].despertadorPrendido"
            v-on:click="dias[diaSeleccionado].despertadorPrendido = false"
            class="btn btn-danger">Apagar</button>

        <button v-else
            v-on:click="dias[diaSeleccionado].despertadorPrendido = true"
            class="btn btn-success">Prender</button>
      </div>
    </div>

    <script>
      new Vue({
        el: '#despertador-app-3',
        data: {
          diaSeleccionado: 'lunes',
          dias: {
            lunes: {
              despertadorPrendido: true,
              horaDespertador: 8
            },
            martes: {
              despertadorPrendido: true,
              horaDespertador: 7
            },
            miercoles: {
              despertadorPrendido: true,
              horaDespertador: 8
            },
            jueves: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
            viernes: {
              despertadorPrendido: true,
              horaDespertador: 7
            },
            sabado: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
            domingo: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
          }
        }
      })
    </script>

El HTML es bastante similar, solo que donde antes teníamos
`despertadorPrendido` ahora tenemos `dias[diaSeleccionado].despertadorPrendido`
y donde antes teníamos `horaDespertador` ahora tenemos
`dias[diaSeleccionado].horaDespertador`, ya que tenemos que mostrar y cambiar
los valores del día seleccionado.

También tenemos un tag `select` con `v-model` seteado a `diaSeleccionado` así
muestra el día seleccionado y si elegimos otro valor en el select el valor de
`diaSeleccionado` es actualizado.

Si no te gusta repetir mucho las cosas como yo, notaras que
`dias[diaSeleccionado]` esta por todos lados, es molesto escribirlo, podemos
cometer un error si lo escribimos mal y si llegamos a renombrar algo vamos a
tener que ir a todos los lugares a actualizarlo.

Seria mas fácil si pudiéramos "nombrar" este pedazo de código a algo mas
claro y simple.

Otra cosa que podrás haber notado si tenes una tendencia a intentar romper todo
lo que te dan es que se puede poner horas incoherentes, por ejemplo 42 en el
campo de `horaDespertador`, estaría bueno poder evitar eso.

Veamos como podemos solucionar estos problemas:

.. code-block:: html

    <div id="despertador-app-4">
      <p v-if ="diaActual.despertadorPrendido"
         class="alert alert-success">Despertador Prendido</p>
      <p v-else
         class="alert alert-danger">Despertador Apagado</p>

      <p class="alert alert-info">Hora Despertador:
        {{diaActual.horaDespertador}}</p>

      <div class="input-group mt-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Cambiar Hora</label>
        </div>
      <input v-model.number="diaActual.horaDespertador"
         type="range" min="0" max="23" class="form-control" placeholder="Hora Despertador">
      </div>

      <div class="input-group mt-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Día</label>
        </div>
        <select v-model="diaSeleccionado" class="custom-select">
          <option value="lunes">Lunes</option>
          <option value="martes">Martes</option>
          <option value="miercoles">Miércoles</option>
          <option value="jueves">Jueves</option>
          <option value="viernes">Viernes</option>
          <option value="sabado">Sábado</option>
          <option value="domingo">Domingo</option>
        </select>
      </div>

      <div class="mt-3 text-center">
        <button v-if="diaActual.despertadorPrendido"
                v-on:click="diaActual.despertadorPrendido = false"
                class="btn btn-danger">Apagar</button>
        <button v-else
                v-on:click="diaActual.despertadorPrendido = true"
                class="btn btn-success">Prender</button>
      </div>
    </div>

    <script>
      new Vue({
        el: '#despertador-app-4',
        computed: {
          diaActual: function () {
            return this.dias[this.diaSeleccionado];
          }
        },
        data: {
          diaSeleccionado: 'lunes',
          dias: {
            lunes: {
              despertadorPrendido: true,
              horaDespertador: 8
            },
            martes: {
              despertadorPrendido: true,
              horaDespertador: 7
            },
            miercoles: {
              despertadorPrendido: true,
              horaDespertador: 8
            },
            jueves: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
            viernes: {
              despertadorPrendido: true,
              horaDespertador: 7
            },
            sabado: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
            domingo: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
          }
        }
      })
    </script>

Resulta en:

.. raw:: html

    <div id="despertador-app-4">
      <p v-if ="diaActual.despertadorPrendido"
         class="alert alert-success">Despertador Prendido</p>
      <p v-else
         class="alert alert-danger">Despertador Apagado</p>

      <p class="alert alert-info">Hora Despertador:
        {{diaActual.horaDespertador}}</p>

      <div class="input-group mt-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Cambiar Hora</label>
        </div>
      <input v-model.number="diaActual.horaDespertador"
         type="range" min="0" max="23" class="form-control" placeholder="Hora Despertador">
      </div>

      <div class="input-group mt-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Día</label>
        </div>
        <select v-model="diaSeleccionado" class="custom-select">
          <option value="lunes">Lunes</option>
          <option value="martes">Martes</option>
          <option value="miercoles">Miércoles</option>
          <option value="jueves">Jueves</option>
          <option value="viernes">Viernes</option>
          <option value="sabado">Sábado</option>
          <option value="domingo">Domingo</option>
        </select>
      </div>

      <div class="mt-3 text-center">
        <button v-if="diaActual.despertadorPrendido"
                v-on:click="diaActual.despertadorPrendido = false"
                class="btn btn-danger">Apagar</button>
        <button v-else
                v-on:click="diaActual.despertadorPrendido = true"
                class="btn btn-success">Prender</button>
      </div>
    </div>

    <script>
      new Vue({
        el: '#despertador-app-4',
        computed: {
          diaActual: function () {
            return this.dias[this.diaSeleccionado];
          }
        },
        data: {
          diaSeleccionado: 'lunes',
          dias: {
            lunes: {
              despertadorPrendido: true,
              horaDespertador: 8
            },
            martes: {
              despertadorPrendido: true,
              horaDespertador: 7
            },
            miercoles: {
              despertadorPrendido: true,
              horaDespertador: 8
            },
            jueves: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
            viernes: {
              despertadorPrendido: true,
              horaDespertador: 7
            },
            sabado: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
            domingo: {
              despertadorPrendido: false,
              horaDespertador: 8
            },
          }
        }
      })
    </script>

Notaras que `dias[diaSeleccionado]` cambio a `diaActual`, pero como `diaActual`
no es un valor, sino un valor "calculado" (computed en ingles) en base a otros
dos valores `dias` y `diaSeleccionado`, no podemos ponerlo en el campo `data`,
para estos datos calculados, vue nos permite especificarlos en el atributo
`computed`, donde cada campo es un nombre y una función que devuelve su valor.

En nuestro caso:

.. code-block:: javascript

        computed: {
          diaActual: function () {
            return this.dias[this.diaSeleccionado];
          }

Ahora podemos decir `diaActual` en nuestro HTML y vue lo va a reemplazar por
el valor de `dias[diaSeleccionado]`.

Notaras que a diferencia del código en `v-on:click` en el HTML acá cada variable
empieza con `this.`, esto es porque en el HTML de vue las únicas variables que podemos
acceder son las que están en el campo `data` y `computed` de nuestra aplicación,
por eso vue nos hace el favor de ponerle `this.` adelante a cada nombre, cuando
pasamos ese código a javascript, el navegador no sabe a que nos estamos refiriendo,
puede ser una variable en la función actual, una variable global o un atributo
de nuestra aplicación vue, para especificar que nos referimos a un nombre dentro
de nuestra aplicación, tenemos que prefijar los nombres con `this` (que en ingles
se traduce a "esto/este" y siempre se refiere al objeto al que pertenece la función
que estamos ejecutando.

El otro cambio, mas allá de algunas mejoras estéticas usando clases de
bootstrap, es que le cambiamos el tipo al `input` de `number` a `range` y le
especificamos dos atributos nuevos `min` y `max`, de esta manera el navegador
en lugar de mostrar un campo de texto donde se puede escribir cualquier cosa,
muestra un "slider" donde solo se puede especificar un valor en el rango
valido.

Con eso ya tenemos nuestro despertador con soporte para alarmas por día, en el
camino repasamos vuejs y aprendimos sobre campos calculados y el tipo `range`
del tag `input`.
