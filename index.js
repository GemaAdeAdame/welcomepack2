import { getPokemonList } from "./info.js";


function mostrarSaludoDentroDeDosSegundos() {
  setTimeout(slowAlert, 2000);
}
function slowAlert() {
  alert("¡¡Bienvenid@s a nuestra página!!");
}

mostrarSaludoDentroDeDosSegundos();




async function showHome() {
  // Aquí puedes mostrar la página de inicio
  
const homeTitle = document.getElementById("homeTitle");
const pokemonList = document.getElementById("pokemonList");
const pokemonDetails = document.getElementById("pokemonDetails");
const back__Button = document.getElementById("back__");

}

async function showList() {
  const pokemonList = await getPokemonList();

  if (pokemonList) {
    // Aquí puedes mostrar la lista de Pokémon
    console.log(pokemonList);
  } else {
    console.log("No se pudo obtener la lista de Pokémon.");
  }
}

async function showDetailsPokemon(pokemon) {
  // Aquí puedes mostrar los detalles del Pokémon
  console.log(pokemon);
}

// Lógica para mostrar la página de inicio por defecto
showHome();

// Event listener para mostrar la lista de Pokémon
document.getElementById("list-link").addEventListener("click", showList);
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("list-link").addEventListener("click", showList);
});

// Event listener para mostrar detalles de un Pokémon
// document.getElementById("pokemon-list").addEventListener("click", (event) => {
//   if (event.target.classList.contains("character_name")) {
//     const pokemonId = event.target.id;
//     const pokemon = getPokemonById(pokemonId); // Debes implementar esta función
//     showDetailsPokemon(pokemon);
//   }
// });


