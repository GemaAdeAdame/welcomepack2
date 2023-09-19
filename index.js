//*Saludo de 2 segundos
var timeoutID;

// Función que crea el timeout
function mostrarSaludoDentroDeDosSegundos() {
  timeoutID = setTimeout(slowAlert, 2000); 
}
// Función que muestra un alert
function slowAlert() {
   alert("¡¡Bienvenid@s a nuestra página!!");
}
// Llamamos a la función que crea el timeout
mostrarSaludoDentroDeDosSegundos();

//*pokeAPI

const apiURL = `https://pokeapi.co/api/v2/pokemon/`;

fetch(apiURL)
.then(response => response.json())
.then(data => {
    console.log(data.results);
})
.catch(error => {
    console.error('error')
});

/*páginas*/

document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const listLink = document.getElementById("list-link");
 

  homeLink.addEventListener("click", function() {
  content.textContent = "Estoy en home";
});

  listLink.addEventListener("click", function () {
  content.textContent = "Estoy en listado";
  });

});

// JavaScript para expandir al hacer clic
const element = document.querySelectorAll('.element');

element.forEach(element => {
    element.addEventListener('click', function () {
        // Agregar o quitar la clase 'expandido' al hacer clic
        this.classList.toggle('expandido');
    });
});



document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".header__views ul");

  menuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const header = document.querySelector(".header");

  menuToggle.addEventListener("click", function () {
      header.classList.toggle("menu-active");
  });
});

