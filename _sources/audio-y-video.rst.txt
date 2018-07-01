Audio y Video
=============

Incluir un video o audio seria algo tan simple como un tag y la ubicación del
archivo.

Por cuestiones históricas hay muchos formatos de audio y video y las
organizaciones que desarrollan los navegadores mas usados (Microsoft: Internet
Explorer 11 y Microsoft Edge, Apple: Safari, Google: Chrome, Mozilla: Firefox)
tienen distintos objetivos e intereses que hacen que soporten algunos formatos
y otros no.

Video
-----

Empecemos con un ejemplo que según esta `tabla de compatibilidad para el formato webm <https://caniuse.com/#feat=webm>`_, no va a andar en IE 11 y Safari.

.. code-block:: html

    <video src="/cew_files/12/example.webm" type="video/webm" controls></video>

.. raw:: html

    <video src="/cew_files/12/example.webm" type="video/webm" controls></video>

Viendo la `tabla de compatibilidad para el formato mp4 <https://caniuse.com/#feat=mpeg4>`_ vemos que podemos hacerlo funcionar en mas versiones pero no necesariamente todas.

.. code-block:: html

    <video src="/cew_files/12/example.mp4" type="video/mp4" controls></video>

.. raw:: html

    <video src="/cew_files/12/example.mp4" type="video/mp4" controls></video>

Que pasa si queremos hacerlo funcionar en la mayor cantidad de plataformas
posibles priorizando formatos mas livianos y con mejor calidad?

Podemos especificar los videos en orden de preferencia, el navegador va a
intentar en orden del primero al ultimo cargarlos, cuando encuentre uno que
sirve lo va a usar.

.. code-block:: html

    <video controls>
        <source src="/cew_files/12/example.webm" type="video/webm">
        <source src="/cew_files/12/example.mp4" type="video/mp4">
    </video>

.. raw:: html

    <video controls>
        <source src="/cew_files/12/example.webm" type="video/webm">
        <source src="/cew_files/12/example.mp4" type="video/mp4">
    </video>

Otro formato que suele usarse es ogv, acá la `tabla de compatibilidad del formato ogv <https://caniuse.com/#feat=ogv>`_.

Vista Previa
::::::::::::

Cuando la pagina carga y el video esta en pausa el navegador va a elegir una
vista previa automáticamente, si queremos tener mas control sobre la imagen
mostrada podemos especificarsela explícitamente con el atributo `poster`:

.. code-block:: html

    <video controls poster="/cew_files/12/poster.png">
        <source src="/cew_files/12/example.webm" type="video/webm">
        <source src="/cew_files/12/example.mp4" type="video/mp4">
    </video>

.. raw:: html

    <video controls poster="/cew_files/12/poster.png">
        <source src="/cew_files/12/example.webm" type="video/webm">
        <source src="/cew_files/12/example.mp4" type="video/mp4">
    </video>

Subtítulos
::::::::::

Ya sea por cuestiones de accesibilidad o para traducir o explicar el contenido
del video, podemos agregar subtítulos a un video usando el tag `track`.

El formato del archivo es bastante simple::

    WEBVTT

    00:01.000 --> 00:04.000
    Primer mensaje, del segundo 1 al 4

    00:05.000 --> 00:08.000
    Segundo mensaje, del segundo 5 al 8

    ...

Empieza con `WEBVTT` en la primera linea, un salto de linea y luego
tantas veces como sea necesario::

    [Tiempo comienzo] --> [Tiempo fin]
    Texto del subtítulo

Podemos tener mas de un tag track para agregar subtitulos en distintos idiomas
y marcar uno por defecto, aca un ejemplo con subtítulos en Español:

.. code-block:: html

    <video controls poster="/cew_files/12/poster.png">
        <source src="/cew_files/12/example.webm" type="video/webm">
        <source src="/cew_files/12/example.mp4" type="video/mp4">

        <track src="/cew_files/12/subtitulo.vtt"
            label="Subtitulos en Español"
            kind="captions"
            srclang="es"
            default>

    </video>

.. raw:: html

    <video controls poster="/cew_files/12/poster.png">
        <source src="/cew_files/12/example.webm" type="video/webm">
        <source src="/cew_files/12/example.mp4" type="video/mp4">

        <track src="/cew_files/12/subtitulo.vtt"
            label="Subtitulos en Español"
            kind="captions"
            srclang="es"
            default>
    </video>

Fragmentos
::::::::::

Que pasa si tenemos un video bastante largo pero solo queremos mostrar un fragmento?

Para eso podemos especificarle el principio y/o final del fragmento que nos
interesa.

Notar que al momento de escribir esto es una característica bastante nueva, (ver `tabla de compatibilidad de media fragments <https://caniuse.com/#feat=media-fragments>`_ al momento de leer esto para
ver si sigue siendo nueva y poco soportada).

Podemos indicarle el comienzo (segundo 10) y que reproduzca hasta el final::

    t=10

Indicar solo el final, que reproduzca del principio y reproduzca hasta el segundo 20::

    t=,20

O el principio y el final, que arranque en el segundo 10 y reproduzca hasta el segundo 20::

    t=10,20

Veamoslo en nuestro video, que reproduzca desde el segundo 3 al 8 (puede que
no funcione en tu navegador).

.. code-block:: html

    <video src="/cew_files/12/example.mp4#t=3,8" type="video/mp4" controls></video>

.. raw:: html

    <video src="/cew_files/12/example.mp4#t=3,8" type="video/mp4" controls></video>


Embebiendo
::::::::::

Y que pasa si quiero poner en mi pagina un video que esta en una pagina de
videos como youtube?

Para eso podemos *embeber* (embed en ingles) el contenido en nuestra pagina.

Si miras el video de los ejemplos de arriba, podrás ver que si vamos a share y
luego seleccionamos embed, youtube nos da un HTML que podemos incluir en
nuestra pagina para incluir el video directamente desde youtube.

.. code-block:: html

    <iframe width="560" height="315"
        src="https://www.youtube.com/embed/XM3eaJPB2Cc"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen></iframe>

.. raw:: html

    <iframe width="560" height="315"
        src="https://www.youtube.com/embed/XM3eaJPB2Cc"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen></iframe>

Podemos ver un video de youtube embebido que muestra un video de como embeber
un video de youtube :)

El dialogo en youtube nos permite configurar algunos parametros que cambian el
HTML que nos muestra, en el resultado de arriba vemos que podemos modificar el
ancho, alto, si tiene borde, si hace auto play y si permite ponerlo en pantalla
completa.

Audio
-----

Como con video, hay muchos formatos de audio y cada navegador soporta un subset
distinto, dado que hay mas formato de audio en uso listo las tablas de
compatibilidad primero:

* `wav <https://caniuse.com/#feat=wav>`_
* `mp3 <https://caniuse.com/#feat=mp3>`_
* `ogg <https://caniuse.com/#feat=ogg-vorbis>`_
* `aac <https://caniuse.com/#feat=aac>`_
* `opus <https://caniuse.com/#feat=opus>`_
* `flac <https://caniuse.com/#feat=flac>`_

La canción que vamos a usar de ejemplo es `Rough Patches de Solstar <https://www.tribeofnoise.com/Solstar>`_.

Empezamos con un audio en formato ogg:

.. code-block:: html

    <audio controls src="/cew_files/12/example.ogg"></audio>

.. raw:: html

    <audio controls src="/cew_files/12/example.ogg"></audio>

Como veras el HTML es bastante similar al tag video.

Si no funciona o si tenes un mp3:

.. code-block:: html

    <audio controls src="/cew_files/12/example.mp3"></audio>

.. raw:: html

    <audio controls src="/cew_files/12/example.mp3"></audio>

Pero si viste las tablas de compatibilidad y queres soportar la mayor cantidad
de navegadores, al igual que con el tag video se puede incluir mas de un
archivo.

.. code-block:: html

    <audio controls>
        <source src="/cew_files/12/example.ogg" type="audio/ogg"/>
        <source src="/cew_files/12/example.mp3" type="audio/mpeg"/>
    </audio>

.. raw:: html

    <audio controls>
        <source src="/cew_files/12/example.ogg" type="audio/ogg"/>
        <source src="/cew_files/12/example.mp3" type="audio/mpeg"/>
    </audio>

Embebiendo
::::::::::

Como con videos, hay paginas web que brindan audios y nos permiten embeberlos,
en este caso uno de los mas usados es soundcloud, al igual que en youtube, si
hacemos click en share y luego en embed, nos da un fragmento de HTML que podemos
incluir en nuestra pagina:

.. code-block:: html

    <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/72505324&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
    </iframe>

.. raw:: html

    <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/72505324&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
    </iframe>

Aca hay un video de como obtener el HTML:

.. raw:: html

    <video controls>
        <source src="/cew_files/12/embed_soundcloud.webm" type="video/webm">
        <source src="/cew_files/12/embed_soundcloud.mp4" type="video/mp4">
    </video>


