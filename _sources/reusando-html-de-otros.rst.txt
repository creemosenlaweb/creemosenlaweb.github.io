Reusando HTML (de otros)
========================

En la sección anterior vimos como reusar estilo creado por otras personas.

Como vimos, muchas paginas comparten distintos componentes y yendo un nivel
mas arriba, muchas paginas tienen incluso una estructura similar, por ejemplo
blogs, paginas principales de un diario, de un producto, o de un sitio de ventas
online.

Si bien no hay una forma simple de reusar HTML sin acudir a funcionalidades mas
avanzadas que requieran programar, existe lo que usualmente se llaman
templates (plantillas), que son paginas completas o secciones grandes de paginas para copiar
y modificar el contenido de manera de no empezar de cero.

En esta sección vamos a explorar algunos de esos templates, en este caso, los
disponibles en la pagina del proyecto bootstrap: https://getbootstrap.com/docs/4.1/examples/

Cover
-----

Probemos uno de los ejemplos llamado *Cover*, copia y pega el siguiente HTML en
un proyecto nuevo:

.. code-block:: html

	<!doctype html>
	<html lang="en">
	  <head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<title>Titulo de Pagina</title>

		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

		<link href="style.css" rel="stylesheet">
	  </head>

	  <body class="text-center">

		<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
		  <header class="masthead mb-auto">
			<div class="inner">
			  <h3 class="masthead-brand">Nombre</h3>
			  <nav class="nav nav-masthead justify-content-center">
				<a class="nav-link active" href="#">Principal</a>
				<a class="nav-link" href="#">Link 1</a>
				<a class="nav-link" href="#">Link 2</a>
			  </nav>
			</div>
		  </header>

		  <main role="main" class="inner cover">
			<h1 class="cover-heading">Título</h1>
			<p class="lead">Descripción.</p>
			<p class="lead">
			  <a href="#" class="btn btn-lg btn-secondary">Acción Principal</a>
			</p>
		  </main>

		  <footer class="mastfoot mt-auto">
			<div class="inner">
			  <p>Template "Cover" para <a href="https://getbootstrap.com/">Bootstrap</a>, por <a href="https://twitter.com/mdo">@mdo</a>.</p>
			</div>
		  </footer>
		</div>

	  </body>
	</html>


Y el siguiente CSS en el archivo style.css del proyecto:

.. code-block:: css

	/*
	* Globals
	*/

	/* Links */
	a,
	a:focus,
	a:hover {
	  color: #fff;
	}

	/* Custom default button */
	.btn-secondary,
	.btn-secondary:hover,
	.btn-secondary:focus {
	  color: #333;
	  text-shadow: none; /* Prevent inheritance from `body` */
	  background-color: #fff;
	  border: .05rem solid #fff;
	}


	/*
	* Base structure
	*/

	html,
	body {
	  height: 100%;
	  background-color: #333;
	}

	body {
	  display: -ms-flexbox;
	  display: flex;
	  color: #fff;
	  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
	  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
	}

	.cover-container {
	  max-width: 42em;
	}


	/*
	* Header
	*/
	.masthead {
	  margin-bottom: 2rem;
	}

	.masthead-brand {
	  margin-bottom: 0;
	}

	.nav-masthead .nav-link {
	  padding: .25rem 0;
	  font-weight: 700;
	  color: rgba(255, 255, 255, .5);
	  background-color: transparent;
	  border-bottom: .25rem solid transparent;
	}

	.nav-masthead .nav-link:hover,
	.nav-masthead .nav-link:focus {
	  border-bottom-color: rgba(255, 255, 255, .25);
	}

	.nav-masthead .nav-link + .nav-link {
	  margin-left: 1rem;
	}

	.nav-masthead .active {
	  color: #fff;
	  border-bottom-color: #fff;
	}

	@media (min-width: 48em) {
	  .masthead-brand {
		float: left;
	  }
	  .nav-masthead {
		float: right;
	  }
	}


	/*
	* Cover
	*/
	.cover {
	  padding: 0 1.5rem;
	}
	.cover .btn-lg {
	  padding: .75rem 1.25rem;
	  font-weight: 700;
	}


	/*
	* Footer
	*/
	.mastfoot {
	  color: rgba(255, 255, 255, .5);
	}

Debería verse algo así:

.. raw:: html

	<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
	  <iframe
		allow="geolocation; microphone; camera; midi; encrypted-media"
		src="https://glitch.com/embed/#!/embed/reusando-html--paso-1?path=index.html&previewSize=33"
		alt="reusando-html--paso-1 on Glitch"
		style="height: 100%; width: 100%; border: 0;">
	  </iframe>
	</div>

Actividades propuestas:

1. Intenta cambiar el contenido para presentar un proyecto o producto que te interese.
2. Intenta cambiarlo para que sea fondo claro con contenido oscuro.

   + Agregando estilo al final de style.css
   + Cambiando el estilo existente en style.css

Header y Footer
---------------

Otro ejemplo muestra como tener una barra de navegación en la parte superior y
un pie de pagina en la parte inferior con el contenido en el centro, copia y
pega el siguiente HTML en un proyecto thimble nuevo:

.. code-block:: html

	<!doctype html>
	<html lang="en">
	  <head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<title>Título de Pagina</title>

		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

		<link href="style.css" rel="stylesheet">
	  </head>

	  <body>

		<header>
		  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<a class="navbar-brand" href="#">Nombre</a>
		  </nav>
		</header>

		<main role="main" class="container">
		  <h1 class="mt-5">Título</h1>
		  <p class="lead">Descripción.</p>
		</main>

		<footer class="footer">
		  <div class="container">
			<span class="text-muted">Esta sección se suele llamar "footer" (pie de pagina).</span>
		  </div>
		</footer>

	  </body>
	</html>

El contenido del archivo style.css del proyecto:

.. code-block:: css

	/* Sticky footer styles
	-------------------------------------------------- */
	html {
	  position: relative;
	  min-height: 100%;
	}
	body {
	  /* Margin bottom by footer height */
	  margin-bottom: 60px;
	}
	.footer {
	  position: absolute;
	  bottom: 0;
	  width: 100%;
	  /* Set the fixed height of the footer here */
	  height: 60px;
	  line-height: 60px; /* Vertically center the text there */
	  background-color: #f5f5f5;
	}


	/* Custom page CSS
	-------------------------------------------------- */
	/* Not required for template or sticky footer method. */

	body > .container {
	  padding: 60px 15px 0;
	}

	.footer > .container {
	  padding-right: 15px;
	  padding-left: 15px;
	}

Debería verse algo así:

.. raw:: html

	<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
	  <iframe
		allow="geolocation; microphone; camera; midi; encrypted-media"
		src="https://glitch.com/embed/#!/embed/reusando-html--paso-2?path=index.html&previewSize=33"
		alt="reusando-html--paso-2 on Glitch"
		style="height: 100%; width: 100%; border: 0;">
	  </iframe>
	</div>


Actividades propuestas:

1. Intenta cambiar el contenido para presentar un proyecto o producto que te interese.
2. Intenta cambiarlo para que sea fondo claro con contenido oscuro.

   + Agregando estilo al final de style.css
   + Cambiando el estilo existente en style.css

Pagina Principal
----------------

Esta pagina es bastante mas larga así que vamos a probar una forma nueva.

Podes ver el resultado visitando https://creemosenlaweb.github.io/paginas/landing/

En la pagina principal hace click derecho en cada imagen y selecciona la opción
"Descargar imagen como..." o similar.

Descarga todas las imágenes.

Hace click en la pagina y presiona las teclas Ctrl y "u" a la vez, esto debería
abrirte una ventana nueva con el HTML la pagina. Otra forma de hacerlo en algunos
navegadores es haciendo click derecho con el mouse sobre la pagina y seleccionando
la opción "Ver Código" o similar.

Copia el HTML en un proyecto nuevo.

Visita la dirección: https://creemosenlaweb.github.io/paginas/landing/style.css

Copia el CSS en el archivo style.css del proyecto.

Agrega las imágenes que descargaste en el directorio `assets`.

Actividades propuestas:

1. Intenta cambiar el contenido para presentar un proyecto o producto que te interese.
2. Intenta cambiarlo las imágenes

   + Manteniendo los nombres de las imágenes existentes (subiendo nuevas imágenes con nombres existentes)
   + Cambiando el nombre de las imágenes en el HTML (subiendo nuevas imágenes con nombres nuevos)

Deberia quedar mas o menos así:

.. raw:: html

	<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
	  <iframe
		allow="geolocation; microphone; camera; midi; encrypted-media"
		src="https://glitch.com/embed/#!/embed/reusando-html--paso-3?path=index.html&previewSize=33"
		alt="reusando-html--paso-3 on Glitch"
		style="height: 100%; width: 100%; border: 0;">
	  </iframe>
	</div>
