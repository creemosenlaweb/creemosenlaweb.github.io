No nos llames, nosotros te llamamos
===================================

En el capítulo anterior vimos como acceder a elementos y atributos individuales
de una colección o a todos ellos iterando con el ciclo for.

en este capítulo vamos a ver como usar funciones para evitar repetir código
y evitar errores comunes.

Las funciones también son valores
---------------------------------

Hasta ahora declaramos funciones con la palabra clave `function` y las llamamos
usando su nombre, paréntesis y una lista de argumentos.

Pero quizás notaste que el nombre de las funciones es un identificador como
cualquier otra variable, que pasa si intentamos **usarla** como cualquier otra
variable?

Probemos con una función simple:

.. code-block:: javascript

    function incrementar(valor) {
        return valor + 1;
    }

Probemosla:

.. code-block:: javascript

    incrementar(10);

.. code-block:: javascript

    < 11

Que pasa si solo la nombramos?:

.. code-block:: javascript

    incrementar;

.. code-block:: javascript

    < [Function: incrementar]

nada muy útil, pero nos indica que las funciones son valores como cualquier
otra cosa y como cualquier otra cosa en javascript podemos pasarla como
parámetro a funciones y devolverla de funciones.

Probemos pasarla como parámetro a una función, pero, para que la usaríamos?
lo único que sabemos hacer con una función es llamarla, así que hagamos eso:

.. code-block:: javascript

    function llamar(fn, valor) {
        return fn(valor);
    }


Probemos:

.. code-block:: javascript

    llamar(incrementar, 25);

.. code-block:: javascript

    < 26

Funciona, pero no es muy útil que digamos, que mas podríamos hacer?

Como mencione antes, una buena practica en programación es no repetirse mucho,
porque al repetirse podemos introducir errores en algunas partes, también hace
mas difícil hacer cambios ya que tenemos el mismo código repetido en muchos
lugares. También es útil escribir código complicado una sola vez en un solo
lugar para evitar errores y hacer mas simple el resto del código.

No se vos, pero escribir todo un for cada vez es un poco molesto, repetitivo
y si en lugar de `<` por error escribimos `<=` tenemos un error que va a ser
difícil de detectar, probemos escribir una función que nos evite escribir el
for cada vez:

.. code-block:: javascript

    function porCadaElemento(lista, fn) {
        for (let i = 0, len = lista.length; i < len; i += 1) {
            let elemento = lista[i];
            fn(elemento, i);
        }
    }

Lo que la función porCadaElemento hace es recibir una lista y una función
como parámetros y llamar a la función porCadaElemento de la lista pasandole
dos parámetros, el elemento y el indice del elemento en la lista.

Para probarlo vamos a necesitar una función, empecemos imprimiendo los elementos de la lista:

.. code-block:: javascript

    function imprimirElemento(elemento, i) {
        console.log('elemento', i, 'de lista es', elemento);
    }

Ahora llamemos a porCadaElemento con una lista y esta función:

.. code-block:: javascript

    porCadaElemento([10, 20, 30], imprimirElemento);

El resultado es::

    elemento 0 de lista es 10
    elemento 1 de lista es 20
    elemento 2 de lista es 30

Funciona, pero que pasa si queremos hacer algo en cada elemento y acumularlo?
creemos una función para eso:

.. code-block:: javascript

    function aCadaElemento(lista, fn) {
        let resultado = [];

        for (let i = 0, len = lista.length; i < len; i += 1) {
            let elemento = lista[i],
                nuevoElemento = fn(elemento, i);

            resultado.push(nuevoElemento);
        }

        return resultado;
    }

`aCadaElemento` se le aplica la función que pasamos por parámetro y el resultado
que devuelva se agrega a una nueva lista que devolvemos cuando llamamos a la
función para todos los elementos de la lista de entrada, probemos un caso
para entenderlo mejor:

.. code-block:: javascript

    aCadaElemento([10, 20, 30], incrementar);

.. code-block:: javascript

    < [ 11, 21, 31 ]

A cada elemento de la lista `[10, 20, 30]` le "aplicamos" la función
`incrementar` y acumulamos el resultado en una nueva lista que devolvemos.

Otra cosa que podemos hacer es "filtrar" elementos de una lista, con una
función que recibe una lista y una función que le indica si cada elemento debe
ser descartado de la lista resultado o no.

.. code-block:: javascript

    function filtrar(lista, fn) {
        let resultado = [];

        for (let i = 0, len = lista.length; i < len; i += 1) {
                let elemento = lista[i],
                    incluir = fn(elemento, i);

                if (incluir) {
                    resultado.push(elemento);
                }
        }

        return resultado;
    }

Para probar esta función vamos a necesitar una función nueva que reciba un
valor y devuelva true si la condición es verdadera y false si es falsa. Este
tipo de funciones se suelen llamar "predicados".

Creemos una que nos diga si un numero es par:

.. code-block:: javascript

    function esPar(n) {
        // si el resto de la división es cero, entonces el numero es par
        return n % 2 === 0;
    }

Probemos nuestro "predicado" `esPar`:


.. code-block:: javascript

    esPar(0);

.. code-block:: javascript

    < true

.. code-block:: javascript

    esPar(1);

.. code-block:: javascript

    < false

.. code-block:: javascript

    esPar(2);

.. code-block:: javascript

    < true

.. code-block:: javascript

    aCadaElemento([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], esPar);

.. code-block:: javascript

    < [ true, false, true, false, true, false, true, false, true, false ]

Ahora probemosla con nuestra función `filtrar`:

.. code-block:: javascript

    filtrar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], esPar);

.. code-block:: javascript

    < [ 0, 2, 4, 6, 8 ]

Funciona y la intención del código queda mas clara que si tuviéramos todo el
for mezclado con la lógica de lo que queremos hacer.

Una cosa que podemos hacer si la lógica que queremos aplicar es solo útil
en esa llamada es no declarar la función de antemano sino declararla directamente
en el lugar donde la llamamos, así queda todo junto y no se nos llena el código
de funciones que se usan una sola vez, como podemos pasar parámetros de valores
directamente sin declarar variables, podemos pasar funciones directamente sin
declararlas de antemano:

.. code-block:: javascript

    filtrar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function (elemento, i) {
        return elemento % 2 === 0;
    });

.. code-block:: javascript

    < [ 0, 2, 4, 6, 8 ]

Estas funciones sin declarar se llaman "funciones anónimas" o "lambda" ya que
no tienen nombre, pero es buena practica aun cuando nunca la vamos a llamar por
nombre, de darle un nombre para poder entender mas fácil que es lo que hace:

.. code-block:: javascript

    filtrar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function esPar(elemento, i) {
        return elemento % 2 === 0;
    });

.. code-block:: javascript

    < [ 0, 2, 4, 6, 8 ]

Pero si estas cosas son tan comunes, seguro alguien ya las hizo por nosotros no?

Así es, estas funciones son tan comunes que tienen nombres estándar y vienen
incluidas en javascript.

* `porCadaElemento` se llama `forEach` ("porCada" en ingles)
* `aCadaElemento` se llama `map` ("mapear" o "aplicar" en ingles)
* `filtrar` se llama `filter` ("filtrar" en ingles)

Estas funciones están disponibles como atributos en las listas, un atributo que
es una función suele llamarse método.

Probemos con los métodos de las listas lo que ya hicimos:

.. code-block:: javascript

    let lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

.. code-block:: javascript

    lista.forEach(imprimirElemento);

Imprime::

    elemento 0 de lista es 0
    elemento 1 de lista es 1
    elemento 2 de lista es 2
    elemento 3 de lista es 3
    elemento 4 de lista es 4
    elemento 5 de lista es 5
    elemento 6 de lista es 6
    elemento 7 de lista es 7
    elemento 8 de lista es 8
    elemento 9 de lista es 9

.. code-block:: javascript

    lista.map(incrementar);

.. code-block:: javascript

    < [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

.. code-block:: javascript

    lista.filter(esPar);

.. code-block:: javascript

    < [ 0, 2, 4, 6, 8 ]

Este capitulo es uno de los mas densos de todos hasta ahora, pero con lo
aprendido hasta acá ya podes programar cualquier cosa :) solo queda un concepto
importante por aprender pero no es necesario, sino que es útil para evitar que
nuestro código no se vuelva muy complicado.
