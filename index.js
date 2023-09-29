import { displayPokemons } from "./list.js";

//------------ Timeout -----------------------
function showGrettingTwoSeconds() {
  setTimeout(slowAlert, 2000);
}
function slowAlert() {
  alert("¡¡Bienvenid@s a nuestra página!!");
}
showGrettingTwoSeconds();

const homeTitle = document.getElementById("homeTitle");
const pokemonList = document.getElementById("pokemonList");
const pokemonDetails = document.getElementById("pokemonDetails");
const back__Button = document.getElementById("back__");

pokemonDetails.style.display = "none";
back__Button.style.display = "none";

homeTitle.style.display = "block";
pokemonList.style.display = "none";
pokemonDetails.style.display = "none";
back__Button.style.display = "none";

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
      alert("Ya estás en la página de Home");
    } else {
      hasVisitedHome = true;
    }
  });

  listLink.addEventListener("click", async () => {
    if (hasVisitedList) {
      alert("Ya estás en la página de List");
    } else {
      hasVisitedList = true;
      homeTitle.style.display = "none";
      pokemonList.style.display = "block";
      pokemonDetails.style.display = "none";
      back__Button.style.display = "none";
      const lista = await displayPokemons();
      pokemonList.appendChild(lista);
    }
  });
});

function toggleMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const menut = document.getElementById("menu-toggle");

  menuToggle.addEventListener("click", () => {
    menut.classList.toggle("hidden");
  });
}
toggleMenu();

function showAlertOnHomeLinkClick() {
  const homeLink = document.getElementById("home-link");

  homeLink.addEventListener("click", () => {
    alert("Ya estás en la página de Home");
  });
}
showAlertOnHomeLinkClick();

const mostrarDetalles = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("No se pudo obtener la información del Pokémon.");
  }

  homeTitle.style.display = "none";
  pokemonList.style.display = "none";
  pokemonDetails.style.display = "block";
  back__Button.style.display = "block";

  const data = await response.json();
  const nombrePokemon = document.getElementById("pokemon__name");
  const imagenPokemon = document.getElementById("pokemon__img");
  const descripcionPokemon = document.getElementById("pokemon__description");

  nombrePokemon.textContent = data.name;
  imagenPokemon.src = data.sprites.front_default;
  descripcionPokemon.textContent = `Altura: ${data.height} dm, Peso: ${data.weight} hg`;
};




