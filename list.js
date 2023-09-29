const apiURL = `https://pokeapi.co/api/v2/pokemon`;

const pokemons = async (limit) => {
  const response = await fetch(`${apiURL}?limit=${limit}`);
  if (!response.ok) {
    throw new Error("No se pudo obtener la lista de Pokémon.");
  }
  const data = await response.json();
  return data.results;
};
//-----------------------------------------
const displayPokemons = async () => {
  if (!document.getElementById("pokeLista")) {
    const lista = document.createElement("ul");
    lista.setAttribute("id", "pokeLista");

    const pokemonLista = await pokemons(30);

    pokemonLista.forEach((p) => {
      const elemento = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = p.name;
      button.setAttribute("onclick", `mostrarDetalles("${p.url}");`);
      elemento.appendChild(button);
      lista.appendChild(elemento);
    });
    return lista;
  } else {
    alert("Los pokemon ya se han mostrado");
  }
};

export { displayPokemons };
