Una potente calculadora
=======================

En :doc:`datos-con-javascript` aprendimos sobre los distintos
tipos de datos en javascript (normalmente abreviado js).

Ahora vamos a aprender como realizar operaciones sobre algunos de esos datos,
lo suficiente para tener una muy potente calculadora a nuestra disposición.

Ya que mencionamos la calculadora, empecemos por los que están disponibles en una.

Operadores Matemáticos
----------------------

Suma y resta
............

Para números enteros (normalmente se le dicen int/ints) y decimales (float/floats):

Con enteros el resultado es otro entero:

.. code-block:: javascript

    2 + 3

::

    < 5

.. code-block:: javascript

    2 - 3

::

    < -1


Como veras si ponemos el menos delante de un numero indicamos que es negativo:

.. code-block:: javascript

    2 - -3

::

    < 5

También podemos poner un mas, aunque no hace mucho efecto:

.. code-block:: javascript

    2 - +3

::

    < -1

Cuando la operación mezcla enteros y decimales, el resultado "se promueve" a
decimal:

.. code-block:: javascript

    2 - 3.5

::

    < -1.5

Podemos tener mas de una operación en la misma linea:

.. code-block:: javascript

    2 - 3.5 + 4 - -2

::

    < 4.5

Multiplicación y división
.........................

El símbolo de la multiplicación y división son distintos a los de la calculadora
o los que escribimos a mano, la multiplicación es `*` y la división es  `/`,
veamos algunos ejemplos:

.. code-block:: javascript

    2 * 3

::

    < 6

.. code-block:: javascript

    10 / 4

::

    < 2.5

Fijate que la división devuelve decimales aunque los números sean enteros.

Mezclemos un poco:

.. code-block:: javascript

    2 * 3 / 4

::

    < 1.5

Dividiendo por cero nos da un resultado raro:

.. code-block:: javascript

    10 / 0

::

    < Infinity

Y su par:

.. code-block:: javascript

    10 / -0

::

    < -Infinity

Precedencia
...........

Vimos suma y resta separado de multiplicación y división porque esos operadores
tienen distinta precedencia, es decir, se evalúan en un orden establecido, veamos
un ejemplo, si te digo que adivines el resultado de:

.. code-block:: javascript

    2 + 3 * 4

Cual crees que es?

* 14
* 20

El resultad es 14, porque la multiplicación se "evalua" antes que la suma, si
no especificamos explícitamente la precedencia con paréntesis, javascript
"inserta" los paréntesis según cierto orden preestablecido.

.. code-block:: javascript

    2 + 3 * 4

Es lo mismo que

.. code-block:: javascript

    2 + (3 * 4)

Yo siempre prefiero poner los paréntesis para que quede clara la precedencia
aun cuando no es necesario, esto va a ser aun mas importante cuando aprendamos a
un mas operadores, si de hecho queremos el otro resultado, simplemente usamos
paréntesis para forzar el orden deseado:

.. code-block:: javascript

    (2 + 3) * 4

::

    < 20

Resto de división
.................

Si en lugar del resultado de la división queremos saber el resto, usamos el
operador `%`:

.. code-block:: javascript

    10 % 3

::

    < 1

Operadores de comparación
-------------------------

Con los operadores que vimos hasta ahora ya tenemos una potente calculadora,
pero si recordas el tipo bool del capítulo anterior, recordaras que dije que es
el resultado de comparaciones y operaciones lógicas, ahora vamos a ver algunas
de ellas.

Igual y desigual
................

Lo mas fácil que podemos comparar es si dos cosas son iguales, pero como todo
en la programación, las cosas son un poco mas complicadas de lo necesario,
vamos por partes:

Comparando por igualdad:

1 es igual a si mismo

.. code-block:: javascript

    1 == 1

::

    < true

1 no es distinto a si mismo

.. code-block:: javascript

    1 != 1

::

    < false

.. code-block:: javascript

    1 == 2

::

    < false

1 no es distinto a si mismo

.. code-block:: javascript

    1 != 2

::

    < true

Hasta acá todo bien, pero ya sabemos que en javascript hay dos tipos para
indicar ausencia de datos, null y undefined, hace mucho tiempo, intentando
hacernos un favor, los creadores de javascript decidieron que ciertas cosas
eran iguales cuando claramente no lo son:


.. code-block:: javascript

    null == undefined

::

    < true

.. code-block:: javascript

    "1" == 1

::

    < true

Si, viste bien, el texto con el contenido "1", igual al numero 1, eso les
pareció una ayuda, pero el 99.9% de las veces termina siendo un problema, razón
por la cual introdujeron otros dos operadores de igualdad mas estrictos,
veamos:

.. code-block:: javascript

    null === undefined

::

    < false

.. code-block:: javascript

    "1" === 1

::

    < false

.. code-block:: javascript

    null !== undefined

::

    < true

.. code-block:: javascript

    "1" !== 1

::

    < true

Ahora te doy un consejo, que mas que consejo es orden, siempre usa `===` y
`!==`, porque cuando veas código usando las versiones mas flexibles, no sabes
si hay un posible error en ese código o si la persona realmente quiere hacer
una comparación mas flexible.

Mayores y Menores
-----------------

Si queremos saber si un numero es menor o mayor a otro usamos los operadores
de comparación correspondientes:

a > b
    es a mayor que b?
a >= b
    es a mayor o igual que b?
a < b
    es a menor que b?
a <= b
    es a menor o igual que b?

.. code-block:: javascript

    1 < 2

::

    < true

.. code-block:: javascript

    1 <= 1

::

    < true

.. code-block:: javascript

    1 > 2

::

    < false

.. code-block:: javascript

    1 >= 1

::

    < true

Precedencia
...........

La siguiente linea:

.. code-block:: javascript

    1 + 2 * 3 < 3 * 4 + 5

::

    < true

Es equivalente a:

.. code-block:: javascript

    (1 + (2 * 3)) < ((3 * 4) + 5)

::

    < true

Pero antes de seguir intentando memorizarte el orden, mas fácil es siempre usar
paréntesis :)

Operadores logicos
------------------

En la vida real, cuando tomamos decisiones, usualmente decimos cosas como::

    Si el precio del tomate es menor que 5 y el precio de la lechuga es menor
    que 6 o el precio del ajo es mayor a 7, entonces...

En esa expresión ya sabemos como expresar los números y las comparaciones, lo
que nos falta expresar son los "y" y los "o", vamos a por ellos.

Conjunción (y)
..............

La conjunción es cuando el resultado de una expresión es cierta/verdadera/true
si **ambas** partes son verdaderas. En javascript el símbolo que usamos para
expresarla es `&&`, veamos todos los casos de este operador en una tabla:

.. rst-class:: table table-bordered table-stripped table-hover

============== =========
Operación      Resultado
============== =========
true && true   true
true && false  false
false && true  false
false && false false
============== =========

Como podemos ver, solo es verdadero si ambos lados son verdaderos, veamoslo
en javascript

.. code-block:: javascript

    true && true

::

    < true

.. code-block:: javascript

    true && false

::

    < false

.. code-block:: javascript

    false && true

::

    < false

.. code-block:: javascript

    false && false

::

    < false

En ambos lados podemos poner cualquier expresión que evalúe a true o false:

.. code-block:: javascript

    1 === 1 && 1 !== 1

::

    < false

.. code-block:: javascript

    1 === 1 && 1 !== 2

::

    < true

Como con los otros operadores, podemos tener mas de uno:

.. code-block:: javascript

    1 === 1 && 1 !== 2 && 2 === 2

::

    < true

Disyunción (o)
..............

La disyunción es cuando el resultado de una expresión es cierta/verdadera/true
si **al menos una** de las partes son verdaderas.

En javascript el símbolo que usamos para expresarla es `||`, veamos todos los
casos de este operador en una tabla:

.. rst-class:: table table-bordered table-stripped table-hover

============== =========
Operación      Resultado
============== =========
true || true   true
true || false  true
false || true  true
false || false false
============== =========

Veamoslo en javascript

.. code-block:: javascript

    true || true

::

    < true

.. code-block:: javascript

    true || false

::

    < true

.. code-block:: javascript

    false || true

::

    < true

.. code-block:: javascript

    false || false

::

    < false

En ambos lados podemos poner cualquier expresión que evalúe a true o false:

.. code-block:: javascript

    1 === 1 || 1 !== 1

::

    < false

.. code-block:: javascript

    1 === 1 || 1 !== 2

::

    < true

Como con los otros operadores, podemos tener mas de uno:

.. code-block:: javascript

    1 === 1 || 1 !== 2 || 2 === 2

::

    < true

Negación (no)
.............

En español, si decimos "no es verdadero", nos referimos a que es falso, y al
revés, "no es falso", indica que es verdadero. En lógica este operador se llama
"not" (no en ingles), en js el operador es `!` y se pone delante de un valor
para "negarlo":


.. code-block:: javascript

    !true

::

    < false

.. code-block:: javascript

    !false

::

    < true

Podemos negar cualquier expresión, si es mas que un valor, lo ponemos entre
paréntesis:

.. code-block:: javascript

    !(1 === 1) || (1 === 1)

::

    < true

.. code-block:: javascript

    !(!(1 === 1) || (1 === 1))

::

    < false

.. code-block:: javascript

    !!true

::

    < true

Sobre valores símil falsos y cortocircuitos
...........................................

Si te gusta romper todo lo que cae en tus manos como yo, se te habrá ocurrido
"que pasa si pongo valores raros en esos operadores", bueno, javascript intenta
ayudarnos, pero a veces sus ayudas terminan siendo poco útiles, veamos algunos
ejemplos.

Si negamos dos veces un booleano, nos da el mismo valor:

.. code-block:: javascript

    !!true

::

    < true

Que pasa si negamos otros valores? veamos:


.. code-block:: javascript

    !0

::

    < true

.. code-block:: javascript

    !1

::

    < false

Como le pedimos que niegue un valor y js espera un booleano, al darle otra cosa
lo "convierte" (coherse en ingles) a booleano siguiendo ciertas reglas, todos
los tipos tienen un valor que evalúa a falso y todos los otros a verdadero, si
negamos dos veces cualquier valor obtenemos su valor booleano, por lo que
podemos decir que cero es "falsy" (es una expresión en ingles que podríamos
traducir como "similar a false") y cualquier otro numero es verdadero:

.. code-block:: javascript

    !!0

::

    < false

.. code-block:: javascript

    !!1

::

    < true

.. code-block:: javascript

    !!-1

::

    < true

.. code-block:: javascript

    !!42

::

    < true

.. code-block:: javascript

    !!""

::

    < false

.. code-block:: javascript

    !!"0"

::

    < true

.. code-block:: javascript

    !![]

::

    < true

.. code-block:: javascript

    !!{}

::

    < true

.. code-block:: javascript

    !!null

::

    < false

.. code-block:: javascript

    !!undefined

::

    < false

Entonces podemos decir que 0, el texto vacío, null y undefined, cuando son
evaluados en operaciones que esperan un valor booleano, actúan como false,
todos los otros, como true.

Y los cortocircuitos?

En los operadores `&&` y `||` hay casos donde viendo el lado izquierdo de
la operación, javascript ya sabe cual es el resultado, veamos de nuevo las
tablas de ambos operadores:

.. rst-class:: table table-bordered table-stripped table-hover

============== =========
Operación      Resultado
============== =========
true && true   true
true && false  false
false && true  false
false && false false
============== =========

Si el lado izquierdo es false, el resultado va a ser false, por lo cual para
que el código se ejecute mas rápido, javascript no evalúa el lado derecho y
devuelve directamente false.

.. rst-class:: table table-bordered table-stripped table-hover

============== =========
Operación      Resultado
============== =========
true || true   true
true || false  true
false || true  true
false || false false
============== =========

Si el lado izquierdo es true, el resultado va a ser true, por lo cual el lado
derecho no se ejecuta y devuelve directamente true.

Esto no es importante aun porque todavía no vimos funciones, pero imaginate
que javascript encuentra la expresión:

.. code-block:: javascript

    false && lanzarMisil()

Por la lógica de "cortocircuito", el misil no se va a lanzar, ya que la función
no va a ser evaluada.
