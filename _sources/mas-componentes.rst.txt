Mas componentes
===============

Ahora que sabemos usar las clases de layout de bootstrap exploremos algunos
componentes mas.

.. raw:: html

    <style>
        h2, h3, h4{margin-top: 1em}
        br{margin: 1em}
    </style>

Breadcrumbs (migas de pan)
--------------------------


.. code-block:: html

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Principal</li>
      </ol>
    </nav>

.. raw:: html

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Principal</li>
      </ol>
    </nav>

.. code-block:: html

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Principal</a></li>
        <li class="breadcrumb-item active" aria-current="page">Articulos</li>
      </ol>
    </nav>

.. raw:: html

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Principal</a></li>
        <li class="breadcrumb-item active" aria-current="page">Articulos</li>
      </ol>
    </nav>

.. code-block:: html

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Principal</a></li>
        <li class="breadcrumb-item"><a href="#">Articulos</a></li>
        <li class="breadcrumb-item active" aria-current="page">Articulo I</li>
      </ol>
    </nav>

.. raw:: html

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Principal</a></li>
        <li class="breadcrumb-item"><a href="#">Articulos</a></li>
        <li class="breadcrumb-item active" aria-current="page">Articulo I</li>
      </ol>
    </nav>

Botones
-------

Estandar
........

.. code-block:: html

    <button type="button" class="btn btn-primary">Primario</button>
    <button type="button" class="btn btn-secondary">Secundario</button>
    <button type="button" class="btn btn-success">Exito</button>
    <button type="button" class="btn btn-danger">Peligro</button>
    <button type="button" class="btn btn-warning">Advertencia</button>
    <button type="button" class="btn btn-info">Informacion</button>
    <button type="button" class="btn btn-light">Claro</button>
    <button type="button" class="btn btn-dark">Oscuro</button>

    <button type="button" class="btn btn-link">Link</button>

.. raw:: html

    <button type="button" class="btn btn-primary">Primario</button>
    <button type="button" class="btn btn-secondary">Secundario</button>
    <button type="button" class="btn btn-success">Exito</button>
    <button type="button" class="btn btn-danger">Peligro</button>
    <button type="button" class="btn btn-warning">Advertencia</button>
    <button type="button" class="btn btn-info">Informacion</button>
    <button type="button" class="btn btn-light">Claro</button>
    <button type="button" class="btn btn-dark">Oscuro</button>

    <button type="button" class="btn btn-link">Link</button>

Bordes
......

.. code-block:: html

    <button type="button" class="btn btn-outline-primary">Primario</button>
    <button type="button" class="btn btn-outline-secondary">Secundario</button>
    <button type="button" class="btn btn-outline-success">Exito</button>
    <button type="button" class="btn btn-outline-danger">Peligro</button>
    <button type="button" class="btn btn-outline-warning">Advertencia</button>
    <button type="button" class="btn btn-outline-info">Informacion</button>
    <button type="button" class="btn btn-outline-light">Claro</button>
    <button type="button" class="btn btn-outline-dark">Oscuro</button>

.. raw:: html

    <button type="button" class="btn btn-outline-primary">Primario</button>
    <button type="button" class="btn btn-outline-secondary">Secundario</button>
    <button type="button" class="btn btn-outline-success">Exito</button>
    <button type="button" class="btn btn-outline-danger">Peligro</button>
    <button type="button" class="btn btn-outline-warning">Advertencia</button>
    <button type="button" class="btn btn-outline-info">Informacion</button>
    <button type="button" class="btn btn-outline-light">Claro</button>
    <button type="button" class="btn btn-outline-dark">Oscuro</button>

Tamaños
.......

.. code-block:: html

    <button type="button" class="btn btn-primary btn-lg">Grande</button>
    <button type="button" class="btn btn-secondary btn-lg">Grande</button>

    <button type="button" class="btn btn-primary btn-sm">Pequeño</button>
    <button type="button" class="btn btn-secondary btn-sm">Pequeño</button>

.. raw:: html

    <button type="button" class="btn btn-primary btn-lg">Grande</button>
    <button type="button" class="btn btn-secondary btn-lg">Grande</button>

    <button type="button" class="btn btn-primary btn-sm">Pequeño</button>
    <button type="button" class="btn btn-secondary btn-sm">Pequeño</button>

Estados
.......

Activo
::::::

.. code-block:: html

    <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Link Primario</a>
    <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link Secundario</a>

.. raw:: html

    <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Link Primario</a>
    <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link Secundario</a>

Inactivo
::::::::

.. code-block:: html

    <button type="button" class="btn btn-lg btn-primary" disabled>Primario</button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>Secundario</button>

.. raw:: html

    <button type="button" class="btn btn-lg btn-primary" disabled>Primario</button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>Secundario</button>

Grupos de botones
-----------------

.. code-block:: html

    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary">Izquierda</button>
      <button type="button" class="btn btn-secondary">Medio</button>
      <button type="button" class="btn btn-secondary">Derecha</button>
    </div>

.. raw:: html

    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary">Izquierda</button>
      <button type="button" class="btn btn-secondary">Medio</button>
      <button type="button" class="btn btn-secondary">Derecha</button>
    </div>

Grupos de grupos de botones
---------------------------

.. code-block:: html

    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-secondary">2</button>
        <button type="button" class="btn btn-secondary">3</button>
        <button type="button" class="btn btn-secondary">4</button>
      </div>
      <div class="btn-group mr-2" role="group" aria-label="Second group">
        <button type="button" class="btn btn-secondary">5</button>
        <button type="button" class="btn btn-secondary">6</button>
        <button type="button" class="btn btn-secondary">7</button>
      </div>
      <div class="btn-group" role="group" aria-label="Third group">
        <button type="button" class="btn btn-secondary">8</button>
      </div>
    </div>

.. raw:: html

    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-secondary">2</button>
        <button type="button" class="btn btn-secondary">3</button>
        <button type="button" class="btn btn-secondary">4</button>
      </div>
      <div class="btn-group mr-2" role="group" aria-label="Second group">
        <button type="button" class="btn btn-secondary">5</button>
        <button type="button" class="btn btn-secondary">6</button>
        <button type="button" class="btn btn-secondary">7</button>
      </div>
      <div class="btn-group" role="group" aria-label="Third group">
        <button type="button" class="btn btn-secondary">8</button>
      </div>
    </div>

Tamaños
.......

.. code-block:: html

    <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
      <button type="button" class="btn btn-secondary">Izquierda</button>
      <button type="button" class="btn btn-secondary">Medio</button>
      <button type="button" class="btn btn-secondary">Derecha</button>
    </div>

.. raw:: html

    <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
      <button type="button" class="btn btn-secondary">Izquierda</button>
      <button type="button" class="btn btn-secondary">Medio</button>
      <button type="button" class="btn btn-secondary">Derecha</button>
    </div>

.. code-block:: html

    <div class="btn-group" role="group" aria-label="Default button group">
      <button type="button" class="btn btn-secondary">Izquierda</button>
      <button type="button" class="btn btn-secondary">Medio</button>
      <button type="button" class="btn btn-secondary">Derecha</button>
    </div>

.. raw:: html

    <div class="btn-group" role="group" aria-label="Default button group">
      <button type="button" class="btn btn-secondary">Izquierda</button>
      <button type="button" class="btn btn-secondary">Medio</button>
      <button type="button" class="btn btn-secondary">Derecha</button>
    </div>

.. code-block:: html

    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
      <button type="button" class="btn btn-secondary">Izquierda</button>
      <button type="button" class="btn btn-secondary">Medio</button>
      <button type="button" class="btn btn-secondary">Derecha</button>
    </div>

.. raw:: html

    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
      <button type="button" class="btn btn-secondary">Izquierda</button>
      <button type="button" class="btn btn-secondary">Medio</button>
      <button type="button" class="btn btn-secondary">Derecha</button>
    </div>

Listas
------

.. code-block:: html

    <ul class="list-group">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>

.. raw:: html

    <ul class="list-group">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>

Elemento activo
...............

.. code-block:: html

    <ul class="list-group">
      <li class="list-group-item active">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>

.. raw:: html

    <ul class="list-group">
      <li class="list-group-item active">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>

Elemento inactivo
.................

.. code-block:: html

    <ul class="list-group">
      <li class="list-group-item disabled">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>

.. raw:: html

    <ul class="list-group">
      <li class="list-group-item disabled">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>

Links
.....

.. code-block:: html

    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">
        Cras justo odio
      </a>
      <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
      <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
      <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
      <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
    </div>

.. raw:: html

    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">
        Cras justo odio
      </a>
      <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
      <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
      <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
      <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
    </div>

Botones
.......

.. code-block:: html

    <div class="list-group">
      <button type="button" class="list-group-item list-group-item-action active">
        Cras justo odio
      </button>
      <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
      <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
      <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
      <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
    </div>

.. raw:: html

    <div class="list-group">
      <button type="button" class="list-group-item list-group-item-action active">
        Cras justo odio
      </button>
      <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
      <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
      <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
      <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
    </div>

Sin bordes
..........

.. code-block:: html

    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>

.. raw:: html

    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>

Clases utiles
.............

.. code-block:: html

    <ul class="list-group">
      <li class="list-group-item">Dapibus ac facilisis in</li>

      <li class="list-group-item list-group-item-primary">Primario</li>
      <li class="list-group-item list-group-item-secondary">Secundario</li>
      <li class="list-group-item list-group-item-success">Exito</li>
      <li class="list-group-item list-group-item-danger">Peligro</li>
      <li class="list-group-item list-group-item-warning">Advertencia</li>
      <li class="list-group-item list-group-item-info">Informacion</li>
      <li class="list-group-item list-group-item-light">Claro</li>
      <li class="list-group-item list-group-item-dark">Oscuro</li>
    </ul>

.. raw:: html

    <ul class="list-group">
      <li class="list-group-item">Dapibus ac facilisis in</li>

      <li class="list-group-item list-group-item-primary">Primario</li>
      <li class="list-group-item list-group-item-secondary">Secundario</li>
      <li class="list-group-item list-group-item-success">Exito</li>
      <li class="list-group-item list-group-item-danger">Peligro</li>
      <li class="list-group-item list-group-item-warning">Advertencia</li>
      <li class="list-group-item list-group-item-info">Informacion</li>
      <li class="list-group-item list-group-item-light">Claro</li>
      <li class="list-group-item list-group-item-dark">Oscuro</li>
    </ul>

.. code-block:: html

    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

      <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Primario</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Secundario</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-success">Exito</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Peligro</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Advertencia</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-info">Informacion</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-light">Claro</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Oscuro</a>
    </div>

.. raw:: html

    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

      <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Primario</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Secundario</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-success">Exito</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Peligro</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Advertencia</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-info">Informacion</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-light">Claro</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Oscuro</a>
    </div>

Con badges
..........

.. code-block:: html

    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <span class="badge badge-primary badge-pill">14</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <span class="badge badge-primary badge-pill">2</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
        <span class="badge badge-primary badge-pill">1</span>
      </li>
    </ul>

.. raw:: html

    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <span class="badge badge-primary badge-pill">14</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <span class="badge badge-primary badge-pill">2</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
        <span class="badge badge-primary badge-pill">1</span>
      </li>
    </ul>

Contenido propio
................

.. code-block:: html

    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Cabecera de item</h5>
            <small>hace 3 dias</small>
          </div>
          <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small>Donec id elit non mi porta.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Cabecera de item</h5>
          <small class="text-muted">hace 3 dias</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Cabecera de item</h5>
          <small class="text-muted">hace 3 dias</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
    </div>

.. raw:: html

    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Cabecera de item</h5>
            <small>hace 3 dias</small>
          </div>
          <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small>Donec id elit non mi porta.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Cabecera de item</h5>
          <small class="text-muted">hace 3 dias</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Cabecera de item</h5>
          <small class="text-muted">hace 3 dias</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
    </div>

Cartas
------

.. code-block:: html

    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo de imagen">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido principal.</p>
        <a href="#" class="btn btn-primary">Ir a algun lado</a>
      </div>
    </div>

.. raw:: html

    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo de imagen">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido principal.</p>
        <a href="#" class="btn btn-primary">Ir a algun lado</a>
      </div>
    </div>

.. code-block:: html

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <h6 class="card-subtitle mb-2 text-muted">Subtitulo</h6>
        <p class="card-text">Contenido principal</p>
        <a href="#" class="card-link">Link</a>
        <a href="#" class="card-link">Otro link</a>
      </div>
    </div>

.. raw:: html

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <h6 class="card-subtitle mb-2 text-muted">Subtitulo</h6>
        <p class="card-text">Contenido principal</p>
        <a href="#" class="card-link">Link</a>
        <a href="#" class="card-link">Otro link</a>
      </div>
    </div>

Carta con lista
...............

.. code-block:: html

    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>

.. raw:: html

    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>

.. code-block:: html

    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Cabecera
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>

.. raw:: html

    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Cabecera
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>

Cambalache
..........

.. code-block:: html

    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Text alternativo">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido principal</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Link</a>
        <a href="#" class="card-link">Otro link</a>
      </div>
    </div>

.. raw:: html

    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Text alternativo">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido principal</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Link</a>
        <a href="#" class="card-link">Otro link</a>
      </div>
    </div>

Cabecera y pie
..............

.. code-block:: html

    <div class="card text-center" style="width: 18rem">
      <div class="card-header">
        Cabecera
      </div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
      <div class="card-footer text-muted">
        Pie
      </div>
    </div>

.. raw:: html

    <div class="card text-center" style="width: 18rem">
      <div class="card-header">
        Cabecera
      </div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
      <div class="card-footer text-muted">
        Pie
      </div>
    </div>

Alineación de texto
...................

.. code-block:: html

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
    </div>

.. raw:: html

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
    </div>

.. code-block:: html

    <div class="card text-center" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
    </div>

.. raw:: html

    <div class="card text-center" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
    </div>

.. code-block:: html

    <div class="card text-right" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
    </div>

.. raw:: html

    <div class="card text-right" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
    </div>

Navegación
..........

.. code-block:: html

    <div class="card text-center" style="width: 18rem">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Activo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Inactivo</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
    </div>

.. raw:: html

    <div class="card text-center" style="width: 18rem">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Activo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Inactivo</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
    </div>

.. code-block:: html

    <div class="card text-center" style="width: 18rem">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">Activo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Inactivo</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
    </div>

.. raw:: html

    <div class="card text-center" style="width: 18rem">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">Activo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Inactivo</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
        <a href="#" class="btn btn-primary">Botón</a>
      </div>
    </div>

Estilos de cartas
.................

.. code-block:: html

    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

.. raw:: html

    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

Estilos de cartas (bordes)
..........................

.. code-block:: html

    <div class="card border-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-secondary mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-success mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-danger mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-warning mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-info mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-dark mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>


.. raw:: html

    <div class="card border-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-secondary mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-success mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-danger mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-warning mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-info mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

    <br>

    <div class="card border-dark mb-3" style="max-width: 18rem;">
      <div class="card-header">Cabecera</div>
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Cuerpo de carta</p>
      </div>
    </div>

Grupo de cartas
---------------

.. code-block:: html

    <div class="card-group">
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
    </div>

.. raw:: html

    <div class="card-group">
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
    </div>

Card deck
.........

.. code-block:: html

    <div class="card-deck">
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
    </div>

.. raw:: html

    <div class="card-deck">
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../galleries/cew/500-500-1.jpeg" alt="Texto alternativo">
        <div class="card-body">
          <h5 class="card-title">Título</h5>
          <p class="card-text">Contenido.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pie</small>
        </div>
      </div>
    </div>
