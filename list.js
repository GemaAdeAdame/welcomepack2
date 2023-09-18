document.addEventListener("DOMContentLoaded", function () {
    const pokemonList = [
        { numero: 25, nombre: "Pikachu" },
        { numero: 4, nombre: "Charmander" },
        { numero: 1, nombre: "Limber"},
        { numero: 3, nombre: "Imposter"},
                // Agrega más Pokémon a la lista según sea necesario
    ];

    const listContainer = document.getElementById("pokemon-list");

    // Función para crear y agregar botones a la lista
    function createPokemonButtons() {
        pokemonList.forEach((pokemon) => {
            const button = document.createElement("button");
            button.textContent = pokemon.nombre;
            button.addEventListener("click", () => {
                // Cuando se hace clic en un botón, mostrar detalles del Pokémon
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

            const nombrePokemon = document.getElementById("nombre-pokemon");
            const imagenPokemon = document.getElementById("imagen-pokemon");
            const descripcionPokemon = document.getElementById("descripcion-pokemon");
            const mostrarDetallesButton = document.getElementById("mostrar-detalles");
            const atrasButton = document.getElementById("atras");

            nombrePokemon.textContent = data.name;
            imagenPokemon.src = data.sprites.front_default;
            descripcionPokemon.textContent = `Altura: ${data.height} dm, Peso: ${data.weight} hg`;

            // Ocultar el botón "Mostrar Detalles" y mostrar el botón "Atrás"
            mostrarDetallesButton.style.display = "none";
            atrasButton.style.display = "inline";
        } catch (error) {
            console.error("Error:", error);
        }
    }
});
