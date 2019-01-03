Datos por favor, es promesa
===========================

En el capítulo anterior vimos como cargar datos simulando la espera que surge
de cargar datos de servicios remotos, ahora vamos a ver como cargar datos
remotos de verdad, pero primero tenemos que aprender sobre algo llamado
promesas.

En una aplicación web todas las partes del código tienen que colaborar haciendo
su trabajo lo mas rápido posible y dejando que otros puedan hacer su trabajo,
si un pedazo de código se toma mucho tiempo, otras partes importantes no se
ejecutan y se produce algo que te puede haber pasado, que es que la aplicación
"se congela".

Es por eso que muchas funcionalidades en js se descomponen en pedazos mas
chicos para evitar este problema.

Una de ellas es cargar datos de otros servicios, no podemos darnos el lujo de
esperar hasta que respondan, ya que si se toma un par de segundos la aplicación
se congela.

La solución es hacer la solicitud y obtener como resultado una promesa.

Una promesa es un objeto que nos permite registrar funciones para cuando la
promesa sea cumplida. La promesa puede ser cumplida exitosamente o puede haber
un error. También podemos registrar funciones para que corran cuando la promesa
sea cumplida, no importa si con éxito o con error.

El tipo de dato promesa (`Promise` en ingles), no es nada mágico, si no que
esta disponible para que la usemos si la necesitamos, vamos a probarla con
ejemplos simples, no te preocupes si no entendés la parte de crear promesas,
requiere un poco de "pensar de adentro para afuera", normalmente al principio
solo "consumimos" promesas, pero es necesario que las creemos así podemos
probar todos los casos.

Proba los fragmentos de código en `glitch <https://glitch.com/>`_ o en la
consola en las herramientas de desarrollo.

Una promesa nunca cumplida:

.. code-block:: js

    let p1 = new Promise(function (resolve, reject) {});

Esta es la forma mas simple de crear una promesa, el tipo de dato `Promise`
permite crear nuevos objetos de ese tipo con el operador `new`, el "constructor"
de las promesas recibe como argumento una función, la función va a ser llamada
en el momento en el que la promesa es construida y dicha función recibe dos
argumentos:

resolve
    una función a ser llamada si la promesa se cumple con éxito.

reject
    una función a ser llamada si la promesa se cumple con un error.

Tanto `resolve` como `reject` son funciones que reciben un solo argumento, que
va a ser pasado a las funciones que registremos para ambos casos.

Una promesa resuelta instantaneamente con éxito:

.. code-block:: js

    let p2 = new Promise(function (resolve, reject) {
        resolve('éxito!');
    });

Una promesa resuelta instantaneamente con error:

.. code-block:: js

    let p3 = new Promise(function (resolve, reject) {
        reject('error!');
    });

Todo muy lindo, pero para que sirve que la resolvamos con éxito o error si no
cambia nada?

La utilidad de las promesas es poder registrar una o mas funciones que van a
ser llamada en los tres casos que ya mencionamos: éxito, error o cuando se
resuelva no importa el caso.

Empecemos registrando una función con la promesa que nunca se resuelve, vamos a
usar el método `then` (entonces en ingles) de los objetos de tipo `Promise`
para registrar una función que va a ser llamada cuando la promesa se cumpla
exitosamente, cuando sea llamada va a recibir un argumento que es el valor con
el que la promesa se cumplió (el valor prometido ;).

.. code-block:: js

    p1.then(function (resultado) {
        alert('p1 resuelta: ' + resultado);
    });

A mi en firefox me muestra este resultado, que quiere decir que llamar al
método `then` del objeto promesa devuelve la promesa misma, esto nos va a ser
útil después para "encadenar" llamadas a métodos en la promesa.

.. code-block:: js

    < Promise { <state>: "pending" }

Fuera de eso, all llamar al método `then` del objeto promesa `p1` no paso nada,
es natural ya que esa promesa esta "pendiente" (pending en ingles) y nunca se
va a cumplir.

La promesa `p2` se cumplió apenas la creamos, que pasa si registramos una
función a ser llamada cuando se resuelva con éxito? Probemos:

.. code-block:: js

    p2.then(function (resultado) {
        alert('p2 resuelta: ' + resultado);
    });

Una aclaración, las funciones que pasamos por parámetro para que sean llamadas
en ingles se llaman "callbacks", que traducido es "llamame de vuelta",
probablemente use esa palabra de ahora en mas porque es mas corta y para que te
acostumbres ya que se usa mucho en la documentación.

Volviendo al código, si lo probaste habrás notado que aparece un cuadro de
dialogo mostrando el mensaje `"p2 resuelta: éxito!"`, es decir que si
registramos un callback aun después de que la promesa sea cumplida la función
va a ser llamada.

Corre el código de nuevo y vas a ver que el dialogo aparece de nuevo, esto es
útil ya que no tenemos que preocuparnos si registramos el callback antes o
después de que la promesa se resuelva, una cosa a tener en cuenta es que cada
callback va a ser llamada una sola vez, ya que cada objeto de promesa puede ser
resuelta una vez.

Ahora probemos lo mismo con la promesa que se resuelve con error:

.. code-block:: js

    p3.then(function (resultado) {
        alert('p3 resuelta: ' + resultado);
    });

El dialogo no aparece... porque `then` registra callbacks para el caso de
éxito, si queremos registrar callbacks para el caso de error, tenemos que usar
el método llamado `catch` (capturar en ingles).

.. code-block:: js

    p3.catch(function (resultado) {
        alert('p3 error: ' + resultado);
    });

Ahora el dialogo aparece.

Que pasa si queremos hacer algo en ambos casos? hay otro método llamado `finally` (finalmente en ingles).

.. code-block:: js

    p2.finally(function () {
        alert('p2 finally');
    });

    p3.finally(function () {
        alert('p3 finally');
    });

Ambos muestran el dialogo, pero como veras no reciben el valor de resolución
porque no sabemos cual sucedió.

Que pasa si queremos hacer un poco de todo, algo si salio bien, por ejemplo
actualizar datos, algo si salio mal, por ejemplo mostrar un error y algo
siempre, por ejemplo esconder un mensaje de "Cargando".

Obviamente podemos escribir las tres llamadas separadas, pero como mencione
las llamadas a los métodos `then`, `catch`, `finally` devuelven la promesa,
por lo que podemos hacer algo que se llama "encadenar" llamadas, veamos como es:

.. code-block:: js

    p2.then(function (resultado) {
        alert('then: ' + resultado);
    })
    .catch(function (resultado) {
        alert('catch: ' + resultado);
    })
    .finally(function () {
        alert('finally');
    });

No cambia nada con hacerlo junto o por separado, pero suele hacerse según
preferencia así que lo aclaro.

Bueno, basta de promesas (cuac!), veamos como usar esto para cargar datos, para
eso vamos a usar una función llamada `fetch` que hace una solicitud HTTP (como
tu navegador para cargar esta pagina, imágenes y datos) y devuelve una promesa,
vamos a cargar datos de ejemplo que puse en una pagina:

.. code-block:: js

    let url = "https://marianoguerra.github.io/creemos-en-la-web/paginas/promesas/datos.json";
    fetch(url);

Ahora con todo lo que sabemos sobre promesas, veamos que nos da la promesa:

.. code-block:: js

    fetch(url).then(function (response) {
        console.log(response);
    });

Lo que hago es mostrar el valor de `response` en la consola usando el método
`log` del objeto `console` (consola en ingles).

A mi en firefox me muestra esto, a vos te puede mostrar algo un poco distinto:

.. code-block:: js

    Response { type: "cors", url: "https://marianoguerra.github.io/creemos-en-la-web/paginas/promesas/datos.json", redirected: false, status: 200, ok: true, statusText: "OK", headers: Headers, body: ReadableStream, bodyUsed: false }

Es un objeto de tipo `Response` (respuesta en ingles) que tiene información
variada sobre la solicitud que hicimos, pero lo que nosotros lo que queremos
son los datos cuando la solicitud termine, para eso tenemos que pedirle al
objeto `response` que lea el contenido de la respuesta. El objeto response
tiene muchos métodos, uno de ellos es el método `text`, que nos devuelve...
otra promesa..., la cual al resolverse nos da el contenido de la solicitud.

.. code-block:: js

    fetch(url).then(function (response) {
        response.text().then(function (text) {
            console.log('Texto!', text);
        });
    });

Al correrlo debería mostrar lo siguiente en la consola::

    Texto! {
        "numero": 42,
        "lista": [1, 2, 3]
    }

Como veras el contenido es texto, pero notaras que son datos javascript, el
subset de javascript que sirve para describir datos y enviarlos entre
computadoras se llama JSON (pronunciado yeison, acrónimo en ingles de
JavaScript Object Notation, que significa Notación de Objetos JavaScript).

Hay un objeto llamado `JSON` que tiene dos métodos útiles, uno llamado `parse`
que recibe como argumento un valor de tipo texto (string) y nos devuelva los
datos representados en ese texto, este es el que necesitamos, probemoslo:

.. code-block:: js

    fetch(url).then(function (response) {
        response.text().then(function (text) {
            let datos = JSON.parse(text);
            console.log('Datos!', datos);
        });
    });

Por suerte como esta es una actividad común, el objeto `response` tiene un
método llamado `json` que hace la tarea por nosotros:

.. code-block:: js

    fetch(url).then(function (response) {
        response.json().then(function (datos) {
            console.log('Datos!', datos);
        });
    });

Ya que estamos hablando de JSON veamos el otro método `stringify` (algo así
como "hacer texto" en ingles), que es el inverso de `parse`, es decir, recibe
datos y nos devuelve la representación JSON de esos datos en un valor de tipo
texto (string):

.. code-block:: js

    JSON.stringify({numero: 42, lista: [1, 2, 3]});

El resultado es:

.. code-block:: js

    < "{\"numero\":42,\"lista\":[1,2,3]}"

Para estar seguros de que funciona, probemos el inverso:

.. code-block:: js

    JSON.parse("{\"numero\":42,\"lista\":[1,2,3]}");

Notar que para poder insertar comillas dobles en un string, que ya tiene
comillas dobles para indicar comienzo y fin, necesitamos poner una barra
invertida antes de la comilla, para indicarle que no es el fin del string, sino
que queremos poner esa comilla "dentro" del string. Esto normalmente se llama
"escapar" caracteres.

Para finalizar, solo recordar que como `fetch` devuelve una promesa, podemos
"encadenar" llamadas a `then`, `catch` y `finally` para hacer distintas
operaciones según cual fue el resultado de la solicitud.

La forma general es:

.. code-block:: js

    fetch(url).then(function (response) {
        // resultado de la solicitud
    })
    .catch(function (error) {
        // si hubo error
    })
    .finally(function (error) {
        // cuando la solicitud termino
    });

Resumiendo, aprendimos sobre promesas, llamadas encadenadas, la función `fetch`
para hacer solicitudes a otros servicios, el formato JSON y su objeto con sus
métodos `parse` y `stringify`.
