Lo espacial es invisible a los ojos
===================================

En la sección previa terminamos con una pagina que se veía así:

.. raw:: html

	<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
	  <iframe
		allow="geolocation; microphone; camera; midi; encrypted-media"
		src="https://glitch.com/embed/#!/embed/css--paso-7?path=index.html&previewSize=33"
		alt="css--paso-7 on Glitch"
		style="height: 100%; width: 100%; border: 0;">
	  </iframe>
	</div>

Que tendríamos que hacer si quisiéramos que la palabra lista tuviera la clase `llamativo`?

Hasta ahora para aplicar una clase a una palabra o conjunto de palabras aprovechábamos un tag que ya estaba ahí (**b**, **i** o **li**), pero dos de ellos aplican
un formato que no queremos, y el otro solo funciona con listas.

Como podemos hacer para definir una selección para aplicarle atributos pero que
en si no signifique nada?

Para eso hay un tag llamado `span <https://developer.mozilla.org/es/docs/Web/HTML/Elemento/span>`_ que en ingles significa algo así como
tramo, palmo, lapso o mas detallado: la extensión completa de algo de punta a
punta; la cantidad de espacio que cubre algo.

Osea, demarca el comienzo y fin de algo, su extensión y nada mas. Este tag
no significa nada en si mismo, solo lo usamos para demarcar una región a la
cual queremos referirnos para algo.

Si, muy difuso, vamos a algo mas tangible, en nuestro caso queremos usar span
para demarcar la palabra `lista` y aplicarle la clase `llamativo`:

.. code-block:: html

    <p>
        Una <span class="llamativo">lista</span> no ordenada:
    </p>

Y

.. code-block:: html

    <p>Una <span class="llamativo">lista</span> ordenada:</p>

Logrado nuestro objetivo pasamos al siguiente desafió, queremos resaltar el segundo párrafo poniéndole un borde, para eso vamos a usar un conjunto de atributos CSS nuevos:

.. code-block:: html

    <p style="border-width: 1px; border-style: solid; border-color: red;">Esto es otro párrafo</p>

Es un poco largo para solo decir "quiero un border rojo, de 1 pixel de ancho y solido", por suerte hay una versión abreviada:

.. code-block:: html

    <p style="border: 1px solid red;">Esto es otro párrafo</p>

No se vos, pero a mi me parece que el texto esta muy pegado al borde rojo,
preferiría que tuviera un poco mas de espacio.

Para eso usamos una de dos formas de darle mas "espacio" a un tag, una es el
espacio "interno" (entre el borde y el contenido) y otro es el espacio
"externo" (entre el borde y sus vecinos).

El espacio interno en ingles se llama `padding <https://developer.mozilla.org/es/docs/Web/CSS/padding>`_ (se traduce "relleno"), el
espacio externo en ingles se llama `margin <https://developer.mozilla.org/es/docs/Web/CSS/margin>`_ (se traduce "margen").

Estos dos atributos los vas a usar mucho en el día a día y como se usan mucho
hay formas abreviadas y mas especificas de usarlos, empecemos con la abreviada
que es la que nos sirve a nosotros.

.. code-block:: html

    <p style="padding: 8px; border: 1px solid red;">Esto es otro párrafo</p>

Eso esta un poco mejor!

Ya que estamos haciéndonos espacio, demosle un poco mas de espacio exterior:

.. code-block:: html

    <p style="margin: 8px; padding: 8px; border: 1px solid red;">Esto es otro párrafo</p>

Un poco mejor, pero si bien le da espacio con respecto al párrafo anterior y el
siguiente, también tiene un margen izquierdo que lo "desalinea" con respecto
al resto de los tags.

Para poder especificar margenes y rellenos con mas nivel de detalle vamos a
necesitar usar las versiones menos abreviadas, ambas aplican tanto a `margin`
como a `padding` así que las vemos juntas:

Primero la que ya vimos:

.. code-block:: css

    margin: 8px;
    padding: 8px;

Esto aplica a los 4 lados del tag, el siguiente nos permite especificar dos
valores:

.. code-block:: css

    margin: 8px 0px;
    padding: 8px 0px;

El primer valor es para arriba y abajo, el segundo valor para la izquierda y la
derecha.

El no abreviado nos permite especificar los cuatro valores:

.. code-block:: css

    margin: 8px 0px 0px 0px;
    padding: 8px 0px 0px 0px;

Y el orden es como las agujas del reloj:

.. code-block:: css

    margin: <arriba> <derecha> <abajo> <izquierda>;
    padding: <arriba> <derecha> <abajo> <izquierda>;

Pero que pasa si solo queremos especificar uno de ellos? tenemos que poner en 0
a todos los otros siempre? Por suerte no, hay otra forma de ser aun mas
especifico, diciendole cual margen o relleno queremos definir:

.. code-block:: css

    margin-top: 8px;    /* top: arriba */
    margin-right: 0px;  /* right: derecha */
    margin-bottom: 0px; /* bottom: abajo */
    margin-left: 0px;   /* left: izquierda */

Como veras a la derecha de las definiciones puse las traducciones entre `/*` y
`*/`, si escribís eso en tu CSS va a funcionar. Esto es porque son comentarios,
una forma de agregar notas en el código CSS que el navegador ignora ya que es
para los humanos.

Si querés escribir comentarios en HTML es un poco distinto:

.. code-block:: html

    <!-- Esto es un comentario, puede ir en cualquier lado y el navegador
         lo va a ignorar, puede extenderse mas de una linea.

         suele ser útil cuando queremos esconder un tag pero no borrarlo.
    -->

Volviendo al tag `span`, este tag sirve solo para rodear segmentos de texto,
que pasa si queremos agregar un borde con relleno a los primeros 3 párrafos?

Agregar borde a cada párrafo no sirve, porque lo que queremos es "rodear" los
3 párrafos con un borde y el tag `span` solo sirve para rodear texto.

Obviamente este problema se resuelve con un nuevo tag, se llama `div <https://developer.mozilla.org/es/docs/Web/HTML/Elemento/div>`_ y cumple
la misma función que `span` pero se diferencia en que dentro de el puede haber
otros tags.

Probemoslo rodeando los 3 primeros párrafos con un borde verde y relleno de 8
pixeles:

.. code-block:: html

    <div style="border: 1px solid green; padding: 8px">
      <p>Esto es un párrafo, la siguiente palabra es en
         <b class="llamativo">negrita</b>, la siguiente en
         <i class="llamativo">itálica</i>
      </p>

      <p style="margin: 8px; padding: 8px; border: 1px solid red;">
        Esto es otro párrafo
      </p>

      <p>
        Una <span class="llamativo">lista</span> no ordenada:
      </p>
    </div>

El resultado queda algo así:

.. raw:: html

	<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
	  <iframe
		allow="geolocation; microphone; camera; midi; encrypted-media"
		src="https://glitch.com/embed/#!/embed/espacial--paso-1?path=index.html&previewSize=33"
		alt="espacial--paso-1 on Glitch"
		style="height: 100%; width: 100%; border: 0;">
	  </iframe>
	</div>

Con lo que aprendimos en esta sección podemos arreglar una cosa que no quedaba
del todo bien.

Quizás notaste que al aplicar la clase `llamativo` a los ítems de la lista, el
marcador de la izquierda también se volvió `llamativo`, si queremos que solo el
contenido del ítem sea `llamativo` y no el ítem completo, podemos hacer uso de
nuestro nuevo amigo el tag `span` para aplicar la clase solo al contenido.

Pasamos de:

.. code-block:: html

    <ul>
      <li class="llamativo">Manzana</li>
      <li>Durazno</li>
      <li class="llamativo">Banana</li>
    </ul>

A:

.. code-block:: html

    <ul>
      <li><span class="llamativo">Manzana<span></li>
      <li>Durazno</li>
      <li><span class="llamativo">Banana<span></li>
    </ul>

Y Problema resuelto.

.. raw:: html

	<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
	  <iframe
		allow="geolocation; microphone; camera; midi; encrypted-media"
		src="https://glitch.com/embed/#!/embed/espacial--paso-2?path=index.html&previewSize=33"
		alt="espacial--paso-2 on Glitch"
		style="height: 100%; width: 100%; border: 0;">
	  </iframe>
	</div>

