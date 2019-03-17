Colores
=======

Estamos creando una pagina y vemos o nos imaginamos un color que queremos usar,
como se lo comunicamos a la computadora?

Las computadoras son buenas manipulando números, los colores, al menos como
nosotros los usamos al comunicarnos, no tienen mucho de números.

En la búsqueda por encontrar un compromiso que funcionara tanto para humanos
como para computadoras surgieron diferentes "representaciones", formas de
describir unívocamente a que color nos referimos.

En esta sección vamos a explorar estas distintas representaciones.

Una herramienta online para elegir colores es `Mozilla Color Picker <https://mdn.mozillademos.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool$samples/ColorPicker_Tool?revision=1310905>`_ podes usar esta o buscar alguna con la que ya hayas trabajado, intenta que permita ver las representaciones que vamos a explorar en esta sección.

Usando colores
--------------

Los siguientes son algunos de los atributos CSS que requieren colores, todos
soportan todas las representaciones que vamos a explorar a continuación.

* `color <https://developer.mozilla.org/es/docs/Web/CSS/color>`_
* `background-color <https://developer.mozilla.org/es/docs/Web/CSS/background-color>`_
* `border-color <https://developer.mozilla.org/es/docs/Web/CSS/border-color>`_
* `outline-color <https://developer.mozilla.org/es/docs/Web/CSS/outline-color>`_
* `text-decoration-color <https://developer.mozilla.org/es/docs/Web/CSS/text-decoration-color>`_
* `text-emphasis-color <https://developer.mozilla.org/es/docs/Web/CSS/text-emphasis-color>`_
* `text-shadow <https://developer.mozilla.org/es/docs/Web/CSS/text-shadow>`_

Un ejemplo que algunos de los atributos listados:

.. code-block:: html


	<span style="border: 1px solid; text-decoration: underline; color: red; background-color: lightgrey; border-color: blue; text-decoration-color: green; text-shadow: yellow 0.6em 0.6em; padding: 1em;">Hello Color</span>

.. raw:: html

  <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
    <iframe
      allow="geolocation; microphone; camera; midi; encrypted-media"
      src="https://glitch.com/embed/#!/embed/colores--paso-1?path=index.html&previewSize=33"
      alt="colores--paso-1 on Glitch"
      style="height: 100%; width: 100%; border: 0;">
    </iframe>
  </div>


Colores con nombres
-------------------

La mas fácil y la que hemos usado hasta ahora es simplemente dar el nombre del
color en ingles cuando necesitamos referirnos a el.

Esta representación es simple para los humanos pero tiene un par de limitaciones:

* Hay que mantener una lista de nombres a colores
* No todos los colores tienen nombre
* Como me acuerdo de tantos nombres?
* Tampoco queremos una lista de colores eterna
* Cuando busco un color, como lo busco rápido en la tabla?
* Cuando digo rojo, que rojo es?

A continuación la lista de colores

.. raw:: html

  <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
    <iframe
      allow="geolocation; microphone; camera; midi; encrypted-media"
      src="https://glitch.com/embed/#!/embed/colores--paso-2?path=index.html&previewSize=33"
      alt="colores--paso-2 on Glitch"
      style="height: 100%; width: 100%; border: 0;">
    </iframe>
  </div>


RGB: Combinando Rojo, Verde y Azul
----------------------------------

.. figure:: ../galleries/cew/8/RGB_illumination.jpg

	Fuente: https://en.wikipedia.org/wiki/File:RGB_illumination.jpg

Otra forma de especificar colores es describir una mezcla de colores "básicos",
en este caso rojo (Red), verde (Green) y azul (Blue).

Como lo describimos?
....................

Necesitamos indicar la cantidad de cada color en la combinación, lo podemos
hacer de dos formas:

* Con números

  + 0: nada de color
  + 255: máximo de color

* Como porcentaje

  + 0%: nada de color
  + 100%: máximo de color

Como lo escribimos?
...................

La forma mas fácil de escribirlo si sabemos los valores individuales y dado
que hay múltiples formas de indicarlo es:

* Indicar de que forma vamos a describir el color, en nuestro caso rgb
* Indicar los 3 valores

Veamos algunos ejemplos

.. raw:: html

  <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
    <iframe
      allow="geolocation; microphone; camera; midi; encrypted-media"
      src="https://glitch.com/embed/#!/embed/colores--paso-3?path=index.html&previewSize=33"
      alt="colores--paso-3 on Glitch"
      style="height: 100%; width: 100%; border: 0;">
    </iframe>
  </div>


Alternativa: Hexadecimal
........................

Este formato suele estar disponible en herramientas que usan o manipulan
colores, es compacta pero difícil de interpretar a menos que entiendas la
numeración hexadecimal fluidamente.

La mencionamos porque te la vas a encontrar en muchos lugares y hay que saber
que es un formato de color valido, que lo podes usar en lugar de cualquiera de
los otros y que hay muchas herramientas que la usan.

Nota muy resumida para los curiosos:

En hexadecimal en lugar de contar del 0 al 9 y al quedarnos sin dígitos ponemos
un 1 adelante y empezamos de nuevo como lo hacemos en decimal, se cuenta del 0
a la F, porque tiene como base 16 y no 10 como el decimal, contando en
hexadecimal seria algo como: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F,
10, 11 ... 1F, 20 ... 2F, 30 ... F0 ... FF, 100 etc.

Lo que cambia es que el 255 de antes se convierte en FF y ponemos los 3 valores
todos juntos luego del símbolo #, que indica que estamos usando este formato,
el formato debe tener o 3 o 6 caracteres, de ser necesario llenamos los valores
restantes con 0.

Algunos ejemplos de la sección anterior convertidos a formato hexadecimal:

.. raw:: html

  <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
    <iframe
      allow="geolocation; microphone; camera; midi; encrypted-media"
      src="https://glitch.com/embed/#!/embed/colores--paso-4?path=index.html&previewSize=33"
      alt="colores--paso-4 on Glitch"
      style="height: 100%; width: 100%; border: 0;">
    </iframe>
  </div>

HSL: Tono, Saturación y "Liviandad/Brillo"
------------------------------------------

En esta representación tenemos 3 valores, llamados H (Hue), S (Saturation), L (Lightness).

H
    Numero de 0 a 360 (angulo en un circulo de colores), indica el tono base que queremos
S
    Porcentaje de saturación del color elegido, 0% va a ser un gris, 100% va a ser el color puro.

L
    Porcentaje de liviandad/brillo del color elegido, 0% va a ser negro, 100% va a
    ser blanco, 50% (y 100% de saturación) va a ser el color puro.

.. raw:: html

  <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
    <iframe
      allow="geolocation; microphone; camera; midi; encrypted-media"
      src="https://glitch.com/embed/#!/embed/colores--paso-5?path=index.html&previewSize=33"
      alt="colores--paso-5 on Glitch"
      style="height: 100%; width: 100%; border: 0;">
    </iframe>
  </div>

Alpha: Transparencia/Opacidad
-----------------------------

Un ultimo componente del color común a todos los que vimos es la
transparencia/opacidad, es decir, cuanto del contenido que se encuentra
"detrás" del color que estamos mostrando es visible.

La transparencia/opacidad va de 0% (ausencia absoluta de color, como un vidrio) a 100% (color solido, nada se "transluce")

Cuando indicamos la transparencia en rgb y hsl puede ser:

* Numero entre 0 y 1
* Porcentaje de 0% a 100%

Ejemplos:

.. code-block:: css

	/* transparente */
	rgba(255, 0, 153, 0)
	rgba(255, 0, 153, 0%)

	/* semi translucido */
	rgba(255, 0, 153, 0.5)
	rgba(255, 0, 153, 50%)

	/* opaco */
	rgba(255, 0, 153, 1)
	rgba(255, 0, 153, 100%)


.. code-block:: css

	/* transparente */
	hsla(240, 100%, 50%, 0)
	hsla(240, 100%, 50%, 0%)

	/* semi translucido */
	hsla(240, 100%, 50%, 0.5)
	hsla(240, 100%, 50%, 50%)

	/* opaco */
	hsla(240, 100%, 50%, 1)
	hsla(240, 100%, 50%, 100%)

En el formato hexadecimal simplemente agregamos dos dígitos mas al final entre
00 (0%) y FF (100%) indicando el nivel de transparencia

.. code-block:: css

	/* transparente */
	#FFFFFF00

	/* semi translucido */
	#FFFFFF80

	/* opaco */
	#FFFFFFFF

Y así llegamos al final, no hace falta que intentes aprender, entender o
memorizar esto, solo saber que hay distintas formas de especificar colores, mas
o menos cuales son, para el resto esta tu motor de búsqueda amigo.
