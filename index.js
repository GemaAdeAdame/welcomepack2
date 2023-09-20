//------------ Timeout -----------------------
function mostrarSaludoDentroDeDosSegundos() {
  setTimeout(slowAlert, 2000);
}
function slowAlert() {
  alert("¡¡Bienvenid@s a nuestra página!!");
}

mostrarSaludoDentroDeDosSegundos();

// ---------------------------------------------

// ------ Recoger los divs del index.html ------
const homeTitle = document.getElementById("homeTitle");
const pokemonList = document.getElementById("pokemonList");
const pokemonDetails = document.getElementById("pokemonDetails");
const back__Button = document.getElementById("back__");

// ---- Inicializa los detalles de pokemon ocultando ----
pokemonDetails.style.display = "none";
back__Button.style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");

  homeLink.addEventListener("click", function () {
    /* Solo se necesita mostrar el landing
     Como podemos regresar desde otras vistas,
     hay que asegurarse de ocultar el contenido
     */
    homeTitle.style.display = "block";
    pokemonList.style.display = "none";
    pokemonDetails.style.display = "none";
    back__Button.style.display = "none";
  });
});


// toggle menú
const menuToggle = document.getElementById('menuToggle');
const menut = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  menut.classList.toggle('hidden');
});

function Home() {
  alert("Ya estas aquí");
}