//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Eventos
eventListeners();

function eventListeners() {
  formulario.addEventListener('submit', agregarTweet);

}

//Funciones

function agregarTweet(e) {
  e.preventDefault();

  //Texarea donde el usuario escribe
  const tweet = document.querySelector('#tweet').value;

  //console.log(tweet);

  //validacion
  if (tweet==='') {
    mostrarError('El tweet no puede estar vacío');
    return;
  }
  const tweetObj = {
    id: Date.now(),
    tweet
  }

  //Añadir al arreglo de tweets
  tweets = [...tweets, tweetObj];

  // Una vez agregado vamos a crear el html
  crearHtml();

  //Reiniciar el formulario
  formulario.reset();

}

function mostrarError(error) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = error;
  mensajeError.classList.add('error');

  //Insertar en el contenido
  const contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);

  //Borrar el mensaje despues de 3 segundos
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//muestra un listado
function crearHtml() {
  if(tweets.length > 0) {
    limpiarHtml();
    tweets.forEach(tweet => {
      //crear el elemento html
      const li = document.createElement('li');
      //Añadir el texto
      li.textContent = tweet.tweet;
      //Insertando el html
      listaTweets.appendChild(li);
    });
  }
}

//Limpiar el html
function limpiarHtml() {
  while(listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
