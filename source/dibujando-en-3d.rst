Dibujando Formas en 3D
======================

Ya dibujamos en 2D, se podrá en 3D?

La respuesta es si, pero como es un área que todavía esta en desarrollo no
es soportada 100% y de forma simple en todos los navegadores por lo que nos
vamos a ayudar de una librería llamada `aframe <https://aframe.io/>`_.

Una librería es uno o mas archivos que al cargarlos en nuestra pagina le
agregan funcionalidades.

En este caso nos permiten crear escenas en 3D como si estuvieramos escribiendo
HTML.

Como dije esto no esta completamente estandarizado así que aframe define sus
propios tags que no son parte de ningún estándar que soporten todos los
navegadores.

Entonces empecemos cargando la librería aframe:

.. code-block:: html

    <script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>

.. raw:: html

    <script src="jslibs/aframe-0.8.0.min.js"></script>

Y luego creamos nuestra escena:

.. code-block:: html

	<div style="width: 100%; height: 25em">
		<a-scene embedded>
		  <a-box position="-1 0.5 -3" rotation="0 45 0" color="blue"></a-box>
		  <a-sphere position="0 1.25 -5" radius="1.45" color="yellow"></a-sphere>
		  <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
		  <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
		  <a-sky color="#BBBBBB"></a-sky>
		</a-scene>
	</div>

.. raw:: html

	<div style="width: 100%; height: 25em">
		<a-scene embedded>
		  <a-box position="-1 0.5 -3" rotation="0 45 0" color="blue"></a-box>
		  <a-sphere position="0 1.25 -5" radius="1.45" color="yellow"></a-sphere>
		  <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
		  <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
		  <a-sky color="#BBBBBB"></a-sky>
		</a-scene>
	</div>

El tag raíz se llama `a-scene <https://aframe.io/docs/0.8.0/core/scene.html#sidebar>`_, que traducido seria "una escena", el cual contiene `a-box <https://aframe.io/docs/0.8.0/primitives/a-box.html#sidebar>`_ "una caja", `a-shere <https://aframe.io/docs/0.8.0/primitives/a-sphere.html#sidebar>`_ "una esfera", `a-cylinder <https://aframe.io/docs/0.8.0/primitives/a-cylinder.html#sidebar>`_ "un cilindro", `a-plane <https://aframe.io/docs/0.8.0/primitives/a-plane.html#sidebar>`_ "un plano" y `a-sky <https://aframe.io/docs/0.8.0/primitives/a-sky.html#sidebar>`_ "un cielo".

Cada uno con atributos especificando la posicion en 3 dimensiones, su tamaño,
ya sea con su radio o su alto y su ancho y su color.

Fijate que con el mouse y las flechas del teclado podes moverte dentro de la
escena, no es algo fijo sino algo que podes explorar. Si tenes un dispositivo
que soporte Realidad Virtual (los últimos smartphones o anteojos de realidad
virtual) apretando el icono en la esquina inferior derecha podes "sumergirte"
en la escena en realidad virtual.

La escena de arriba en un proyecto de thimble así podes modificar los colores,
formas, posiciones y tamaños.

Abrí https://thimbleprojects.org/marianoguerra/510288/ y hace click en `Remix`
para copiar el proyecto a tu cuenta.

Aframe también puede usarse para imágenes y videos panorámicos, veamos un ejemplo:

.. code-block:: html

	<div style="width: 100%; height: 25em">
		<a-scene embedded>
		  <a-sky src="https://raw.githubusercontent.com/aframevr/aframe/v0.7.0/examples/boilerplate/panorama/puydesancy.jpg" rotation="0 -130 0"></a-sky>

		  <a-text value="Puy de Sancy, Francia" width="6" position="-2.5 0.25 -1.5"
				  rotation="0 15 0"></a-text>
		</a-scene>
	</div>

Por el momento aframe solo soporta una escena por pagina, por lo que no muestro
el resultado directamente, abrí
https://thimbleprojects.org/marianoguerra/511087/ y hace click en `Remix` para
copiar el proyecto a tu cuenta.

Podes ver mas ejemplos en https://aframe.io/examples/showcase/snowglobe/
