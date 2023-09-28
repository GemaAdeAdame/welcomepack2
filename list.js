// list.js

import { getPokemonList } from "./info"; // Asegúrate de que la ruta del archivo sea correcta

const apiURL = `https://pokeapi.co/api/v2/pokemon`;

const pokemons = async (limit) => {
  const response = await fetch(`${apiURL}?limit=${limit}`);
  if (!response.ok) {
    throw new Error("No se pudo obtener la lista de Pokémon.");
  }
  const data = await response.json();
  return data.results;
};

document.addEventListener("DOMContentLoaded", async function () {
  const listLink = document.getElementById("list-link");

  listLink.addEventListener("click", async () => {
    homeTitle.style.display = "none";
    pokemonList.style.display = "block";
    pokemonDetails.style.display = "none";
    back__Button.style.display = "none";

    if (!document.getElementById("pokelist")) {
      const list = document.createElement("ul");
      list.setAttribute("id", "pokelist");

      const pokemonlist = await pokemons(30);
      pokemonlist.forEach((p) => {
        const element = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = p.name;
        button.setAttribute("onclick", `mostrarDetalles("${p.url}");`);
        element.appendChild(button);
        list.appendChild(element);
      });

      pokemonList.appendChild(list);
    }
  });
});
