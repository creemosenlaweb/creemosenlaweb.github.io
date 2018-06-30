Dibujando Formas en 2D
======================

Hasta ahora la mayoría del contenido que creamos consiste principalmente en
texto y "cajas", es decir, cuadrados dentro de cuadrados.

Pero que pasa si quiero una linea, un triangulo o un circulo en mi pagina?

Para eso existe un set de tags llamado SVG que nos permite crear dibujos
"vectoriales", es decir que su contenido son las formas en si y se ven bien en
cualquier resolución de pantalla, no como las imágenes hechas de pixeles, donde
si la imagen es chica y la agrandamos empezamos a perder calidad.

Empecemos con un ejemplo simple:

.. code-block:: html

    <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>

.. raw:: html

    <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>

Los tags son nuevos y específicos de SVG, es decir, solo los podemos usar dentro
de un tag raíz `svg <https://developer.mozilla.org/es/docs/Web/SVG/Element/svg>`_,
lo bueno es que son bastante descriptivos.

En el ejemplo arriba decimos que queremos dibujar en svg, dentro de un cuadro
de 100x100.

El dibujo consiste de un circulo (`circle <https://developer.mozilla.org/es/docs/Web/SVG/Element/circle>`_ en ingles) con centro x=50 y centro y=50, con un radio de
40, borde de 3 negro y relleno rojo.

Veamos algunos otros ejemplos:

.. code-block:: html

    <svg width="400" height="180">
      <rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:blue;stroke:pink;stroke-width:5;opacity:0.5" />
    </svg>

.. raw:: html

    <svg width="400" height="180">
      <rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:blue;stroke:pink;stroke-width:5;opacity:0.5" />
    </svg>

Acá vemos un rectángulo (`rect <https://developer.mozilla.org/es/docs/Web/SVG/Element/rect>`_) posicionado en x=50, y=20, con ancho de 150 y alto de 150 y bordes
redondeados.

Como veras el resto de las propiedades se las define con el atributo `style` al
igual que en HTML, algunos atributos son nuevos pero el resto sigue aplicando.

Algunos mas:

.. code-block:: html

    <svg height="250" width="500">
        <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:purple" />
        <ellipse cx="220" cy="70" rx="190" ry="20" style="fill:lime" />
        <ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow" />

        <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />

        <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
        <polyline points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" style="fill:white;stroke:red;stroke-width:4" />

        <text x="0" y="15" fill="red" transform="rotate(30 20,40)">Texto en SVG</text>
    </svg>

.. raw:: html

    <svg height="250" width="500">
        <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:purple" />
        <ellipse cx="220" cy="70" rx="190" ry="20" style="fill:lime" />
        <ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow" />

        <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />

        <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
        <polyline points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" style="fill:white;stroke:red;stroke-width:4" />

        <text x="0" y="15" fill="red" transform="rotate(30 20,40)">Texto en SVG</text>
    </svg>

Pero lo mejor que tiene SVG es que hay editores libres y gratuitos que nos
permiten dibujar como cualquier editor de imágenes y luego ver el código SVG
generado.

Este editor se llama `Inkscape <https://inkscape.org/es/>`_ y lo podes
descargar desde la pagina.

Luego de instalarlo se ve algo así:

.. figure:: ../galleries/cew/10/inkscape.png
    :width: 100%
    :align: center

Abriendo el editor XML de Inkscape podemos ver como se crea cada forma, que
tags y atributos se usan.

.. figure:: ../galleries/cew/10/inkscape-xml.gif
    :align: center

Si usamos un editor para crear un SVG que queremos insertar en nuestra pagina
tenemos dos opciones:

* Guardar el dibujo como un archivo SVG y copiar el contenido del archivo abriendolo con un editor de texto y pegandolo en nuestra pagina
* Insertandolo como una imagen externa

Ya vimos como insertar SVG directamente en el HTML, ahora veamos como incluirlo
como una imagen externa:

.. code-block:: html

    <img src="../galleries/cew/10/example.svg" width="475" height="336">

.. raw:: html

    <img src="../galleries/cew/10/example.svg" width="475" height="336">

`Fuente <https://commons.wikimedia.org/wiki/File:%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80_%D1%87%D0%B5%D1%80%D1%82%D0%B5%D0%B6%D0%B0_%D0%B2_SVG_%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B5.svg>`_

Una ultima observación sobre SVG, si bien son parecidos a HTML, SVG es mas
estricto en cuanto a los nombres y atributos de tags permitidos y con la
necesidad de "cerrar" todos los tags, si cometemos un error en HTML, el
navegador va a hacer lo mejor que pueda para presentar el contenido igual, en
SVG muy probablemente no se dibuje nada.
