// Definir ruta a la que hacer la petición
const apiURL = `https://pokeapi.co/api/v2/pokemon`;

// Función para obtener la lista de pokemons con un limite decidido más abajo
// async function pokemon(limit) {}
const pokemons = async (limit) => {
  const response = await fetch(apiURL + `?limit=${limit}`);
  if (!response.ok) {
    throw new Error("No se pudo obtener la lista de Pokémon.");
  }
  const data = await response.json();
  return data.results;
};
//-----------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const listLink = document.getElementById("list-link");

  listLink.addEventListener("click", async () => {
    homeTitle.style.display = "none";
    pokemonList.style.display = "block";
    pokemonDetails.style.display = "none";
    back__Button.style.display = "none";
    if (!document.getElementById("pokeLista")) {
      // En caso de ser la primera llamada
      const lista = document.createElement("ul");
      lista.setAttribute("id", "pokeLista");
      // Llamada a los pokemon
      const pokemonLista = await pokemons(30);
      console.log(pokemonLista);
      pokemonLista.forEach((p) => {
        const elemento = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = p.name;
        button.setAttribute("onclick", `mostrarDetalles("${p.url}");`);
        elemento.appendChild(button);
        lista.appendChild(elemento);
      });
      pokemonList.appendChild(lista);
    }
  });
});
