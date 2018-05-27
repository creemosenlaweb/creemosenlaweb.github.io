Si son datos, hay tabla
=======================

Como presentamos muchos datos en una pagina? con tablas!

Partes de una tabla
-------------------

Tabla de datos
..............

Vamos de menos a mas, la tabla mas simple que podemos tener solo tiene una
parte, el cuerpo de la tabla. Es decir, los datos.

Los datos en una tabla son cero o mas filas, cada fila puede tener cero o mas
columnas:

Osea que las partes de una tabla por ahora son:

* Tabla

  + Cuerpo (1)

    - Filas (0 o mas)

      * Columnas (0 o mas)

Si alguna vez usaste una planilla de cálculos, las tablas son una forma de
presentar información que presentarías en una planilla de cálculos.

Vamos a ver una tabla de ejemplo:

.. code-block:: html

    <table>
      <tr>
        <td>Arenita</td>
        <td>Ardilla</td>
        <td>Marron</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>Esponja</td>
        <td>Amarillo</td>
      </tr>
      <tr>
        <td>Patricio</td>
        <td>Estrella</td>
        <td>Rosa</td>
      </tr>
    </table>

Que se ve algo así:

.. raw:: html

    <table class="table">
      <tr>
        <td>Arenita</td>
        <td>Ardilla</td>
        <td>Marron</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>Esponja</td>
        <td>Amarillo</td>
      </tr>
      <tr>
        <td>Patricio</td>
        <td>Estrella</td>
        <td>Rosa</td>
      </tr>
    </table>

Como vemos en el código, el tag `table` indica que vamos a usar una tabla, si
solo vamos a mostrar datos el tag que indica el cuerpo `tbody` (table body,
cuerpo de tabla) es opcional, luego tenemos el tag que indica una fila `tr`
(table row: fila de tabla), dentro del tenemos el tag para una celda de datos
`td` (table cell data: celda de datos de tabla), uno por cada celda.

Cabecera
........

En la tabla anterior, como sabemos que significa cada columna? para eso
necesitamos una cabecera, esto se hace con el tag `thead` (table head, cabecera
de tabla)

* Tabla

  + Cabecera (0 o 1)

    - Filas (1 o mas)

      * Columnas (1 o mas)

  + Cuerpo (1)

    - Filas (0 o mas)

      * Columnas (0 o mas)

.. code-block:: html

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>
    </table>

.. raw:: html

    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>
    </table>

Como podemos ver, en este caso tenemos que indicar explicitamente el cuerpo
de la tabla con el tag `tbody` (table body, cuerpo de tabla).

Lo hacemos para poder tambien indicar la cabecera con el tag `thead` (table
head, cabecera de tabla).

El cuerpo ya lo vimos antes, la cabecera es muy similar, solo que en lugar de
usar el tag `td` para las columnas usamos el tag `th` (table cell header, celda
de cabecera de tabla)

Pie de Tabla
............

Algunas tablas que presentan datos suelen tener al final una fila de
sumarización que presenta valores resumidos para toda la columna.

Obviamente se puede usar para otras cosas, pero normalmente se usa para eso.

Vamos a ver un ejemplo que no aplica mucho a nuestro caso porque no estamos
presentando valores que se puedan sumarizar.

* Tabla

  + Cabecera (0 o 1)

    - Filas (1 o mas)

      * Columnas (1 o mas)

  + Cuerpo (1)

    - Filas (0 o mas)

      * Columnas (0 o mas)

  + Pie (0 o 1)

    - Filas (1 o mas)

      * Columnas (1 o mas)


.. code-block:: html

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

.. raw:: html

    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>


Como podemos ver, el pie de tabla se define con el tag `tfoot` (table footer,
pie de tabla), dentro usamos los mismos tags que en el cuerpo.

Un poco de estilo
-----------------

Los ejemplos que vimos hasta ahora tienen un aspecto simple pero agradable,
eso es porque estaba usando una clase de bootstrap para darle un aspecto
aceptable, la clase que estaba usando es la clase `table`.


.. code-block:: html

    <table class="table">

En esta sección vamos a explorar otras clases que podemos aplicarle a una
tabla.

Con bordes
..........

.. code-block:: html

    <table class="table table-bordered">

.. raw:: html

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>


Colores invertidos
..................

.. code-block:: html

    <table class="table table-dark">

.. raw:: html

    <table class="table table-dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

Cabecera invertida
..................

.. code-block:: html

    <table class="table">
      <thead class="thead-dark">

.. raw:: html

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

Filas "rayadas como una zebra"
..............................

Cambiar el color de filas adyacentes es útil para que el usuario pueda seguir
las columnas de una fila sin perderse o empezar a leer celdas de las filas
cercanas sin darse cuenta.

.. code-block:: html

    <table class="table table-striped">

.. raw:: html

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

Énfasis en fila con foco del mouse
..................................

Resaltar la fila que tiene el foco del mouse es útil para que el usuario pueda
seguir las columnas de una fila sin perderse o empezar a leer celdas de las
filas cercanas sin darse cuenta.

.. code-block:: html

    <table class="table table-hover">

.. raw:: html

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

Compacta
........

Una tabla con menos espacios, si es necesario mostrar mas datos.

.. code-block:: html

    <table class="table table-sm">

.. raw:: html

    <table class="table table-sm">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

Resaltando filas
................

Si necesitamos indicar algo en una fila lo podemos hacer agregando una clase.

.. code-block:: html

        <tr class="table-active">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-primary">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-secondary">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
        <tr class="table-success">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-danger">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-warning">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
        <tr class="table-info">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-light">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-dark">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>

.. raw:: html

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr class="table-active">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-primary">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-secondary">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
        <tr class="table-success">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-danger">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-warning">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
        <tr class="table-info">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-light">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-dark">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

Todo junto!
...........

.. code-block:: html

    <table class="table table-bordered table-striped table-sm table-dark table-hover">
      <thead class="thead-light">
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr class="table-active">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-primary">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-secondary">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
        <tr class="table-success">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-danger">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-warning">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
        <tr class="table-info">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-light">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-dark">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

.. raw:: html

    <table class="table table-bordered table-striped table-sm table-dark table-hover">
      <thead class="thead-light">
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr class="table-active">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-primary">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-secondary">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
        <tr class="table-success">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-danger">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-warning">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
        <tr class="table-info">
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr class="table-light">
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr class="table-dark">
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

Subtítulo
---------

Es útil indicar que datos se están mostrando en la tabla, para eso hay un tag
llamado `caption` que puede ser usado para tal fin.

.. code-block:: html

    <table class="table">
      <caption>Personajes de Bob Esponja</caption>

      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

.. raw:: html

    <table class="table">
      <caption>Personajes de Bob Esponja</caption>

      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arenita</td>
          <td>Ardilla</td>
          <td>Marron</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Esponja</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Patricio</td>
          <td>Estrella</td>
          <td>Rosa</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Color</td>
        </tr>
      </tfoot>
    </table>

Celdas vacías y celdas unidas
-----------------------------

En algunos casos podemos querer dejar algunas filas con menos celdas que otras,
en otros casos queremos que una celda ocupe mas de una columna.

Usar menos celdas es fácil, simplemente no las escribimos.

.. code-block:: html

    <table class="table table-bordered">
      <tbody>
        <tr>
          <td>1.1</td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>2.2</td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>3.2</td>
          <td>3.3</td>
        </tr>
      </tbody>
    </table>

.. raw:: html

    <table class="table table-bordered">
      <tbody>
        <tr>
          <td>1.1</td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>2.2</td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>3.2</td>
          <td>3.3</td>
        </tr>
      </tbody>
    </table>

Si queremos que una celda ocupe mas de una columna, tenemos que usar el
atributo `colspan` (extensión de columnas) e indicarle cuantas columnas
queremos que ocupe, por defecto cada celda tiene un `colspan` de 1.

.. code-block:: html

    <table class="table table-bordered">
      <tbody>
        <tr>
          <td colspan=3>1.1</td>
        </tr>
        <tr>
          <td>2.1</td>
          <td colspan=2>2.2</td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>3.2</td>
          <td>3.3</td>
        </tr>
      </tbody>
    </table>

.. raw:: html

    <table class="table table-bordered">
      <tbody>
        <tr>
          <td colspan=3>1.1</td>
        </tr>
        <tr>
          <td>2.1</td>
          <td colspan=2>2.2</td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>3.2</td>
          <td>3.3</td>
        </tr>
      </tbody>
    </table>


Esto lo podemos usar en la cabecera para crear cabeceras multinivel:

.. code-block:: html

    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th colspan=3>Lugar</th>
          <th rowspan=2 style="vertical-align: middle">Población</th>
        </tr>
        <tr>
          <th>Continente</th>
          <th>Pais</th>
          <th>Ciudad</th>
        </tr>
      </thead>

     <tbody>
       <tr>
         <td>America</td>
         <td>México</td>
         <td>Ciudad de México</td>
         <td>8 918 653</td>
       </tr>
       <tr>
         <td>America</td>
         <td>Argentina</td>
         <td>Buenos Aires</td>
         <td>2 890 151</td>
       </tr>
       <tr>
         <td>America</td>
         <td>Brasil</td>
         <td>Brasilia</td>
         <td>2 789 761</td>
       </tr>
     </tbody>
   </table>

.. raw:: html

    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th colspan=3>Lugar</th>
          <th rowspan=2 style="vertical-align: middle">Población</th>
        </tr>
        <tr>
          <th>Continente</th>
          <th>Pais</th>
          <th>Ciudad</th>
        </tr>
      </thead>

     <tbody>
       <tr>
         <td>America</td>
         <td>México</td>
         <td>Ciudad de México</td>
         <td>8 918 653</td>
       </tr>
       <tr>
         <td>America</td>
         <td>Argentina</td>
         <td>Buenos Aires</td>
         <td>2 890 151</td>
       </tr>
       <tr>
         <td>America</td>
         <td>Brasil</td>
         <td>Brasilia</td>
         <td>2 789 761</td>
       </tr>
     </tbody>
   </table>

Quizás notaste que use rowspan (extensión de fila) para "unir" las dos celdas de población verticalmente, también use el css vertical-align (alineación vertical) para que el texto este en el medio verticalmente.
