document.addEventListener("DOMContentLoaded", function () {
    const pokemonNumero = 25;
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonNumero}/`;
    let detallesMostrados = false; // Variable para controlar si se muestran los detalles

    async function mostrarDetalle() {
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

            // Ocultar el botón "Mostrar Detalles" y mostrar el botón "Atrás"
            mostrarDetallesButton.style.display = "none";
            back__Button.style.display = "inline";

            detallesMostrados = true;
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const mostrarDetallesButton = document.getElementById("details__");
    const back__Button = document.getElementById("back__");

    mostrarDetallesButton.addEventListener("click", function () {
        if (!detallesMostrados) {
            mostrarDetalle();
        }
    });

    back__Button.addEventListener("click", function () {
        // Restablecer la vista al estado inicial
        const nombrePokemon = document.getElementById("pokemon__name");
        const imagenPokemon = document.getElementById("pokemon__img");
        const descripcionPokemon = document.getElementById("pokemon__description");
        const mostrarDetallesButton = document.getElementById("details__");
        const back__Button = document.getElementById("back__");

        nombrePokemon.textContent = "";
        imagenPokemon.src = "";
        descripcionPokemon.textContent = "";

        // Mostrar el botón "Mostrar Detalles" y ocultar el botón "Atrás"
        mostrarDetallesButton.style.display = "inline";
        back__Button.style.display = "none";

        detallesMostrados = false;
    });
});
