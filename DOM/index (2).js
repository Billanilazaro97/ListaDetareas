//Manipular Los Elementos
//Podemos seleccionar los elementos HTML desde la consola y, luego, acceder a sus Propiedades para modificar sus valores a través del comando querySelector.

//Paso A Paso

//Para seleccionar un elemento desde la consola (o desde el script), debemos escribir document.querySelector().

document.querySelector()//: Es uno de los métodos para seleccionar un elemento. Devuelve solo el primer elemento que coincida con el selector CSS dado. El término “Query Selector” viene del inglés “consulta por selector”.

//Veamos un ejemplo. Para seleccionar el elemento h1, escribimos:

document.querySelector("h1") // Selecciona el primer "h1" que encuentra en el documento
//Luego, si deseamos cambiar el color de la tipografía a lima (lime):

document.querySelector("h1").style.color = "lime"
"lime"
//Por último, podemos guardar esta referencia en una Variable:

document.querySelector(".ejemplo_clase")
let parrafo = document.querySelector(".ejemplo_clase")
//Si ahora quisiéramos cambiar el color de la tipografía a rojo (red):

parrafo.style.color = "red"
"red"
//Recordá: En JavaScript no se usan guiones, se usa 🐪 camelCase.

//Repaso: Selectores CSS
//Abrí esta página, luego abrí la consola JavaScript y prestá atención a qué selecciona cada uno de estos comandos:

document.body
document.querySelector('p')
document.querySelector('#primary')
document.querySelector('.important')
document.querySelector('p.important')
document.querySelector('#nav ol li')
document.querySelector('h1, p')

(-----------------------------------)

//Manipular El Estilo
//Si quisiéramos modificar las Propiedades de un documento, podríamos seleccionar un elemento con un querySelector y, luego, modificar su estilo. Sin embargo, esto es poco escalable.

//La alternativa más práctica es definir una Clase con todas las propiedades CSS y aplicarla usando JavaScript. Para eso, usaremos un método llamado classList, en el que seleccionamos un elemento y le agregamos una Clase determinada pasándola como valor.

//Recordá: En vez de cambiar todas las Propiedades del estilo desde JavaScript, la forma más escalable de hacerlo es a través de la Clase en el documento CSS.

//La Propiedad classList nos permite acceder a las Clases presentes en un elemento. A su vez, podemos combinarlo con ciertos métodos para manipular el estilo.

//Veamos un ejemplo:

h2.classList.add("importante")
//En este caso, le agregamos la Clase importante a un <h2> utilizando el método add (del inglés "agregar").

//classList es una Función que toma como valor el nombre de una Clase. Por lo tanto, no hace falta ponerle el punto adelante (.importante).

//De la misma manera, podríamos suprimir la Clase importante utilizando el método remove (del inglés "quitar"):

h2.classList.remove("importante")
//También hay un método llamado toggle (del inglés "alternar") que cambia entre sacar y agregar la Clase. En otras palabras, si la Clase está presente, toggle la quita; si está ausente, la agrega:

h2.classList.toggle("importante")
//classList: Métodos Más Usados

//☑️ add: Agrega una Clase al elemento HTML. Si ya lo tiene, lo ignora.

//☑️ remove: Suprime una Clase al elemento HTML. Si no lo tiene, lo ignora.

//☑️ toggle: Agrega o suprime una Clase (si lo tiene, lo quita; si no lo tiene, lo agrega).

//☑️ item: Obtiene una Clase por índice.

//☑️ contains: Valida si una Clase específica está presente o no.

//☑️ replace: Reemplaza una Clase por la otra.

//⚠️ Importante: Para nombrar una Clase, no uses términos que sean palabras reservadas (por ejemplo, usar "purple" cuando ya está reservada para el color). De esta manera, evitarás errores y confusión.

(----------------------------------)

//Manipular El Texto Y Contenido
//Además de manipular los estilos, podemos manipular los textos del HTML. Para eso, usaremos las Propiedades textContent (del inglés “contenido de texto”) y innerHTML.

//⚠️ Importante: La propiedad textContent es para todos los elementos o tags HTML que muestren texto (h1, <span>, <p>).

//Veamos un ejemplo. Si quisiéramos modificar el texto presente en h1 ("primer h1!"), primero definimos la Variable y luego utilizamos textContent:

let h1 = document.querySelector("h1")
h1
h1.textContent = "¡Hola!"

//Ahora, supongamos que quisiéramos agregar un tag <p> al texto:

h1.textContent = "<p>¡Hola!</p>" // Se modifica de manera literal, no interpreta si hay tags.

//Se modifica el contenido de la etiqueta (o elemento HTML) de manera literal.

//🛎 Recordá: En HTML, los tags pueden contener texto, otro tag o una combinación de ambos.

//Por lo tanto, si quisiéramos modificar el contenido de HTML de un documento, debemos usar innerHTML. Este devuelve el texto contenido en las etiquetas HTML. De esta manera, interpretará cada tag y lo traducirá en la pantalla.

h1.innerHTML = "<p>¡Hola!<p>"

//En síntesis, con la Propiedad textContent podemos modificar todos los elementos o tags HTML que muestren texto. Con innerHTML, podemos modificar el contenido del tag; por ejemplo, reemplazándolo por otro tag.


//Si un elemento HTML tiene contenido y no querés que lo pise, podés usar:

let h1 = document.querySelector("h1")
h1.textContent += "Esto se agrega a lo que ya tiene por el +="

(---------------------------)

//Manipular Los Atributos De Un Elemento
//Además de manipular elementos, estilos y contenido, podemos modificar los atributos de un elemento en HTML.

//¿Qué Son Los Atributos?

//Según Mozilla, "los elementos en HTML tienen atributos; estos son valores adicionales que configuran los elementos o ajustan su comportamiento de diversas formas para cumplir los criterios de los usuarios". Un atributo puede ser el src (source) de una imagen, el href de un hipervínculo, etc.


//El método getAttribute() nos devuelve el valor del atributo especificado. Con el método setAttribute() definiremos un valor para el atributo.

//Veamos un ejemplo. Supongamos que tenemos el siguiente tag:

<a href="http://www.google.com" id="btn-google">Ir a Google</a>
//Por ahora el link nos lleva a www.google.com, pero queremos modificarlo por www.plataforma5.la. Para hacerlo, primero debemos usar el método querySelector desde JavaScript:

let botonGoogle = document.querySelector("#btn-google");
//Luego, usaremos getAttribute() y setAttribute():

botonGoogle.getAttribute("href") // Nos muestra cuál es el valor del atributo href.

botonGoogle.setAttribute("href", "http://www.plataforma5.la") // Cambia el valor del atributo href por el valor que se pasa como segundo Parámetro.
//De esta manera, reemplazamos un atributo href por el otro.

//Por último, si quisiéramos cambiar el texto "Ir a Google", debemos usar textContent:

botonGoogle.textContent = "Ir a Plataforma 5"
//Veamos otro ejemplo. Supongamos que queremos reemplazar una imagen por otra:

<img src="logo.png">
let logo=document.querySelector("img")
logo.getAttribute("src") // "logo.png"
logo.setAttribute("src", "http://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg")

{/* 🛎 Recordá: src es una Propiedad del Objeto img que tiene como valor una dirección en donde está alojada la imagen. */}

(----------------------------------)

{/* Manipular Varios Elementos
Hasta ahora, aprendimos a usar querySelector() para modificar elementos específicos. Sin embargo, este método solo trae el primer elemento de un tipo.

Para seleccionar varios elementos al mismo tiempo, existe el método querySelectorAll().

📚 querySelectorAll() devuelve un Node list (lista de nodos) de todos los elementos que coincidan con el selector.

Diferencias entre Node list y Arreglo

El método querySelectorAll() no devuelve un Arreglo, sino un Node list. Para entender la diferencia entre ambos, hacé click acá. */}

{/* Recapitulando, si utilizamos querySelector("a"), solamente nos trae el primer link: */}

document.querySelector("a") // Solamente nos trae el primer link
{/* En cambio, querySelectorAll("a") nos devuelve una lista de nodos con todos los elementos de este tipo: */}

document.querySelectorAll("a") {/* // Nos devuelve una lista de nodos con todos los elementos de este tipo
Ahora bien, si quisiéramos modificar todos los links de nuestra página, no podremos hacerlo usando setAttribute(), ya que solo funciona sobre Objetos (no listas). Por eso, deberás recorrerlo usando un loop. */}

{/* Para eso, seguí estos pasos:

Guardá la lista de nodos en una Variable. */}

let todosLosLinks = document.querySelectorAll("a")

{/* Recorré la Variable con un loop, de modo tal que, en cada vuelta, se modifique con setAttibute. */}
for (let i = 0; i < todosLosLinks.length; i++) {
todosLosLinks[i].setAttribute("href", "http://www.plataforma5.la")
}
{/* 🛎 Recordá: Es una convención usar las letras "i" o "j" para los contadores.
 */}
{/* Ejercicio
Retomando el ejemplo anterior, supongamos que ahora queremos cambiar el texto de los párrafos.

Pensá cómo podrías hacerlo y probá el código en tu consola antes de mirar la solución.

 */}
let parrafos = document.querySelectorAll("p")

for (let i = 0; i < parrafos.length; i++) {
parrafos[i].textContent = "Parrafo " + (i + 1)
}
{/* Debería quedar: Párrafo 1, Párrafo 2, Párrafo 3, etc. */}

(----------------------)

{/* Crear Elementos
Para crear diferentes elementos y luego añadirlos a un documento, debemos usar el método createElement.

⚠️ Importante: Con createElement se crea un Objeto que luego agregaremos al DOM.

Veamos su sintaxis: */}

let elemento = document.createElement("elemento") {/* // Pasamos un String como parámetro, que indica qué etiqueta queremos crear.
Ahora veamos un ejemplo. Si quisiéramos crear una etiqueta h1, primero debemos guardar su referencia en una Variable: */}

let h1 = document.createElement("h1")
{/* Luego, le podemos agregar texto usando textContent: */}

h1.textContent = "Plataforma 5"
{/* Por último, podemos crear un elemento div: */}

let div = document.createElement("div")
{/* Si querés conocer más sobre el método createElement, accedé a la documentación de Mozilla.

🛎 Recordá: Podés ingresar a los distintos nodos y ver cómo son las relaciones entre nodos e hijos. Hacé click acá para aprender más.

En la próxima sección, aprenderás cómo agregar el h1 creado en el div y cómo sumarlos a tu sitio web. */}

(----------------)

{/* Agregar Y Remover Elementos
appendChild
Para agregar un elemento dentro de otro usaremos el método appendChild. De esta forma, podemos incluir en un nodo un nuevo hijo.

Veamos su sintaxis:
 */}
document.elementoPadre.appendChild(elementoHijo){/*  // Pasamos como parámetro el Objeto que creamos en el paso anterior

🤓 Tip: Si querés crear un párrafo nuevo con texto, creá el texto como un nodo de Texto que agregarás al párrafo. Luego, agregá ese párrafo al documento.

⚠️ Importante: También podés usar este método para mover un elemento, de un elemento a otro.

Para aprender más sobre este método, accedé a la documentación de Mozilla.

Paso A Paso
Volviendo al ejemplo anterior, si quisiéramos agregar el elemento h1 a la Variable div:

La Variable div debe llamar al método appendChild.
Para ello, el argumento del método debe ser el elemento a agregar (en este caso, h1).
div.appendChild(h1) // En este caso, h1 es el Objeto creado anteriormente. Por eso no es un String (como en el caso de document.createElement).
📛 En la consola, comprobá que el elemento h1 se encuentre dentro del div */}

{/* Luego, agregá el div al body, pasándolo como argumento:*/}
document.body.appendChild(div)

{/* removeChild
Para remover un elemento de nuestro sitio web, usamos el método removeChild.

Veamos su sintaxis: */}

document.ElementoPadre.removeChild(elementoHijo)
{/* Por ejemplo, el siguiente código remueve el div del body:
 */}
document.body.removeChild(div)