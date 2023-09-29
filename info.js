const apiURL = `https://pokeapi.co/api/v2/pokemon/`;

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {})
  .catch((error) => {});

document.addEventListener("DOMContentLoaded", function () {
  const pokemonListContainer = document.getElementById("pokemon-list");

  async function obtenerListaPokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1000"
      );
      if (!response.ok) {
        throw new Error("No se pudo obtener la lista de Pokémon.");
      }

      const data = await response.json();
      const pokemonList = data.results;

      const mostrarDetallesButton = document.createElement("button");
      mostrarDetallesButton.textContent = "Mostrar Detalles";
      pokemonListContainer.appendChild(mostrarDetallesButton);

      mostrarDetallesButton.addEventListener("click", function () {
        mostrarBotonesPokemon(pokemonList);
      });
    } catch (error) {}
  }

  function mostrarBotonesPokemon(pokemonList) {
    pokemonListContainer.innerHTML = "";

    pokemonList.forEach((pokemon, index) => {
      const pokemonButton = document.createElement("button");
      pokemonButton.textContent = `${index + 1}. ${pokemon.name}`;
      pokemonListContainer.appendChild(pokemonButton);

      pokemonButton.addEventListener("click", function () {
        alert(`Has seleccionado a ${pokemon.name}`);
      });
    });
  }

  obtenerListaPokemon();
});
