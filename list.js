document.addEventListener("DOMContentLoaded", function () {
    const pokemonList = [
        { numero: 25, nombre: "Pikachu" },
        { numero: 4, nombre: "Charmander" },
        { numero: 1, nombre: "Limber"},
        { numero: 3, nombre: "Imposter"},
        { numero: 101, nombre: "Dito"},
                
    ];

    const listContainer = document.getElementById("pokemon-list");


    function createPokemonButtons() {
        pokemonList.forEach((pokemon) => {
            const button = document.createElement("button");
            button.textContent = pokemon.nombre;
            button.addEventListener("click", () => {
                mostrarDetalle(pokemon.numero);
            });
            listContainer.appendChild(button);
        });
    }

    createPokemonButtons();

    async function mostrarDetalle(pokemonNumero) {
        const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonNumero}/`;

        try {
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error("No se pudo obtener la información del Pokémon.");
            }

            const data = await response.json();

            const nombrePokemon = document.getElementById("pokemon__name");
            const imagenPokemon = document.getElementById("pokemon__img");
            const descripcionPokemon = document.getElementById("pokemon__description");
            const mostrarDetallesButton = document.getElementById("details__");
            const back__Button = document.getElementById("back__");

            nombrePokemon.textContent = data.name;
            imagenPokemon.src = data.sprites.front_default;
            descripcionPokemon.textContent = `Altura: ${data.height} dm, Peso: ${data.weight} hg`;

       
            mostrarDetallesButton.style.display = "none";
            back__Button.style.display = "inline";
        } catch (error) {
            console.error("Error:", error);
        }
    }
});



