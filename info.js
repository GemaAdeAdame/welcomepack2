const apiURL = `https://pokeapi.co/api/v2/pokemon/`;

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {})
  .catch((error) => {});

document.addEventListener("DOMContentLoaded", function () {
  const pokemonListContainer = document.getElementById("pokemon-list");

  async function getListPokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1000"
      );
      if (!response.ok) {
        throw new Error("No se pudo obtener la list de Pokémon.");
      }

      const data = await response.json();
      const pokemonList = data.results;

      constshowButtonDetails = document.createElement("button");
      showButtonDetails.textContent = "Mostrar Detalles";
      pokemonListContainer.appendChild(mostrarDetallesButton);

      showButtonDetails.addEventListener("click", function () {
        showButtonsPokemon(pokemonList);
      });
    } catch (error) {}
  }

  function showButtonsPokemon(pokemonList) {
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

  getListPokemon();
});
