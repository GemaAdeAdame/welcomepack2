
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

back__Button.addEventListener("click", function () {
 
  const nombrePokemon = document.getElementById("pokemon__name");
  const imagenPokemon = document.getElementById("pokemon__img");
  const descripcionPokemon = document.getElementById("pokemon__description");

  nombrePokemon.textContent = "";
  imagenPokemon.src = "";
  descripcionPokemon.textContent = "";

  homeTitle.style.display = "none";
  pokemonList.style.display = "block";
  pokemonDetails.style.display = "none";
  back__Button.style.display = "none";
});


