Nombrando cosas
===============

En la sección anterior (:doc:`una-potente-calculadora`)
aprendimos a usar javascript como una calculadora, probemos usarla para eso convirtiendo de grados Celsius a Fahrenheit.

En la mayoría de los países se usan los grados centígrados para temperatura,
pero en algunos otros se usan los grados Fahrenheit, buscando en google como
es la formula de conversión, google me dice esto::

    °F = °C x 1.8 + 32

Donde °F significa "el resultado de la conversión, grados fahrenheit" y °C
significa "el valor en grados centígrados a convertir".

Como podemos ver, la formula "nombra" valores que van a variar según que
queremos convertir, probemos calcular cuanto es 36 grados centígrados a
fahrenheit:

.. code-block:: javascript

    36 * 1.8 + 32

::

    < 96.8

El código es bastante similar, pero tiene un par de problemas:

Primero, si nos encontramos con la expresión `36 * 1.8 + 32` en el medio de
otro código, como sabemos que partes son "parámetros", es decir, valores que
podemos cambiar y cuales son valores fijos de la formula.

Segundo, como sabemos formula de que es? puede ser cualquier calculo.

Tercero, si queremos usar esa formula muchas veces para distintos valores,
tenemos que escribir la formula cada vez? Osea que tenemos que recordarla
siempre o buscarla siempre? Esto puede hacer que en algún momento nos
equivoquemos y la escribamos mal o si necesitamos hacer un cambio tenemos que
buscar todas las veces que la usamos y cambiarla.

Todos estos son indicios de lo mismo, nos gustaría ponerle un nombre a la
formula y cada vez que la queramos usar simplemente mencionamos el nombre y le
proveemos los valores que requiera. En este caso el nombre podría ser
"centigradosAFahrenheit".

... silencio ...

Te preguntas porque ese nombre todo junto?

Resulta que en javascript podemos nombrar cualquier cosa siempre que el nombre
cumpla con un par de condiciones:

* Tiene que empezar con una letra, minúscula o mayúscula del alfabeto ingles
* Luego puede tener cualquier combinación de letras minúsculas, mayúsculas o números

Nombres validos:

* A
* b
* Ab
* aB
* a1
* diaDelMes
* parametro9

Nombres inválidos:

* 1a

  + empieza con numero
* a#

  + tiene un carácter que no es ni una letra ni un numero

* centígrados a fahrenheit

  + tiene espacios y tilde, no esta permitido

* año

  + tiene ñ

Otro detalle es que en javascript, las formulas se llaman funciones, como en
matemáticas, aunque las funciones de javascript son mas generales que las
funciones en matemáticas, funcionan de una manera similar:

* Una función tiene un nombre
* Una función recibe cero o mas valores de entrada o parámetros
* Una función devuelve un valor de salida

Veamos como definir una función bien simple en javascript, una función que
no recibe ningún parámetro y siempre devuelve el número 7:

.. code-block:: javascript

    function siete() {
        return 7;
    }

Vamos por partes:

Para definir una función en javascript, empezamos escribiendo la palabra
"function", que significa función en ingles.

Luego indicamos el nombre de la función, en este caso "siete".

Luego viene la lista de parámetros entre paréntesis, separados por coma si hay
mas de uno, en este caso no necesitamos ningún parámetro, así que simplemente
abrimos y cerramos los paréntesis.

Luego viene "el cuerpo" de la función, que es donde hacemos los cálculos necesarios, cada calculo se separa del siguiente con un punto y coma ";".

Cuando queremos terminar de ejecutar la función y devolver un valor lo
indicamos empezando la linea con la palabra "return" (retornar en ingles) y el
valor que queremos devolver, en este caso el numero 7.

Como usamos nuestra primera función? la nombramos y le indicamos los parámetros
que le queremos pasar, en este caso no hay parámetros así que de nuevo es
simplemente abrir y cerrar paréntesis.

.. code-block:: javascript

    siete()

::

    < 7

Volviendo al caso de la formula de conversión, tenemos un parámetro que es el
valor en centígrados que queremos convertir.

Como ese parámetro va a tomar distintos valores para cada conversión, le vamos a poner un nombre, propongo ponerle "gradosC".

Veamos de definir nuestra función:

.. code-block:: javascript

    function centigradosAFahrenheit(gradosC) {
        return gradosC * 1.8 + 32;
    }

Como veras seguimos la misma estructura que antes, la palabra "function",
seguida del nombre de la función a definir, seguida de la lista de parámetros
entre paréntesis, en este caso uno solo, llamado "gradosC", seguido del cuerpo
de la función entre llaves.

El cuerpo de la función tiene una sola linea que "retorna" el resultado de
calcular `gradosC * 1.8 + 32`.

Como veras cuando queremos usar un parámetro simplemente lo nombramos y
javascript reemplaza el valor que se le asigno en la llamada en ese lugar, por
lo que si llamamos a la función con el valor 36:

.. code-block:: javascript

    centigradosAFahrenheit(36)

Nos devuelve::

    < 96.8

Lo que hace javascript es reemplazar el valor del parámetro en esta llamada
dentro del cuerpo de la función, así que:

.. code-block:: javascript

        return gradosC * 1.8 + 32;

En esta llamada se convierte en:

.. code-block:: javascript

        return 36 * 1.8 + 32;

Vamos viendo que nombrar cosas hace todo mas legible y reusable, dentro de una
función podemos nombrar cualquier valor si hace las cosas mas claras.

En este ejemplo es mas o menos claro, pero si quisiéramos ser mas explícitos
podríamos ponerle un nombre al resultado como la formula inicial::

    °F = °C x 1.8 + 32

Eso lo hacemos con otra palabra especial, cuando queremos nombrar una función
nueva usamos la palabra "function", cuando queremos nombrar un parámetro
simplemente lo nombramos en la lista de parámetros, pero cuando queremos
nombrar un valor en el cuerpo de una función, tenemos que usar la palabra
"let", una palabra que podríamos traducir como "sea", veamos su uso así queda
mas claro:


.. code-block:: javascript

    function centigradosAFahrenheit1(gradosC) {
        let gradosF = gradosC * 1.8 + 32;
        return gradosF;
    }

La linea:

.. code-block:: javascript

        let gradosF = gradosC * 1.8 + 32;

Podríamos traducirla como "sea gradosF igual a gradosC * ...".

En la siguiente linea nombramos gradosF, que es reemplazado por el valor que se
le asigno en la linea anterior.

Con esto aprendimos que en javascript hay al menos 3 cosas que podemos nombrar:

* Funciones: una forma de reusar pedazos de código sin repetirnos
* Parámetros: una forma de indicar partes del código que pueden variar
* Variables: una forma de nombrar cálculos intermedios sin repetirnos

Estas 3 formas de nombrar nos permiten hacer nuestro código mas claro, hay
un dicho muy conocido en la programación que dice::

    Hay solo dos cosas difíciles en la programación: nombrar cosas e invalidar caches.

Ya aprendimos a nombrar cosas, lo difícil es ponerle el nombre indicado a cada
cosa para que luego cuando se lea el código de nuevo quede clara la intención.

Sobre caches vamos a aprender eventualmente, alguna vez cuando una pagina no
funcionaba bien alguien te habrá dicho que limpies el cache de la computadora,
esa es la razón :)
