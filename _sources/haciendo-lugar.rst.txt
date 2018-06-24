Haciendo Lugar
==============

En la sección anterior vimos como indicar que queremos mas espacio entre el
borde y otros elementos (margin/margen), en el borde (border) o entre el borde
y el contenido interno (padding/relleno).

Cuando yo era joven y el pasto era mas verde, las paginas web se hacían
asumiendo una o dos resoluciones de pantalla, ya que los navegadores solo
funcionaban en PCs y todas las PCs tenían una resolución casi estándar (800
pixeles de ancho por 600 de alto).

En esas épocas mas simples la unidad que se usaba para indicar
espacio/distancia eran los pixeles, una unidad absoluta que se refiere a cada
puntito de la pantalla que puede mostrar un color.

Como todas las pantallas tenían cantidades similares de pixeles horizontales y
verticales, la cosa funcionaba bastante bien para todos.

.. code-block: css

    padding: 10px;
    margin: 5px;
    border: 1px solid red;

No hace falta que les cuente que hoy la web se accede de una cantidad
impresionante de dispositivos y resoluciones.

Para poder escribir estilo que se adapte a la resolución de cada dispositivo
usamos otras unidades, llamadas relativas, ya que son relativas a algo presente
en la pagina, las mas usadas son relativas al ancho del elemento que contiene
nuestro tag o al ancho de una letra en el texto.

Pixeles
-------

Esta es la unidad mas común, un pixel es un punto en la pantalla, el cual puede
mostrar un color, la cantidad horizontal y vertical de pixeles en una pantalla
se llama resolución, por ejemplo, una pantalla de una laptop puede tener 1280
pixeles de ancho por 800 de alto, lo que se escribe abreviado 1280x800.

Cuando especificamos el estilo de un tag y le decimos que su borde, margen o
relleno es de 15px (15 pixeles), le estamos diciendo que queremos 15 puntos de
espacio, pero no sabemos cuantos pixeles tiene la pantalla en total, asi que
eso puede ser bastante para la pantalla de un celular básico que puede tener
una resolución de 320x240 o muy poco para la pantalla de una computadora de
escritorio avanzada que pueden tener 3840x2160 (mas de 10 veces mas resolución!).

Idealmente vamos a usar esta unidad muy poco, yo lo uso solo para especificar
el ancho de los bordes y muchas veces no debería :)

em
--

Esta es la unidad mas usada y la mas recomendada, su nombre según tengo
entendido viene de lejos, 1em es el alto en pixeles de la letra M mayúscula, si
nombramos la letra M "eme" en ingles es "em".

el alto de que M mayúscula? de la M si estuviera en el tag en el que estamos
actualmente, osea que esta unidad es relativa al tamaño de texto del tag en el
que nos encontramos, el cual lo puede haber establecido cualquiera de los tags
padres, o ninguno, siendo asi el estándar de 16px.

rem
---

Pero que pasa si no sabemos que estilos se aplicaron a tags padres y queremos
estar mas seguros del tamaño que vamos a obtener? para eso existe la unidad
rem, que es el alto de la letra M según el tamaño de texto definido en la base
del documento (el tag <body>), de no estar definido va a ser también 16px.

Su nombre viene de "root em" (em de la raíz).

Esto nos permite saber que no importa que tamaños de fuente se hayan redefinido
hasta nuestro tag, su tamaño va a ser siempre fijo relativo al tamaño base del
texto del documento.

Porcentajes
-----------

Otra unidad útil, pero usada normalmente cuando estamos definiendo tamaños de
la estructura de nuestro documento como ancho de columnas es el porcentaje %.

El porcentaje se refiere al ancho del tag que contiene al tag actual, si
decimos que el ancho de nuestro tag es 50%, este ocupara la mitad del tag
padre, si decimos que el margen horizontal es de 5%, el padding horizontal es
del 2.5%, entonces nos queda 75% para el contenido:

5% margen izquierdo + 2.5% padding izquierdo + 2.5% padding derecho + 5% margen derecho = 15%

Ejemplos que no se entiende nada!
---------------------------------

Las unidades de espacio se entienden mas usandolas y a puro prueba y error, la
recomendación es usar em y rem siempre que se pueda, porcentajes cuando estamos
definiendo posicionamiento de cosas en la pagina y pixeles si tenes una buena
razón.

El div azul que contiene a todos los otros divs establece el tamaño de la
fuente a 16 pixeles:

.. code-block:: html

    <div style="font-size: 16px; width: 90%; padding: 2.5%; margin: 2.5%; border: 1px solid blue;">
        <div style="width: 5em;  background-color: red; color: white; margin: 1em 0;">5em</div>
        <div style="width: 5rem; background-color: red; color: white; margin: 1em 0;">5rem</div>
        <div style="width: 50px; background-color: red; color: white; margin: 1em 0;">50px</div>
        <div style="width: 50%;  background-color: red; color: white;">50%</div>
    </div>

.. raw:: html

    <div style="font-size: 16px; width: 90%; padding: 2.5%; margin: 2.5%; border: 1px solid blue;">
        <div style="width: 5em;  background-color: red; color: white; margin: 1em 0;">5em</div>
        <div style="width: 5rem; background-color: red; color: white; margin: 1em 0;">5rem</div>
        <div style="width: 50px; background-color: red; color: white; margin: 1em 0;">50px</div>
        <div style="width: 50%;  background-color: red; color: white;">50%</div>
    </div>

El div azul que contiene a todos los otros divs establece el tamaño de la
fuente, notar que los divs interiores tienen el mismo estilo que los de arriba:

.. code-block:: html

    <div style="font-size: 32px; width: 90%; padding: 2.5%; margin: 2.5%; border: 1px solid blue;">
        <div style="width: 5em;  background-color: red; color: white; margin: 1em 0;">5em</div>
        <div style="width: 5rem; background-color: red; color: white; margin: 1em 0;">5rem</div>
        <div style="width: 50px; background-color: red; color: white; margin: 1em 0;">50px</div>
        <div style="width: 50%;  background-color: red; color: white;">50%</div>
    </div>

.. raw:: html

    <div style="font-size: 32px; width: 90%; padding: 2.5%; margin: 2.5%; border: 1px solid blue;">
        <div style="width: 5em;  background-color: red; color: white; margin: 1em 0;">5em</div>
        <div style="width: 5rem; background-color: red; color: white; margin: 1em 0;">5rem</div>
        <div style="width: 50px; background-color: red; color: white; margin: 1em 0;">50px</div>
        <div style="width: 50%;  background-color: red; color: white;">50%</div>
    </div>

El primer div tiene un ancho de 5em, como el div padre establece el tamaño de
la fuente a distintos valores en los dos ejemplos, el ancho resultante es
distinto.

El segundo div tiene un ancho de 5rem, como ambos están en el mismo documento
raíz, tienen el mismo ancho, aun cuando el texto interior cambia, ya que
"hereda" el tamaño del div padre.

El tercero esta en pixeles, así que va a ser igual, el cuarto esta en
porcentaje, y ya que ambos divs padres tienen el mismo ancho, su ancho es
igual.

Probemos algo un poco distinto:

.. code-block:: html

    <div style="font-size: 32px; width: 50%; padding: 2.5%; margin: 2.5%; border: 1px solid blue;">
        <div style="width: 5em;  font-size: 1rem; background-color: red; color: white; margin: 1em 0;">5em</div>
        <div style="width: 5rem; font-size: 1rem; background-color: red; color: white; margin: 1em 0;">5rem</div>
        <div style="width: 50px; font-size: 1rem; background-color: red; color: white; margin: 1em 0;">50px</div>
        <div style="width: 50%;  font-size: 1rem; background-color: red; color: white;">50%</div>
    </div>

.. raw:: html

    <div style="font-size: 32px; width: 50%; padding: 2.5%; margin: 2.5%; border: 1px solid blue;">
        <div style="width: 5em;  font-size: 1rem; background-color: red; color: white; margin: 1em 0;">5em</div>
        <div style="width: 5rem; font-size: 1rem; background-color: red; color: white; margin: 1em 0;">5rem</div>
        <div style="width: 50px; font-size: 1rem; background-color: red; color: white; margin: 1em 0;">50px</div>
        <div style="width: 50%;  font-size: 1rem; background-color: red; color: white;">50%</div>
    </div>

El div padre ahora ocupa el 50% del ancho de la pagina, por lo que el ancho del
ultimo div hijo debería ser la mitad de los anteriores, para "estandarizar" em
y rem, seteo el tamaño de fuente de los divs hijos a 1rem.

Como no se en que pantalla estas viendo esto no te puedo decir mucho sobre que
ancho van a tener, lo único que se, es que como la fuente de ambos tiene 1rem
de tamaño, el ancho de los dos debería ser el mismo.

Si el tamaño de la fuente del documento resulta ser 10px, entonces el tercer
div tendrá el mismo ancho.

Como siempre, no hace falta que se entienda todo ahora, solo saber las unidades
mas usadas, las recomendadas y mas o menos como se comportan, el resto es
prueba y error.
