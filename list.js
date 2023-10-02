const apiURL = `https://pokeapi.co/api/v2/pokemon`;

const pokemons = async (limit) => {
  const response = await fetch(`${apiURL}?limit=${limit}`);
  if (!response.ok) {
    throw new Error("No se pudo obtener la list de Pokémon.");
  }
  const data = await response.json();
  return data.results;
};

const displayPokemons = async () => {
  if (!document.getElementById("pokelist")) {
    const list = document.createElement("ul");
    list.setAttribute("id", "pokelist");

    const pokemonlist = await pokemons(30);

    pokemonlist.forEach((p) => {
      const elemento = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = p.name;
      button.setAttribute("onclick", `mostrarDetalles("${p.url}");`);
      elemento.appendChild(button);
      list.appendChild(elemento);
    });
    return list;
  } else {
    alert("Los pokemon ya se han mostrado");
  }
};

export { displayPokemons };
