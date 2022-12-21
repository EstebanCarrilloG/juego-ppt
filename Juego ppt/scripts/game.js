export function startGame() {
  function getRandomInt(max) {
    // Obtenemos un número aleatorio de  0 a 2
    return Math.floor(Math.random() * max);
  }

  function boxShadow(w, l) {
    // Añadimos una sombra a los elementos del resultado
    player.style.boxShadow = `inset 0px 0px 5px 2px ${w}`;
    computer.style.boxShadow = `inset 0px 0px 5px 2px ${l}`;
  }

  function result(text, state) {
    let wColour = "green";
    let lColour = "red";

    gResult.innerText = text; // Mostramos en el DOM el texto recibido

    //  Con el siguiente código añadimos una sombra de color rojo o verde al contenedor de las imágenes en el apartado de resultado:
    //  Rojo referencia perdida
    //  Verde referencia, victoria o empate
    state == undefined
      ? boxShadow(wColour, wColour)
      : state == 0
      ? boxShadow(lColour, wColour)
      : boxShadow(wColour, lColour);

    // Después de 3 segundos volvemos al estado inicial para así poder jugar nuevamente
    setTimeout(() => {
      btnsContainer.style.display = "flex";
      resultContent.style.display = "none";
    }, 3000);
  }

  function game(playerSelection, rdnNumber, imgElement) {
    let pcSelection = options[rdnNumber].type; // Selección de la máquina
    let pcSelectionImg = options[rdnNumber].url;

    computer.innerHTML = ""; // Limpiamos el elemento en donde se renderiza la imagen de la elección de la máquina

    player.innerHTML = imgElement; // Mostramos la imagen del botón pulsado por el usuario

    let pcImg = document.createElement("img"); // Creamos un elemento de tipo imagen
    pcImg.setAttribute("src", `${pcSelectionImg}.jpg`); //

    computer.appendChild(pcImg); // Muestra imagen del elemento elegido aleatoriamente por la computadora

    if (playerSelection == pcSelection) {
      // Comprobamossí hay un empate
      result("Empate"); // Ejecutamos la función enviándole como parámetro un texto
    } else {
      (playerSelection == "piedra" && pcSelection == "tijera") || // Hacemos las verificaciones correspondientes para determinar al ganador
      (playerSelection == "papel" && pcSelection == "piedra") ||
      (playerSelection == "tijera" && pcSelection == "papel")
        ? result("El jugador gana.", 1) // Ejecutamos la función enviándole como parámetro un texto y un valor booleano
        : result("La computadora gana.", 0);
    }

    playerSelection = "";
    rdnNumber = 0;
  }

  let options = [
    // Opciones a elegir para la computadora y urls de las imagenes
    {
      type: "piedra",
      url: "https://lh3.googleusercontent.com/-D4ja_od6Sjo/Y54mVun4flI/AAAAAAAAR7w/Afwiv1L_N6gRe2V8JtgyxdzPeGyId7ZIACNcBGAsYHQ/h120/piedra.jpg",
    },
    {
      type: "papel",
      url: "https://lh3.googleusercontent.com/-0tMGkyW0GyY/Y54mVkQLsTI/AAAAAAAAR70/xIzfaJLtcQQbud-jNJ9RiiDhPpHHtA6nwCNcBGAsYHQ/h120/papel.jpg",
    },
    {
      type: "tijera",
      url: "https://lh3.googleusercontent.com/-EK9U6H2ysBs/Y54mVmZT-VI/AAAAAAAAR74/HeWmsDooJMw1mqO8GCdZhFwjDDDRw-XKQCNcBGAsYHQ/h120/tijera.jpg",
    },
  ];

  let buttonPressed = document.querySelectorAll("button.game-btn"); // Selector de elementos tipo Button

  buttonPressed.forEach((e) => {
    e.addEventListener("click", function () {
      btnsContainer.style.display = "none"; // Ocultamos la parte de los botones
      resultContent.style.display = "initial"; // Mostramos la parte de resultados del juego

      let playerSelection = this.getAttribute("data-type"); // Tomamos el valor del atributo data-type del botón presionado
      let imgElement = this.innerHTML; // Guardamos el elemento img dentro de una variable
      let rdnNumber = getRandomInt(3); // Generamos un número aleatorio el cual nos servirá para determinar la elección de la computadora
      game(playerSelection, rdnNumber, imgElement); // Ejecutamos la función game le enviamos la elección del jugador, el número aleatorio y la imagen del elemento que selecciono el usuario
    });
  });
}
