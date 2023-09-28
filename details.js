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
  const pokemonName = document.getElementById("pokemon__name");
  const pokemonImage = document.getElementById("pokemon__img");
  const pokemonDescription = document.getElementById("pokemon__description");

  pokemonName.textContent = data.name;
  pokemonImage.src = data.sprites.front_default;
  pokemonDescription.textContent = `Altura: ${data.height} dm, Peso: ${data.weight} hg`;
};

back__Button.addEventListener("click", function () {
  const pokemonName = document.getElementById("pokemon__name");
  const pokemonImage = document.getElementById("pokemon__img");
  const pokemonDescription = document.getElementById("pokemon__description");

  pokemonName.textContent = "";
  pokemonImage.src = "";
  pokemonDescription.textContent = "";

  homeTitle.style.display = "none";
  pokemonList.style.display = "block";
  pokemonDetails.style.display = "none";
  back__Button.style.display = "none";
});
