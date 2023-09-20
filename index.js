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


/*document.addEventListener("DOMContentLoaded", function () {
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
/*  });
});*/
/*
document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const listLink = document.getElementById("list-link");

  homeLink.addEventListener("click", function () {
    homeTitle.style.display = "block";
    pokemonList.style.display = "none";
    pokemonDetails.style.display = "none";
    back__Button.style.display = "none";
    
    alert('Ya estás en la página de Home');
  });

  listLink.addEventListener("click", function () {
    alert('Ya estás en la página de List');
  });
});*/
document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const listLink = document.getElementById("list-link");
  let hasVisitedHome = false;
  let hasVisitedList = false;

  homeLink.addEventListener("click", function () {
    homeTitle.style.display = "block";
    pokemonList.style.display = "none";
    pokemonDetails.style.display = "none";
    back__Button.style.display = "none";
    
    if (hasVisitedHome) {
      alert('Ya estás en la página de Home');
    } else {
      hasVisitedHome = true;
    }
  });

  listLink.addEventListener("click", function () {
    if (hasVisitedList) {
      alert('Ya estás en la página de List');
    } else {
      hasVisitedList = true;
    }
  });
});



// toggle menú
const menuToggle = document.getElementById('menuToggle');
const menut = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  menut.classList.toggle('hidden');
});



const homeLink = document.getElementById('home-link');

homeLink.addEventListener('click', () => {
  alert('Ya estás en la página de Home');
});


/*alert ya estoy en home y ya estoy en listado
  const homeLink = document.getElementById('home-link');
  const listLink = document.getElementById('list-link');

  homeLink.addEventListener('click', () => {
    alert('Ya estás en la página de Home');
  });

  listLink.addEventListener('click', () => {
    alert('Ya estás en la página de Listado');
  });
*/




