HTML atributos y meta datos
===========================

En la sección anterior vimos como crear una pagina web que replicaba un
documento de Google Docs con formato básico, en esta sección vamos a aprender
sobre dos conceptos con nombres tenebrosos pero que como todo lo tenebroso
cuando se los entiende resulta ser bastante inofensivo.

Necesitamos saber sobre atributos y meta datos para poder resolver dos problemas
en nuestra pagina web:

1. Como le digo al navegador cual es el titulo de mi pagina web sin que lo muestre en el contenido del documento?

2. Como le indico información extra sobre un tag sin que se vea en el documento? por ejemplo, como separo el texto de un enlace y la dirección a la que apunta?

Para el primero vamos a usar meta datos, que son datos sobre el documento pero
que no son parte del contenido del mismo.

Para lo segundo vamos a usar atributos, que son datos sobre los tags pero no
son parte del contenido.

Meta datos
----------

Para separar los meta datos del documento del contenido hacemos lo usual,
rodeamos los metadatos en un tag y el contenido en otro.

En la terminología HTML un documento esta separado en dos partes, la *cabeza* o
*cabecera* (**head** en ingles), la cual contiene los datos sobre el documento
y el cuerpo (**body**), el cual tiene el contenido del mismo.

Como estos dos son parte de un documento HTML, ambos están contenidos en el tag
raíz de todo documento HTML, el tag html.

Veamos el documento correctamente estructurado mas simple que podamos tener:

.. code-block:: html

    <html>
        <head></head>
        <body></body>
    </html>

Si queremos definir el titulo del documento, el cual se va a mostrar en la
barra de títulos del navegador cuando la pagina tiene el foco y también en la
pestaña de la pagina en el navegador, usamos el tag **title**.

.. code-block:: html

    <html>
        <head>
            <title>Mi Pagina</title>
        </head>

        <body>
        </body>
    </html>

Otro tag que es recomendable poner en el documento si no queremos tener
problemas con como el navegador muestra las tildes y la ñ es un tag que le
indica como interpretar tildes y otros caracteres especiales, utf-8 es un
estándar que define como interpretar caracteres especiales y es el mas usado
actualmente, simplemente copialo en todos tus documentos para evitar dolores de
cabeza.

.. code-block:: html

    <html>
        <head>
            <meta charset="utf-8">
            <title>Mi Pagina</title>
        </head>

        <body>
        </body>
    </html>

Para terminar, dado que HTML es un estándar que ha evolucionado en el tiempo,
el navegador soporta múltiples versiones y si no se le indica la versión intenta
adivinar. 

Normalmente adivina bien, pero para facilitarle el trabajo y evitar confusiones
podemos ser buenas personas e indicarselo explícitamente.

.. code-block:: html

    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Mi Pagina</title>
        </head>

        <body>
        </body>
    </html>

La primera linea le indica que el documento es de tipo HTML 5, la ultima versión
del estándar.

No te preocupes en memorizar estos tags, yo simplemente copio de algún documento
anterior las partes comunes, nunca empiezo de cero :)

La evolución de HTML y su énfasis en mantener compatibilidad hace que todavía
puedas visitar la primera pagina web publicada en 1991: http://info.cern.ch/hypertext/WWW/TheProject.html

Atributos
---------

Ahora al segundo problema, como indicamos información sobre un tag que no es
el contenido principal, por ejemplo, si queremos crear un enlace a https://google.com pero queremos que el texto del enlace diga "Google", como hacemos esto?

Quizás lo notaste en algunos de los ejemplos hasta ahora.

Para hacer eso usamos lo que se llaman atributos, que son información extra que
agregamos a un tag, la mayoría son opcionales, de manera que los vamos agregando
y aprendiendo a medida que los vamos necesitando.

Veamos como resolver el problema del enlace.

.. code-block:: html

    <a href="https://google.com">Google</a>

Que se ve así:

.. raw:: html

    <a href="https://google.com">Google</a>

Los atributos van luego del identificador del tag de apertura, separados por espacios, primero va el nombre del atributo, luego un `=` y luego el valor, normalmente entre comillas.

Por si no te diste cuenta, acabamos de aprender un nuevo tag, el tag **a** (de
**a** nchor que significa ancla en ingles) con su atributo **href** (de **h**
ypertext **ref** erence en ingles).

Ya que aprendimos un tag nuevo, aprendamos otro similar y muy útil, el tag para mostrar imágenes [1]_:

.. code-block:: html

    <img src="http://marianoguerra.org/galleries/cew/3/cube.jpg">

Así se ve:

.. raw:: html

    <img src="http://marianoguerra.org/galleries/cew/3/cube.jpg">

Agreguemos mas atributos, uno para el tooltip (title), y dos para definir el alto (height) y el ancho (width).

.. code-block:: html

    <img title="un cubo" width="200" height="200" src="http://marianoguerra.org/galleries/cew/3/cube.jpg">

El resultado:

.. raw:: html

    <img title="un cubo" width="200" height="200" src="http://marianoguerra.org/galleries/cew/3/cube.jpg">

Ahora pongamos todo junto en una pagina:

.. code-block:: html

    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Mi Pagina</title>
        </head>

        <body>
            <p>Un link a <a href="https://google.com">Google</a></p>

            <p>Una imagen:</p>

            <img title="un cubo" width="200" height="200" src="assets/cube.jpg">
        </body>
    </html>

Que se ve algo así:

.. raw:: html

	<div class="glitch-embed-wrap" style="height: 420px; width: 100%; margin-bottom: 2em;">
	  <iframe
		allow="geolocation; microphone; camera; midi; encrypted-media"
		src="https://glitch.com/embed/#!/embed/atributos-y-metadatos-paso-1?path=index.html&previewSize=33"
		alt="atributos-y-metadatos-paso-1 on Glitch"
		style="height: 100%; width: 100%; border: 0;">
	  </iframe>
	</div>

Notar que subí la imagen al proyecto, haciendo click la carpeta "assets" y
seleccionando "Add asset" y despues "Upload", tambien podes arrastrar la imagen
y soltarla dentro de la carpeta assets, la dirección de la imagen es
"assets/cube.jpg" porque esta en la misma pagina que el archivo HTML, sino
seria una direccion web completa.

.. [1] “DOF Example” by Owen Byrne is licensed under CC BY 2.0
