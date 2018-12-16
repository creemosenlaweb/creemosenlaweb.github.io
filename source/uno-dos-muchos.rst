Creemos en la Web: Uno, dos, muchos
===================================

En capítulos anteriores vimos tipos de datos "compuestos", también llamados
colecciones, como listas y objetos, también vimos, solo por necesidad, como
mostrar elementos de una lista.

En este capitulo vamos a ver en detalle como hacer algo con cada elemento de
una lista o un objeto.

Repasando
---------

Recordemos un poco los tipos de datos compuestos/colecciones, escribí cada
linea en la consola del navegador (F12 y selecciona el tab `Consola` o similar)
para ver el resultado.

Lista (o Array)
...............

Una lista es una secuencia de cero o mas elementos de cualquier tipo, cada
elemento se accede por su posición en la lista, empezando desde la posición
**cero**.

Una lista vacía (sin elementos):

.. code-block:: javascript

    let listaVacia = [];

Una lista con un elemento:

.. code-block:: javascript

    let lista1 = [42];

Una lista con números:

.. code-block:: javascript

    let listaNumeros = [1, 2, 42, 100, 9001];

Una lista con valores de distinto tipo:

.. code-block:: javascript

    let listaTipos = [42, null, undefined, true, "hola", []];

Objeto
......

Un objeto es un conjunto de cero o mas elementos de cualquier tipo, cada
elemento se accede por su `clave`, que es el nombre que le damos a ese campo,
también llamado `atributo` del objeto.

Un objeto vacío:

.. code-block:: javascript

    let objetoVacio = {};

Un objeto con un campo:

.. code-block:: javascript

    let objetoCampo = {nombre: 'bob'};
    // es lo mismo que lo siguiente, siempre y cuando la clave (key)
    // sea un identificador valido, sino siempre hay que usar comillas
    let objetoCampo1 = {'nombre': 'bob'};

Un objeto con valores de distinto tipo:

.. code-block:: javascript

    let objetoTipos = {numero: 42, null: null, undefined: undefined, booleano: true, texto: "hola", lista: [10, 20, 30], objeto: {clave: 'valor'}, 'clave rara!': 12.5, 100: 'cien'};

Vale aclarar que las claves de los objetos son siempre de tipo texto (strings),
por mas que no le pongamos comillas, javascript las va a convertir en texto,
por lo que las claves 'null', 'undefined' o si ponemos un numero, no son de ese
tipo sino que se convierten en texto antes de guardarlas.

Accediendo a los valores a mano
-------------------------------

Como accedemos a los valores almacenados en colecciones? hay dos formas
dependiendo la colección, que queremos acceder dentro de esa colección y la
clave.

Accediendo elementos de una lista
.................................

Como ya dijimos, las listas son una secuencia de elementos de cualquier tipo,
donde cada elemento se accede por su posición en la lista, empezando desde la
posición **cero**, probemos con las variables que declaramos arriba, si no
las escribiste en la consola, este es un buen momento para hacerlo.

Si ya las escribiste y las intentas `declarar` de nuevo, puede que obtengas un
error de que la variable ya fue declarada, proba con otro nombre o cerra y abrí
el tab para poder declararla de nuevo.

Siempre me gusta empezar tratando de romper todo, así que veamos que pasa
cuando intentamos acceder a un elemento que no esta definido, por ejemplo, el
primer elemento de la lista vacía, que seria el elemento con indice `0`, para
acceder a un elemento de una colección usamos los corchetes después del nombre
de la colección y entre corchetes ponemos el identificador del valor que
queremos acceder:

.. code-block:: javascript

    listaVacia[0];

El resultado me da:

.. code-block:: javascript

    < undefined

Es decir que cuando le pedimos un elemento que no tiene nos devuelve `undefined`.

Pero como sabemos cuantos elementos tiene para saber hasta donde le podemos pedir?

En Javascript todos los valores son "objetos", es decir que tienen atributos y
funciones asociadas para operar sobre sus valores, esto quiere decir que le podemos
preguntar a una lista cuantos elementos tiene accediendo a su `atributo` `length` (que es "longitud" o "largo" en ingles).

Probemos:

.. code-block:: javascript

    listaVacia.length;

.. code-block:: javascript

    < 0

Nos dice que tiene 0 elementos, osea que es una lista vacía.

Como habrás visto usamos otra forma de acceder a un atributo de la lista, esta
vez con un punto, esta forma se puede usar cuando el valor del atributo es un
identificador valido, esto no quita que podamos hacer:

.. code-block:: javascript

    listaVacia['length'];

.. code-block:: javascript

    < 0

Lo que no es muy útil si el atributo al que queremos acceder es "fijo", pero
nos va a ser útil para cuando queramos acceder a atributos que no conocemos
cuando estamos escribiendo el programa, para darte una idea de lo que seria,
imaginemos que tenemos una función que recibe dos parámetros, un valor y
un nombre de un atributo de ese valor y devuelve el valor de ese atributo:

.. code-block:: javascript

    function devolverValor(valor, atributo) {
        return valor[atributo];
    }

La función no sabe cual es el valor de atributo, ya que es una variable, puede
ser cualquier cosa, probemos con listaVacia y 'length':

.. code-block:: javascript

    devolverValor(listaVacia, 'length');

.. code-block:: javascript

    < 0

Probemos con un indice de la lista:

.. code-block:: javascript

    devolverValor(listaVacia, 0);

.. code-block:: javascript

    < undefined

Probemos con `lista1`:

.. code-block:: javascript

    devolverValor(lista1, 'length');

.. code-block:: javascript

    < 1

.. code-block:: javascript

    devolverValor(lista1, 0);

.. code-block:: javascript

    < 42

Accediendo elementos de una objeto
..................................

Buenas noticias, ya sabes como acceder a elementos de un objeto, las formas
son las mismas, con corchetes si la clave no es un identificador valido y con
punto si lo es, empecemos rompiendo, tratemos de acceder a un atributo que no
esta definido en el objeto:

.. code-block:: javascript

    objetoVacio.yoNoExisto;

.. code-block:: javascript

    < undefined

Como la lista, si no esta definido devuelve undefined. Ahora probemos con uno
que si exista:

.. code-block:: javascript

    objetoCampo.nombre;

.. code-block:: javascript

    < 'bob'

Como ya vimos, se puede acceder con corchetes, cosa que no es necesaria en
este caso pero probemos:

.. code-block:: javascript

    objetoCampo['nombre'];

.. code-block:: javascript

    < 'bob'

En donde si la vamos a necesitar es con nuestra 'clave rara!', que no podemos
acceder con punto ya que no es un identificador valido:

.. code-block:: javascript

    objetoTipos['clave rara!'];

.. code-block:: javascript

    < 12.5

Como habíamos dicho, las claves de los objetos son siempre de tipo texto (string),
probemos que es cierto:

.. code-block:: javascript

    objetoTipos[100];

.. code-block:: javascript

    < 'cien'

Eso no demuestra nada... pero esto si:

.. code-block:: javascript

    objetoTipos['100'];

.. code-block:: javascript

    < 'cien'

Como veras también funciona, porque si le pasamos el numero, javascript lo
convierte en string, si le pasamos un string lo usa directamente, por eso ambas
funcionan.

Iterando (Listas)
.................

Hasta acá podemos acceder elementos de una colección de a uno, sabiendo la clave
o indice que queremos acceder de antemano o cuando tenemos la clave/indice en
una variable.

Pero muchas veces necesitamos acceder a todos los elementos/atributos de una
colección sin saber de antemano cuales son.

Para esto vamos a aprender a `iterar` sobre los elementos de una colección, hay
varias formas de hacerlo, vamos a empezar con una de las mas flexibles y
estándares, aunque un poco complicada, así que no te preocupes si no la
entendés la primera vez, yo programe por un año antes de entender bien como
funcionaba.

Antes de mostrar la sintaxis pensemos que es lo que queremos hacer, para el caso
de una lista:

Inicialización:

* Preguntarle a la lista cuantos elementos tiene y guardarlo en una variable, llamemosle `len`
* Declarar una variable a cero, llamemosle `i` (de indice)

Ciclo:

* Si el indice es menor que el largo

  + Obtener el valor de la lista en ese indice
  + Hacer algo
  + Incrementar la variable "indice"
  + Ejecutar `Ciclo` de nuevo

Como veras, la lógica tiene dos partes, una que se ejecuta una sola vez al
principio (Inicialización) y una que se ejecuta por cada elemento de la lista,
hasta que una condición deje de cumplirse (que el indice este dentro del largo
de la lista).

Esto se suele llamar "ciclo for", veamos la sintaxis a grandes rasgos, no es la sintaxis valida pero para darte una idea:

.. code-block:: javascript

    for (inicializarVariables (1); condicionDeCorte (2); siguiente (3)) {
        // lógica por cada paso (4)
    }

Veamoslo con código valido, no hace falta que lo entiendas entero, es para
que te des una idea:

.. code-block:: javascript

    for (let i = 0, len = lista.length; i < len; i += 1) {
        let elemento = lista[i];
        console.log('elemento', i, 'de lista es ', elemento);
    }

Inicialización:

la sección `inicializarVariables` (1) se ejecuta una sola vez al principio.

Ciclo:

Luego se evalúa la `condicionDeCorte` (2) para ver si la `lógica` (4) se va a
ejecutar o no.

Si la condición de corte evalúa a `false` el ciclo termina, si evalúa a `true`
se ejecuta la lógica (4) con el valor de `i` actual. Luego se evalúa
`siguiente` (3), que normalmente incrementa el valor de `i`, pero puede hacer
otras cosas.

Luego de evaluar `siguiente` (3), se repite el ciclo.

Probemoslo con varias listas de largos distintos, para eso pongamos nuestro
ciclo for en una función:

.. code-block:: javascript

    function mostrarElementos(lista) {
        console.log('antes del ciclo for para', lista);

        for (let i = 0, len = lista.length; i < len; i += 1) {
            let elemento = lista[i];
            console.log('elemento', i, 'de lista es ', elemento);
        }

        console.log('después del ciclo for');
    }

Probemoslo con una lista vacía:

.. code-block:: javascript

    mostrarElementos(listaVacia);

Imprime lo siguiente::

    antes del ciclo for para []
    después del ciclo for

Como podemos ver, el paso (4) nunca se ejecuto, porque la condición de corte
(2) evaluó a `false` la primera vez.

La secuencia completa para `listaVacia` es:

.. code-block:: javascript

    // Inicialización
    // (1)
    i = 0
    len = 0

    // Ciclo
    // (2)
    i < len // false

    // Fin


Probemos con una lista de un elemento:

.. code-block:: javascript

    mostrarElementos(lista1);

Imprime::

    antes del ciclo for para [ 42 ]
    elemento 0 de lista es  42
    después del ciclo for

Ahora el paso (4) y (3) se ejecutaron 1 vez, veamos la secuencia:

.. code-block:: javascript

    // Inicialización
    // (1)
    i = 0
    len = 1

    // Ciclo
    // (2)
    i < len // true

    // (4)
    elemento = lista[0]; // 42

    // (3)
    i += 1 // 1

    // (2)
    i < len // false

    // Fin

Ultima, con dos elementos:

.. code-block:: javascript

    mostrarElementos([10, 20]);

Imprime::

    antes del ciclo for para [ 10, 20 ]
    elemento 0 de lista es  10
    elemento 1 de lista es  20
    después del ciclo for

.. code-block:: javascript

    // Inicialización
    // (1)
    i = 0
    len = 2

    // Ciclo
    // (2)
    i < len // true

    // (4)
    elemento = lista[0]; // 10

    // (3)
    i += 1 // 1

    // Ciclo
    // (2)
    i < len // true

    // (4)
    elemento = lista[1]; // 20

    // (3)
    i += 1 // 2

    // (2)
    i < len // false

    // Fin

Iterando (Objetos)
..................

Iterar listas es lo mas común, pero algunas veces necesitamos iterar por todas
las claves de un objeto, para eso usamos una versión distinta (y por suerte mas
simple) del ciclo for, veamoslo directamente en una función:

.. code-block:: javascript

    function mostrarElementosObjeto(objeto) {
        console.log('antes del ciclo for para', objeto);

        for (let key in objeto) {
            let elemento = objeto[key];
            console.log('elemento', key, 'de objeto es ', elemento);
        }

        console.log('después del ciclo for');
    }

Esta versión es mas simple, asigna a `key` cada clave en `objeto` y ejecuta
la lógica.

Probemos con un objeto vacío:

.. code-block:: javascript

    mostrarElementosObjeto({});

Imprime::

    antes del ciclo for para {}
    después del ciclo for

Con varios elementos:

.. code-block:: javascript

    mostrarElementosObjeto(objetoTipos);

Imprime::

	antes del ciclo for para { '100': 'cien',
	  numero: 42,
	  null: null,
	  undefined: undefined,
	  booleano: true,
	  texto: 'hola',
	  lista: [ 10, 20, 30 ],
	  objeto: { clave: 'valor' },
	  'clave rara!': 12.5 }

	elemento 100 de objeto es  cien
	elemento numero de objeto es  42
	elemento null de objeto es  null
	elemento undefined de objeto es  undefined
	elemento booleano de objeto es  true
	elemento texto de objeto es  hola
	elemento lista de objeto es  [ 10, 20, 30 ]
	elemento objeto de objeto es  { clave: 'valor' }
	elemento clave rara! de objeto es  12.5

	después del ciclo for

Para saber cuantos atributos tiene un objeto, podemos usar una función llamada `Object.keys` que nos devuelve una lista de las claves de un objeto, probemosla:

.. code-block:: javascript

	Object.keys(objetoVacio);

.. code-block:: javascript

	< []

.. code-block:: javascript

	Object.keys(objetoCampo);

.. code-block:: javascript

	< [ 'nombre' ]

.. code-block:: javascript

	Object.keys(objetoTipos);

.. code-block:: javascript

	< [ '100',
	  'numero',
	  'null',
	  'undefined',
	  'booleano',
	  'texto',
	  'lista',
	  'objeto',
	  'clave rara!' ]

Veamos como podríamos iterar sobre las claves de un objeto usando `Object.keys`
y lo que aprendimos sobre listas:

.. code-block:: javascript

    function mostrarElementosObjeto1(objeto) {
        console.log('antes del ciclo for para', objeto);

        let keys = Object.keys(objeto);
        for (let i = 0, len = keys.length; i < len; i += 1) {
            let key = keys[i],
                elemento = objeto[key];
            console.log('elemento', key, 'de objeto es ', elemento);
        }

        console.log('después del ciclo for');
    }

Probemoslo:

.. code-block:: javascript

    mostrarElementosObjeto1({});

Imprime::

    antes del ciclo for para {}
    después del ciclo for

Con varios elementos:

.. code-block:: javascript

    mostrarElementosObjeto1(objetoTipos);

Imprime::

	antes del ciclo for para { '100': 'cien',
	  numero: 42,
	  null: null,
	  undefined: undefined,
	  booleano: true,
	  texto: 'hola',
	  lista: [ 10, 20, 30 ],
	  objeto: { clave: 'valor' },
	  'clave rara!': 12.5 }

	elemento 100 de objeto es  cien
	elemento numero de objeto es  42
	elemento null de objeto es  null
	elemento undefined de objeto es  undefined
	elemento booleano de objeto es  true
	elemento texto de objeto es  hola
	elemento lista de objeto es  [ 10, 20, 30 ]
	elemento objeto de objeto es  { clave: 'valor' }
	elemento clave rara! de objeto es  12.5

	después del ciclo for

Como podemos ver, funciona igual que `mostrarElementosObjeto`.
