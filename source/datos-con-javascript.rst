Datos con Javascript
====================

En el capítulo anterior :doc:`un-poco-de-logica-a-la-vista`
usamos un poco de javascript pero sin una introducción formal, ya es tiempo de
conocerlo un poco mejor, empezando con la forma de expresar distintos tipos de
datos, esto nos va a permitir definir el estado inicial de nuestra aplicación.

Antes de empezar de lleno te recomiendo que escribas los ejemplos que voy
poniendo así te vas acostumbrando a programar, es muy común pensar que solo
leyendo uno entiende las cosas, pero es muy fácil de darse cuenta que no es tan
así cuando intentamos escribirlo por nuestra cuenta y empezamos a notar
detalles importantes que se nos pasaron de largo al leerlo.

Para poder probar hay dos formas, la primera es abrir la sección de
consola interactiva en las herramientas de desarrollo de tu navegador.

Las herramientas de desarrollo se abren apretando la tecla F12 en Firefox o
Chrome, esto nos va a abrir un panel en la parte inferior de la pantalla, la
cual tiene múltiples secciones, la que vamos a usar hoy es la que normalmente
es la tercera de izquierda a derecha, llamada "Consola", hace click en el tab
"Consola" o "Console" según el idioma de tu navegador.

En la parte inferior hay un símbolo `>` o `>>`, si hacemos click a la derecha
va a aparecer un cursor, ahí podemos escribir javascript, el cual se va a
ejecutar cuando apretemos enter y nos va a mostrar el resultado (o un error).

La otra forma es usar alguna consola interactiva online, una conocida es
`repl.it <http://repl.it/languages/javascript>`_, hace click y debería abrirte
una pagina donde podes escribir en el panel del medio y ejecutarlo apretando la
tecla Control y Enter a la vez, el resultado debería aparecer en el panel de la
derecha.

Acá hay un video mostrando como usarlo:

.. raw:: html

    <iframe width="640" height="360" src="https://www.youtube.com/embed/gZwjiOlzqww?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Ya tenemos lo que necesitamos para empezar.

Números Decimales
-----------------

Un tipo de dato muy usado, tenemos dos tipos, los enteros (integer en ingles),
son números sin coma decimal, veamos algunos:

Escribiendo lo siguiente:

.. code-block:: javascript

    1

Si apretamos enter en la consola del navegador o Ctrl+Enter en repl.it el
resultado que nos va a devolver es:

::

    < 1

Nada mágico, decimos que javascript evaluó el código `1` y el resultado fue
`1`, aunque no lo creas eso es un programa valido, aunque no uno muy útil.

Veamos otros números, de ahora en mas voy a poner el código y el resultado, se
entiende que tenes que escribirlo y apretar enter o Ctrl+enter según donde
estés escribiendo el código para ver el resultado.

.. code-block:: javascript

    2

::

    < 2

.. code-block:: javascript

    0

::

    < 0

.. code-block:: javascript

    42

::

    < 42

También se pueden números negativos:

.. code-block:: javascript

    -42

::

    < -42

Números grandes

.. code-block:: javascript

    1234567890

::

    < 1234567890


Números Decimales
-----------------

También podemos escribir números con decimales, en programación los vas a
escuchar nombrar como "float", "floating point number", o "double", en lugar de
una coma se usa un punto:

.. code-block:: javascript

    0.5

::

    < 0.5

.. code-block:: javascript

    10.5

::

    < 10.5

.. code-block:: javascript

    -0.5

::

    < -0.5

Texto
-----

Otro tipo de dato muy importante es el texto, como vas a ir viendo a los
programadores les gusta poner nombres raros a las cosas y nunca decidir
cambiarlos, por mas que la razón del nombre ya se haya olvidado.

En este caso, al tipo de dato texto en programación se le suele llamar cadena
de texto, en ingles "string".

En javascript el texto es cualquier cosa envuelta en comillas simples `'` o
dobles, `"`, a la computadora le da igual cual uses.

Empecemos con el texto mas simple, texto vacío:

.. code-block:: javascript

    ""

::

    < ""

En Firefox cuando escribo con comillas simples me lo muestra de vuelta en
comillas dobles, así que parece que tiene una preferencia :)

.. code-block:: javascript

    ''

::

    < ""

El texto mas común que vas a encontrar en `introducciones a programación <https://es.wikipedia.org/wiki/Hola_mundo>`_:

.. code-block:: javascript

    'Hola mundo!'

::

    < "Hola mundo!"


Si queremos tener comillas dentro del texto, tenemos que "escaparlas" con una
barra invertida antes de la comilla si es del mismo tipo que estamos usando
para envolver el texto, así la computadora sabe que no se termina el texto aun,
esta es una buena razón para usar un tipo de comillas sobre el otro, para evitar
tener que escapar las comillas internas:


.. code-block:: javascript

    'Esto es "texto"'

::

    < "Esto es \"texto\""

Si queremos usar el mismo tipo de comillas las tenemos que escapar:

.. code-block:: javascript

    "Esto es \"texto\""

::

    < "Esto es \"texto\""

Igual para comillas simples:

.. code-block:: javascript

    "Esto es 'texto'"

::

    < "Esto es 'texto'"

.. code-block:: javascript

    'Esto es \'texto\''

::

    < "Esto es 'texto'"

Verdadero y Falso
-----------------

En programación se toman muchas decisiones, esas decisiones se toman según
condiciones, las cuales evalúan a verdadero o falso, y según el resultado
decidimos hacer una cosa, otra, o ninguna.

Debido a que esto es algo muy común, existe un tipo de dato muy simple, que
se llama `Lógico <https://es.wikipedia.org/wiki/Tipo_de_dato_l%C3%B3gico>`_ pero
lo vas a encontrar usualmente mencionado como booleano (pronunciado buleano) o directamente en ingles, bool (pronunciado bul),
en honor a `George Boole <https://es.wikipedia.org/wiki/George_Boole>`_

Hay solo dos valores para este tipo de datos:

Verdadero:

.. code-block:: javascript

    true

::

    < true

Falso:

.. code-block:: javascript

    false

::

    < false

Indicando ausencia de datos
---------------------------

Como hacemos si queremos indicar que a un dato no lo tenemos?

Un tal Tony Hoare se pregunto lo mismo en 1965 y tuvo una idea, un tipo de dato
al cual luego iba a llamar `"El error de los mil millones de dólares"
<https://es.wikipedia.org/wiki/C._A._R._Hoare#cite_ref-4>`_ , este es el tipo
de dato nulo, el cual tiene un solo valor:

.. code-block:: javascript

    null

::

    < null

El problema surge cuando pensamos que vamos a recibir un número, texto u otro
tipo de dato y alguien nos envía un `null` para indicarnos que no tiene ningún
valor, nosotros operamos sobre ese valor asumiendo que tiene un valor y lo que
obtenemos a cambio es un error. Así que primer consejo, intenta minimizar la
cantidad de veces que usas este tipo de datos, aunque muchas veces no quede
alternativa.

Hasta aquí llegamos y ya aprendimos todos los tipos de datos simples en
javascript, ahora pasemos a los tipos de datos "compuestos", es decir, estos
tipos de datos contienen otros datos.

Lista
-----

En nuestro ejemplo del capitulo anterior teníamos una lista de tareas, cada
tarea era un valor de tipo texto.

Una lista se define rodeando sus elementos entre corchetes `[` para empezar la
lista y `]` para terminarla.

Por razones históricas el tipo de dato lista también suele llamarse en ingles
`"array" <https://es.wikipedia.org/wiki/Vector_(inform%C3%A1tica)>`_.

Empecemos por la lista mas simple, una lista sin elementos:

.. code-block:: javascript

    []

Firefox me lo muestra así::

    < Array []

Una lista de un elemento:

.. code-block:: javascript

    [1]

::

    < Array [ 1 ]

Una lista de dos elementos, separamos cada elemento con una coma `,`:

.. code-block:: javascript

    [1, true]

::

    < Array [ 1, true ]

Como veras una lista puede contener cualquier tipo de dato, no hace falta que
todos sean del mismo tipo, veamos un caso extremo con todos los tipos de datos
que aprendimos hasta ahora, te desafío a escribirlo sin cometer un error al
primero intento, yo cometí uno (pista: me olvide de cerrar un corchete :).

.. code-block:: javascript

    [-1, 0, 1, 42, 0.5, true, false, null, "", 'hola', [], [["si, listas dentro de listas"]]]

Firefox me lo muestra indicándome que tiene 12 elementos y me muestra algunos,
no todos, no te preocupes, todos los elementos están ahí, si hago click en la
flecha `>` me expande los elementos así los puedo explorar::

    < Array(12) [ -1, 0, 1, 42, 0.5, true, false, null, "", "hola", … ]

Objeto
------

Felicitaciones, llegamos al ultimo tipo de dato de javascript, el objeto,
llamado de muchas formas, en otro lado lo veras como "map", "hash", "record",
en javascript se lo suele llamar objeto, así que vamos a seguir nombrandolo
así.

Un objeto es un tipo de dato que nos permite ponerle nombres a los valores que
contiene, entonces si queremos, por ejemplo, tener un valor que represente un
personaje en una serie y queremos tener su nombre, su tipo y su color, podemos
hacerlo con un objeto, pero no nos adelantemos, empecemos con el objeto mas
simple, uno que no tiene ningún valor, sí, aunque no lo creas es muy útil.

.. code-block:: javascript

    {}

Por razones que aprenderemos mas adelante, firefox se piensa que estoy
intentando hacer otra cosa y me devuelve::

    < undefined

Quizás cuando pruebes esto ya no se comporte así, Chrome no se confunde y devuelve::

    < {}

Te preguntaras que es ese `undefined` que devolvió?

Es un tipo de dato que no mencione hasta ahora porque es un valor que
representa la ausencia de valores, no es como null que es un valor que dice "no
hay valor", undefined es un poco mas confuso y abstracto y es usado cuando una
operación no devuelve ningún valor, o cuando por ejemplo intentamos obtener un
elemento en una lista vacía o un campo que no existe en un objeto, en ese caso
null no es útil porque ese campo no esta definido como null, simplemente no
esta definido, en esos casos obtenemos a su primo: `undefined`.

No hace falta que entiendas el significado de undefined aun, ya vas a
encontrartelo mas seguido de lo deseado.

Sigamos con un objeto con un solo campo:

.. code-block:: javascript

    {"nombre": "Bob"}

::

    < {nombre: "Bob"}

Para tener mas de un campo separamos los pares clave valor (los recordaras de CSS) con comas:

.. code-block:: javascript

    {"nombre": "Bob", "color": "amarillo", "tipo": "esponja"}

::

    < {nombre: "Bob", color: "amarillo", tipo: "esponja"}

Listo! ya sabes todos los tipos de datos necesarios para programar en
javascript, y de paso aprendiste sobre `JSON <https://es.wikipedia.org/wiki/JSON>`_ (pronunciado yeison), que es un
formato que nos permite transmitir datos entre computadoras, el cual se extrajo
de los tipos de datos de javascript, así que cuando alguien te diga que un
programa genera/recibe/produce datos en JSON, ya sabes a que se refieren, y
ahora podes leerlo y escribirlo.

También deberías entender y poder escribir los datos iniciales en el capitulo
anterior.
